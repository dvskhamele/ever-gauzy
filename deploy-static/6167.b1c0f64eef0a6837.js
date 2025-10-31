"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6167],{

/***/ 693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ ProductGalleryComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64411);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64320);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44495);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59520);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98672);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26161);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94373);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97446);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71466);
/* harmony import */ var _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8738);



















const _c0 = (a0, a1) => ({
  "image-container-notSelected": a0,
  "image-container-selected": a1
});
const _c1 = () => ["INVENTORY_GALLERY_EDIT", "INVENTORY_GALLERY_VIEW"];
const _c2 = a0 => ({
  selected: a0
});
function ProductGalleryComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.displayImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProductGalleryComponent_ga_no_image_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-no-image", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("fontSize", 14);
  }
}
function ProductGalleryComponent_ng_container_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductGalleryComponent_ng_container_4_ng_container_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onViewGalleryClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 3, "INVENTORY_PAGE.VIEW_GALLERY"))("disabled", !(ctx_r0.gallery == null ? null : ctx_r0.gallery.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "BUTTONS.VIEW"), " ");
  }
}
function ProductGalleryComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 9)(2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductGalleryComponent_ng_container_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onAddImageClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 12)(6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductGalleryComponent_ng_container_4_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onSetFeaturedClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "nb-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, ProductGalleryComponent_ng_container_4_ng_container_9_Template, 6, 7, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductGalleryComponent_ng_container_4_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onEditImageClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductGalleryComponent_ng_container_4_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onDeleteImageClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(16, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 8, "INVENTORY_PAGE.ADD_GALLERY_IMAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !(ctx_r0.gallery == null ? null : ctx_r0.gallery.length) || !ctx_r0.selectedImage)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 10, "INVENTORY_PAGE.SET_FEATURED_IMAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", "INVENTORY_GALLERY_VIEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r0.selectedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 12, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 14, "INVENTORY_PAGE.DELETE_IMAGE"))("disabled", !(ctx_r0.gallery == null ? null : ctx_r0.gallery.length) || !ctx_r0.selectedImage);
  }
}
function ProductGalleryComponent_div_6_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
function ProductGalleryComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductGalleryComponent_div_6_div_1_Template_div_click_0_listener() {
      const galleryItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onSmallImgPreviewClick(galleryItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, ProductGalleryComponent_div_6_div_1_div_2_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const galleryItem_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", galleryItem_r5 == null ? null : galleryItem_r5.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(3, _c2, ctx_r0.isSelected(galleryItem_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.isFeaturedImage(galleryItem_r5));
  }
}
function ProductGalleryComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProductGalleryComponent_div_6_div_1_Template, 3, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.gallery);
  }
}
let ProductGalleryComponent = class ProductGalleryComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  get displayImageUrl() {
    if (this.selectedImage) return this.selectedImage.fullUrl;
    if (this.featuredImage) {
      return this.featuredImage.fullUrl;
    }
    return null;
  }
  constructor(translationService, dialogService, imageAssetService, toastrService, store, productService, nbDialogService, galleryService, inventoryStore) {
    super(translationService);
    this.translationService = translationService;
    this.dialogService = dialogService;
    this.imageAssetService = imageAssetService;
    this.toastrService = toastrService;
    this.store = store;
    this.productService = productService;
    this.nbDialogService = nbDialogService;
    this.galleryService = galleryService;
    this.inventoryStore = inventoryStore;
    this.gallery = [];
    this.newImageUploadedEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    this.newImageStoredEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      _this.inventoryStore.activeProduct$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(_this)).subscribe(activeProduct => {
        _this.gallery = activeProduct.gallery;
        _this.featuredImage = activeProduct.featuredImage;
      });
      _this.store.selectedOrganization$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(_this)).subscribe(organization => {
        if (organization) {
          _this.organization = organization;
        }
      });
      _this.newImageUploadedEvent$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(_this)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* (resultData) {
          const newAsset = {
            name: resultData['original_filename'],
            url: resultData.url,
            width: resultData.width,
            height: resultData.height,
            isFeatured: false,
            organizationId: _this.organization.id,
            tenantId: _this.store.user.tenantId
          };
          let result = yield _this.imageAssetService.createImageAsset(newAsset);
          if (result) {
            _this.toastrService.success('INVENTORY_PAGE.IMAGE_SAVED');
            _this.newImageStoredEvent$.next(result);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  onAddImageClick() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      const dialog = _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .SelectAssetComponent */ .a, {
        context: {
          newImageUploadedEvent: _this2.newImageUploadedEvent$,
          newImageStoredEvent: _this2.newImageStoredEvent$,
          settings: {
            selectMultiple: true,
            deleteImageEnabled: true,
            uploadImageEnabled: true
          }
        }
      });
      let selectedImages = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .firstValueFrom */ ._)(dialog.onClose);
      if (!selectedImages) return;
      selectedImages = selectedImages.length ? selectedImages.filter(image => {
        return !_this2.inventoryStore.gallery.find(galleryImg => {
          return galleryImg.id == image.id || galleryImg.name == image.name;
        });
      }) : [];
      try {
        if (selectedImages.length && _this2.inventoryStore.activeProduct.id) {
          let resultProduct = yield _this2.productService.addGalleryImages(_this2.inventoryStore.activeProduct.id, selectedImages);
          _this2.inventoryStore.activeProduct = resultProduct;
          _this2.toastrService.success('INVENTORY_PAGE.IMAGE_ADDED_TO_GALLERY');
        } else if (selectedImages.length && !_this2.inventoryStore.activeProduct.id) {
          _this2.inventoryStore.addGalleryImages(selectedImages);
          _this2.toastrService.success('INVENTORY_PAGE.IMAGE_ADDED_TO_GALLERY');
        }
      } catch (err) {
        _this2.toastrService.danger('Something bad happened');
      }
    })();
  }
  onSmallImgPreviewClick($event) {
    this.selectedImage = $event;
  }
  onSetFeaturedClick() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      if (_this3.selectedImage && !_this3.inventoryStore.activeProduct.id) {
        _this3.inventoryStore.updateFeaturedImage(_this3.selectedImage);
        _this3.toastrService.success('INVENTORY_PAGE.FEATURED_IMAGE_WAS_SAVED');
        return;
      }
      try {
        let result = yield _this3.productService.setAsFeatured(_this3.inventoryStore.activeProduct.id, _this3.selectedImage);
        if (result) {
          _this3.inventoryStore.updateFeaturedImage(_this3.selectedImage);
          _this3.toastrService.success('INVENTORY_PAGE.FEATURED_IMAGE_WAS_SAVED');
        }
      } catch (err) {
        _this3.toastrService.danger('Something bad happened!');
      }
    })();
  }
  onDeleteImageClick() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      if (!_this4.selectedImage) return;
      try {
        if (!_this4.inventoryStore.activeProduct.id) {
          _this4.inventoryStore.deleteGalleryImage(_this4.selectedImage);
        } else {
          let result = yield _this4.productService.deleteGalleryImage(_this4.inventoryStore.activeProduct.id, _this4.selectedImage);
          if (result) {
            _this4.onDeleteGalleryImage();
            _this4.inventoryStore.activeProduct = result;
          }
        }
        _this4.selectedImage = null;
        _this4.toastrService.success('INVENTORY_PAGE.IMAGE_WAS_DELETED');
      } catch (err) {
        _this4.toastrService.danger(err.error.message || 'Something bad happened!');
      }
    })();
  }
  onViewGalleryClick() {
    const mappedImages = this.gallery.map(image => {
      return {
        id: image.id,
        thumbUrl: image.fullUrl,
        fullUrl: image.fullUrl
      };
    });
    this.galleryService.appendItems(mappedImages);
    this.nbDialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .GalleryComponent */ .A, {
      context: {
        items: mappedImages,
        item: mappedImages[0]
      },
      dialogClass: 'fullscreen'
    });
  }
  isSelected(image) {
    if (!this.selectedImage || !image) return false;
    return image.fullUrl == this.selectedImage.fullUrl;
  }
  isFeaturedImage(image) {
    if (!this.inventoryStore.activeProduct.featuredImage) return false;
    return this.inventoryStore.activeProduct.featuredImage.id == image.id;
  }
  onDeleteGalleryImage() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      const {
        activeProduct
      } = _this5.inventoryStore;
      if (activeProduct.featuredImage && activeProduct.featuredImage.id == _this5.selectedImage.id) {
        yield _this5.productService.deleteFeaturedImage(activeProduct.id);
      }
    })();
  }
  onEditImageClick() {
    this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .ImageAssetComponent */ .D, {
      context: {
        imageAsset: this.selectedImage
      }
    }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .take */ .s)(1)).subscribe(res => {
      if (!res || !res.id) return;
      let idx = this.gallery.indexOf(this.selectedImage);
      this.gallery[idx] = res;
      this.selectedImage = res;
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ProductGalleryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ImageAssetService */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ProductService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .GalleryService */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .InventoryStore */ .y));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ProductGalleryComponent,
      selectors: [["ngx-product-gallery"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 7,
      vars: 9,
      consts: [[3, "ngClass"], ["class", "featured-image", "alt", "Feature image", 3, "src", 4, "ngIf"], [3, "fontSize", 4, "ngIf"], [1, "actions-container", "mt-2"], [4, "ngxPermissionsOnly"], [1, "gallery-preview-items", "mt-3"], ["class", "row", 4, "ngIf"], ["alt", "Feature image", 1, "featured-image", 3, "src"], [3, "fontSize"], [1, "gallery-plus"], ["nbButton", "", "size", "small", "status", "success", "nbTooltipPlacement", "top", "nbTooltipStatus", "success", "outline", "", 3, "click", "nbTooltip"], [1, "fas", "fa-plus"], [1, "gallery-actions"], ["nbButton", "", "status", "primary", "nbTooltipPlacement", "top", "nbTooltipStatus", "primary", "outline", "", "size", "small", 3, "click", "disabled", "nbTooltip"], ["icon", "image-outline"], ["nbButton", "", "nbTooltipPlacement", "top", "nbTooltipStatus", "primary", "status", "primary", "outline", "", "size", "small", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "nbTooltipPlacement", "top", "nbTooltipStatus", "danger", "status", "danger", "outline", "", "size", "small", 3, "click", "nbTooltip", "disabled"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "size", "small", "nbTooltipPlacement", "top", "nbTooltipStatus", "basic", "status", "basic", "outline", "", 3, "click", "nbTooltip", "disabled"], ["icon", "eye-outline"], [1, "row"], ["class", "col-sm-3 col-md-4 gallery-sm-preview", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-3", "col-md-4", "gallery-sm-preview", 3, "click"], [1, "gallery-sm-preview-item", 3, "src", "ngClass"], ["class", "featured-icon", 4, "ngIf"], [1, "featured-icon"], [1, "interview-info"], ["icon", "checkmark-circle-2-outline", "status", "success", 1, "icons"]],
      template: function ProductGalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProductGalleryComponent_img_1_Template, 1, 1, "img", 1)(2, ProductGalleryComponent_ga_no_image_2_Template, 1, 1, "ga-no-image", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, ProductGalleryComponent_ng_container_4_Template, 17, 16, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, ProductGalleryComponent_div_6_Template, 2, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(5, _c0, !(ctx.gallery == null ? null : ctx.gallery.length), ctx.gallery == null ? null : ctx.gallery.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.displayImageUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.displayImageUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(8, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.gallery == null ? null : ctx.gallery.length);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .bT, ngx_permissions__WEBPACK_IMPORTED_MODULE_19__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_20__/* .ImgDirective */ .z, _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_21__/* .NoImageComponent */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.featured-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n\n.image-container-notSelected[_ngcontent-%COMP%] {\n  height: 260px;\n}\n\n.image-container-selected[_ngcontent-%COMP%] {\n  height: 180px;\n}\n\n.gallery-sm-preview-item[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n  box-shadow: var(--gauzy-shadow);\n  height: 70px;\n  border-radius: 4px;\n}\n.gallery-sm-preview-item.selected[_ngcontent-%COMP%] {\n  box-shadow: var(--color-primary-active-border) 0px 1px 2px 0px, var(--color-primary-hover-border) 0px 1px 3px 1px;\n}\n.gallery-sm-preview-item[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--color-primary-active-border) 0px 1px 2px 0px, var(--color-primary-hover-border) 0px 1px 3px 1px;\n}\n\n.gallery-sm-preview[_ngcontent-%COMP%] {\n  transition: 0.1s all ease-in-out;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  margin-left: 3px;\n}\n\n.featured-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -3px;\n  left: 0px;\n  border-radius: 4px;\n  background: white;\n  color: var(--text-success-color);\n}\n\n.actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-width: 2px;\n  background-color: unset;\n}\n.actions-container[_ngcontent-%COMP%]   button[nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  border-color: var(--color-basic-transparent-300);\n}\n.actions-container[_ngcontent-%COMP%]   button[nbButton].appearance-outline.status-primary[_ngcontent-%COMP%] {\n  border-color: var(--gauzy-background-transparent-1);\n}\n.actions-container[_ngcontent-%COMP%]   button[nbButton].appearance-outline.status-danger[_ngcontent-%COMP%] {\n  border-color: var(--color-danger-transparent-300);\n}\n.actions-container[_ngcontent-%COMP%]   button[nbButton].appearance-outline.status-success[_ngcontent-%COMP%] {\n  border-color: var(--color-success-transparent-300);\n  padding: 4px 5px;\n}\n.actions-container[_ngcontent-%COMP%]   .gallery-plus[_ngcontent-%COMP%] {\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 4px 6px;\n  background-color: var(--gauzy-card-2);\n}\n.actions-container[_ngcontent-%COMP%]   .gallery-plus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.actions-container[_ngcontent-%COMP%]   .gallery-actions[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 3px 5px;\n}"]
    });
  }
};
ProductGalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ImageAssetService */ .V, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ProductService */ .b, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .GalleryService */ .A, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .InventoryStore */ .y])], ProductGalleryComponent);


/***/ }),

/***/ 4401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ MerchantFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9620);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73246);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93105);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94923);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(44495);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(95126);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78870);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19426);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71466);
/* harmony import */ var _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(64251);
/* harmony import */ var _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(8738);
/* harmony import */ var _packages_ui_core_shared_src_lib_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(7281);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(62177);

var MerchantFormComponent_1;



























const _c0 = ["locationFormDirective"];
const _c1 = ["leafletTemplate"];
const _c2 = ["stepper"];
const _c3 = a0 => ({
  opacity: a0
});
function MerchantFormComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function MerchantFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVENTORY_PAGE.THIS_FIELD_IS_REQUIRED"), " ");
  }
}
function MerchantFormComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVENTORY_PAGE.THIS_FIELD_IS_REQUIRED"), " ");
  }
}
function MerchantFormComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVENTORY_PAGE.EMAIL_WRONG_FORMAT"), " ");
  }
}
function MerchantFormComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVENTORY_PAGE.PHONE_WRONG_FORMAT"), " ");
  }
}
function MerchantFormComponent_nb_option_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const warehouse_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", warehouse_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", warehouse_r2 == null ? null : warehouse_r2.logo == null ? null : warehouse_r2.logo.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", warehouse_r2.name, " ");
  }
}
function MerchantFormComponent_ng_template_129__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnamespaceSVG"] */ .qSk();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "svg", 61)(1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "g", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "circle", 64)(5, "circle", 65)(6, "use", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(1, _c3, ctx_r3.hoverState ? "1" : "0.3"));
  }
}
function MerchantFormComponent_ng_template_129_ga_no_image_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ga-no-image", 67);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("fontSize", 14)("placeholder", "NO_IMAGE.ADD_DROP");
  }
}
function MerchantFormComponent_ng_template_129_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "img", 68);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r3.image.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function MerchantFormComponent_ng_template_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("mouseenter", function MerchantFormComponent_ng_template_129_Template_div_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.hoverState = true);
    })("mouseleave", function MerchantFormComponent_ng_template_129_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.hoverState = false);
    })("click", function MerchantFormComponent_ng_template_129_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onImageSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, MerchantFormComponent_ng_template_129__svg_svg_1_Template, 7, 3, "svg", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, MerchantFormComponent_ng_template_129_ga_no_image_3_Template, 1, 2, "ga-no-image", 59)(4, MerchantFormComponent_ng_template_129_img_4_Template, 1, 1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.image && ctx_r3.image.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(4, _c3, ctx_r3.hoverState ? "0.2" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r3.image || !ctx_r3.image.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.image && ctx_r3.image.url);
  }
}
let MerchantFormComponent = /*#__PURE__*/(() => {
  let MerchantFormComponent = class MerchantFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    static {
      MerchantFormComponent_1 = this;
    }
    static buildForm(fb) {
      return fb.group({
        logo: [],
        tags: [],
        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required],
        code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required],
        currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required],
        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.email]],
        phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')],
        fax: [],
        fiscalInformation: [],
        website: [],
        active: [false],
        description: []
      });
    }
    constructor(translateService, toastrService, fb, store, warehouseService, dialogService, imageAssetService, merchantService, router, route) {
      super(translateService);
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.fb = fb;
      this.store = store;
      this.warehouseService = warehouseService;
      this.dialogService = dialogService;
      this.imageAssetService = imageAssetService;
      this.merchantService = merchantService;
      this.router = router;
      this.route = route;
      this.FormHelpers = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormHelpers */ .k;
      this.warehouses = [];
      this.selectedWarehouses = [];
      this.image = null;
      this.images = [];
      this.newImageUploadedEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
      /**
       * Location Mutation Form
       */
      this.locationForm = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .LocationFormComponent */ .f.buildForm(this.fb);
      /**
       * Merchant Mutation Form
       */
      this.form = MerchantFormComponent_1.buildForm(this.fb);
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this._getWarehouses()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this._getAssetsImages()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(data => !!data && !!data.merchant), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(({
        merchant
      }) => this.merchant = merchant), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => {
        this._patchForm();
        this._patchLocationForm();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    onWarehouseSelect($event) {
      this.selectedWarehouses = $event;
    }
    _getAssetsImages() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId
        } = _this.organization;
        const {
          tenantId
        } = _this.store.user;
        _this.images = (yield _this.imageAssetService.getAll({
          tenantId,
          organizationId
        })).items;
      })();
    }
    _getWarehouses() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId
        } = _this2.organization;
        const {
          tenantId
        } = _this2.store.user;
        _this2.warehouses = (yield _this2.warehouseService.getAll({
          organizationId,
          tenantId
        })).items;
      })();
    }
    _patchForm() {
      if (!this.merchant) return;
      const {
        merchant
      } = this;
      this.form.patchValue({
        name: merchant.name,
        tags: merchant.tags,
        code: merchant.code,
        email: merchant.email,
        active: merchant.active,
        description: merchant.description,
        logo: merchant.logo,
        currency: merchant.currency,
        phone: merchant.phone
      });
      this.image = merchant.logo;
      this.selectedWarehouses = merchant.warehouses.map(warehouse => warehouse.id);
    }
    _patchLocationForm() {
      if (!this.merchant || !this.merchant.contact) return;
      const {
        contact
      } = this.merchant;
      this.locationFormDirective.setValue({
        country: contact.country,
        city: contact.city,
        postcode: contact.postcode,
        address: contact.address,
        address2: contact.address2,
        loc: {
          type: 'Point',
          coordinates: [contact.latitude, contact.longitude]
        }
      });
      this.form.patchValue({
        fax: contact.fax,
        fiscalInformation: contact.fiscalInformation,
        website: contact.website
      });
    }
    onImageSelect() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        const dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .SelectAssetComponent */ .a, {
          context: {
            newImageUploadedEvent: _this3.newImageUploadedEvent$,
            galleryInput: _this3.images,
            settings: {
              uploadImageEnabled: false,
              deleteImageEnabled: false,
              selectMultiple: false
            }
          }
        });
        let selectedImage = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(dialog.onClose);
        if (selectedImage) {
          _this3.image = selectedImage;
        }
      })();
    }
    stepClick() {
      setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
    }
    onSaveRequest() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this4.store.user;
        const {
          id: organizationId
        } = _this4.organization;
        const locationFormValue = _this4.locationFormDirective.getValue();
        const {
          coordinates
        } = locationFormValue['loc'];
        delete locationFormValue['loc'];
        const [latitude, longitude] = coordinates;
        const request = {
          ..._this4.form.getRawValue(),
          warehouses: _this4.selectedWarehouses.map(id => {
            return {
              id
            };
          }),
          logo: _this4.image,
          tenantId,
          organizationId,
          contact: {
            ...locationFormValue,
            ..._this4.form.getRawValue(),
            latitude,
            longitude
          }
        };
        if (!_this4.merchant) {
          yield _this4.merchantService.create(request).then(() => {
            _this4.toastrService.success('INVENTORY_PAGE.MERCHANT_CREATED_SUCCESSFULLY', {
              name: request.name
            });
          }).catch(() => {
            _this4.toastrService.danger('INVENTORY_PAGE.COULD_NOT_CREATE_MERCHANT', null, {
              name: request.name
            });
          }).finally(() => {
            _this4.cancel();
          });
        } else {
          yield _this4.merchantService.update({
            ...request,
            id: _this4.merchant.id
          }).then(() => {
            _this4.toastrService.success('INVENTORY_PAGE.MERCHANT_UPDATED_SUCCESSFULLY', {
              name: request.name
            });
          }).catch(() => {
            _this4.toastrService.danger('INVENTORY_PAGE.COULD_NOT_UPDATE_MERCHANT', null, {
              name: request.name
            });
          }).finally(() => {
            _this4.cancel();
          });
        }
      })();
    }
    cancel() {
      this.router.navigate(['/pages/organization/inventory/merchants']);
    }
    selectedTagsEvent(tags) {
      this.form.get('tags').setValue(tags);
      this.form.updateValueAndValidity();
    }
    onCoordinatesChanges($event) {
      const {
        loc: {
          coordinates
        }
      } = this.locationFormDirective.getValue();
      const [lat, lng] = coordinates;
      this.leafletTemplate.addMarker(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(lat, lng));
    }
    onMapClicked(latlng) {
      const {
        lat,
        lng
      } = latlng;
      const location = this.locationFormDirective.getValue();
      this.locationFormDirective.setValue({
        ...location,
        country: '',
        loc: {
          type: 'Point',
          coordinates: [lat, lng]
        }
      });
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function MerchantFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MerchantFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .WarehouseService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ImageAssetService */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .MerchantService */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_22__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_22__/* .ActivatedRoute */ .nX));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: MerchantFormComponent,
        selectors: [["ga-merchant-form"]],
        viewQuery: function MerchantFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c2, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.locationFormDirective = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.leafletTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.stepper = _t.first);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 131,
        vars: 103,
        consts: [["stepper", ""], ["locationFormDirective", ""], ["leafletTemplate", ""], ["storeImage", ""], [1, "main-header"], [1, "top-nav"], [3, "formGroup"], [3, "disableStepNavigation"], [3, "label"], [1, "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "row"], [1, "col-md-3", "col-sm-12", "image-container"], [4, "ngTemplateOutlet"], [1, "col-md-9", "col-sm-12"], [1, "col-md-6", "col-sm-12"], [1, "form-group"], ["for", "name", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "name", "type", "text", "formControlName", "name", "nbInput", "", 3, "placeholder", "status"], ["class", "text-danger", 4, "ngIf"], ["for", "code", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "code", "type", "text", "formControlName", "code", "nbInput", "", 3, "placeholder", "status"], ["for", "email", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "email", "type", "text", "formControlName", "email", "nbInput", "", 3, "placeholder", "status"], ["for", "phone", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "phone", "type", "text", "formControlName", "phone", "nbInput", "", 3, "placeholder", "status"], [3, "formControl"], ["for", "fax", 1, "label", 3, "innerHtml"], ["formControlName", "fax", "type", "text", "id", "fax", "nbInput", "", "fullWidth", "", 3, "placeholder"], ["for", "fiscalInformation", 1, "label", 3, "innerHtml"], ["formControlName", "fiscalInformation", "type", "text", "id", "fiscalInformation", "nbInput", "", "fullWidth", "", 3, "placeholder"], ["for", "website", 1, "label", 3, "innerHtml"], ["formControlName", "website", "type", "text", "id", "website", "nbInput", "", "fullWidth", "", 3, "placeholder"], [1, "col-md-12", "col-sm-12"], ["for", "description", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "description", "type", "text", "formControlName", "description", "nbInput", "", 3, "placeholder"], [1, "mb-4", 3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "col-md-6", "col-sm-12", "mt-4", "pt-1"], ["status", "basic", "formControlName", "active"], [1, "col-4"], ["nbStepperNext", "", "nbButton", "", "status", "basic", "outline", "", 1, "green", 3, "click", "disabled"], [1, "col-md-4", "col-sm-5"], [3, "mapCoordinatesEmitter", "form", "showAutocompleteSearch"], [1, "col-md-8", "col-sm-7"], [3, "mapClicked"], ["nbButton", "", "status", "basic", "outline", "", "nbStepperPrevious", "", 1, "gray", "mr-2"], ["nbButton", "", "status", "basic", "outline", "", "nbStepperNext", "", 1, "green", "mr-2"], [1, "col-md-4", "col-sm-6"], [1, "label", 3, "innerHtml"], ["multiple", "", "fullWidth", "", 3, "selectedChange", "selected", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "mt-5"], ["status", "basic", "nbButton", "", "outline", "", "nbStepperPrevious", "", 1, "mr-2", "gray"], ["status", "success", "nbButton", "", 1, "mr-2", 3, "click"], [1, "text-danger"], [3, "value"], ["alt", "warehouse image", "height", "40", "width", "40", 2, "margin-right", "10px", 3, "src"], [1, "product-store-photo", 3, "mouseenter", "mouseleave", "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle", 4, "ngIf"], [1, "image-overlay", 3, "ngStyle"], ["class", "store-image", 3, "fontSize", "placeholder", 4, "ngIf"], ["class", "store-image", "alt", "Product Item Photo", 3, "src", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [1, "store-image", 3, "fontSize", "placeholder"], ["alt", "Product Item Photo", 1, "store-image", 3, "src"]],
        template: function MerchantFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header")(2, "div", 4)(3, "div", 5)(4, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body")(9, "form", 6)(10, "nb-stepper", 7, 0)(12, "nb-step", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(14, "div", 9)(15, "div", 10)(16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(17, MerchantFormComponent_ng_container_17_Template, 1, 0, "ng-container", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(18, "div", 13)(19, "div", 10)(20, "div", 14)(21, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(22, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(24, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(26, MerchantFormComponent_div_26_Template, 3, 3, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(27, "div", 14)(28, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(29, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(31, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(33, MerchantFormComponent_div_33_Template, 3, 3, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(34, "div", 10)(35, "div", 14)(36, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(37, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(39, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(41, MerchantFormComponent_div_41_Template, 3, 3, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(42, "div", 14)(43, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(44, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(46, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(48, MerchantFormComponent_div_48_Template, 3, 3, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(49, "div", 10)(50, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(51, "ga-currency", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(52, "div", 14)(53, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(54, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(56, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(58, "div", 10)(59, "div", 14)(60, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(61, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(63, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(64, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(65, "div", 14)(66, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(67, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(69, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(70, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(71, "div", 10)(72, "div", 32)(73, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(74, "label", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(76, "textarea", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(77, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(78, "div", 10)(79, "div", 14)(80, "div", 15)(81, "ga-tags-color-input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function MerchantFormComponent_Template_ga_tags_color_input_selectedTagsEvent_81_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsEvent($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(82, "div", 36)(83, "div", 15)(84, "nb-checkbox", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(86, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(87, "div", 10)(88, "div", 38)(89, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function MerchantFormComponent_Template_button_click_89_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.stepClick());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(91, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(92, "nb-step", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(93, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(94, "div", 9)(95, "div", 10)(96, "div", 40)(97, "ga-location-form", 41, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("mapCoordinatesEmitter", function MerchantFormComponent_Template_ga_location_form_mapCoordinatesEmitter_97_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onCoordinatesChanges($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(99, "div", 42)(100, "ga-leaflet-map", 43, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("mapClicked", function MerchantFormComponent_Template_ga_leaflet_map_mapClicked_100_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onMapClicked($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(102, "div", 10)(103, "div", 38)(104, "button", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(105);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(106, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(107, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(108);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(109, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(110, "nb-step", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(111, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(112, "div", 9)(113, "div", 10)(114, "div", 46)(115, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(116, "label", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(117, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(118, "nb-select", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(119, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function MerchantFormComponent_Template_nb_select_selectedChange_118_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onWarehouseSelect($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(120, MerchantFormComponent_nb_option_120_Template, 3, 3, "nb-option", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(121, "div", 50)(122, "div", 38)(123, "button", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(124);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(125, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(126, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function MerchantFormComponent_Template_button_click_126_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onSaveRequest());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(127);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(128, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(129, MerchantFormComponent_ng_template_129_Template, 5, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const storeImage_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(130);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 47, !ctx.merchant ? "INVENTORY_PAGE.CREATE_MERCHANT" : "INVENTORY_PAGE.EDIT_MERCHANT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disableStepNavigation", !ctx.merchant);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(13, 49, "INVENTORY_PAGE.MAIN"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", storeImage_r5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(23, 51, "INVENTORY_PAGE.NAME"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(25, 53, "INVENTORY_PAGE.NAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "name") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(30, 55, "INVENTORY_PAGE.CODE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(32, 57, "INVENTORY_PAGE.CODE"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "code") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "code"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(38, 59, "INVENTORY_PAGE.EMAIL"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(40, 61, "INVENTORY_PAGE.EMAIL"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "email") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(45, 63, "INVENTORY_PAGE.PHONE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(47, 65, "INVENTORY_PAGE.PHONE"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "phone") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "phone"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.form.get("currency"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(55, 67, "INVENTORY_PAGE.FAX"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(57, 69, "INVENTORY_PAGE.FAX"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(62, 71, "INVENTORY_PAGE.FISCAL_INFORMATION"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(64, 73, "INVENTORY_PAGE.FISCAL_INFORMATION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(68, 75, "INVENTORY_PAGE.WEBSITE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(70, 77, "INVENTORY_PAGE.WEBSITE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(75, 79, "INVENTORY_PAGE.DESCRIPTION"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(77, 81, "INVENTORY_PAGE.DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(86, 83, "INVENTORY_PAGE.ACTIVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(91, 85, "BUTTONS.NEXT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(93, 87, "INVENTORY_PAGE.LOCATION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("form", ctx.locationForm)("showAutocompleteSearch", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(106, 89, "BUTTONS.PREVIOUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(109, 91, "BUTTONS.NEXT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(111, 93, "INVENTORY_PAGE.WAREHOUSES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(117, 95, "INVENTORY_PAGE.WAREHOUSES"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selected", ctx.selectedWarehouses)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(119, 97, "INVENTORY_PAGE.WAREHOUSES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.warehouses);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(125, 99, "BUTTONS.PREVIOUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(128, 101, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbStepperComponent */ .RCE, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbStepComponent */ .oYO, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbStepperNextDirective */ .Se1, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbStepperPreviousDirective */ .e09, _angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgTemplateOutlet */ .T3, _angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_24__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_25__/* .ImgDirective */ .z, _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_26__/* .CurrencyComponent */ .X, _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_27__/* .NoImageComponent */ ._, _packages_ui_core_shared_src_lib_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_28__/* .LeafletMapComponent */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .LocationFormComponent */ .f, _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_29__/* .TagsColorInputComponent */ .i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.store-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 5px;\n}\n\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n\n.product-store-photo[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%] {\n  width: 90%;\n  overflow: hidden;\n  position: relative;\n  height: 300px;\n  border-radius: 13px;\n}\n.product-store-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.product-store-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n.product-store-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n.product-store-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n}\n[_nghost-%COMP%]   nb-stepper[_ngcontent-%COMP%]     .step-content {\n  padding: 1rem;\n  height: calc(100vh - 17.25rem);\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  };
  return MerchantFormComponent;
})();
MerchantFormComponent = MerchantFormComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .WarehouseService */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ImageAssetService */ .V, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .MerchantService */ .A, _angular_router__WEBPACK_IMPORTED_MODULE_22__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_22__/* .ActivatedRoute */ .nX])], MerchantFormComponent);


/***/ }),

/***/ 6089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ InventoryItemViewComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52345);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57733);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35388);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59520);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94373);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10569);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45121);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(71466);
/* harmony import */ var _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8738);

























const _c0 = ["variantTable"];
const _c1 = a0 => ({
  background: a0
});
function InventoryItemViewComponent_div_7_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 24);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.inventoryItem.featuredImage.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function InventoryItemViewComponent_div_7_ga_no_image_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-no-image", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("fontSize", 16);
  }
}
function InventoryItemViewComponent_div_7_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InventoryItemViewComponent_div_7_div_6_div_2_Template_div_click_0_listener() {
      const galleryItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onGalleryItemClick(galleryItem_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const galleryItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", galleryItem_r3.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function InventoryItemViewComponent_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 26)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, InventoryItemViewComponent_div_7_div_6_div_2_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.inventoryItem.gallery);
  }
}
function InventoryItemViewComponent_div_7_nb_icon_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 30);
  }
}
function InventoryItemViewComponent_div_7_nb_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 31);
  }
}
function InventoryItemViewComponent_div_7_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", option_r4.name, " ");
  }
}
function InventoryItemViewComponent_div_7_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InventoryItemViewComponent_div_7_div_41_div_1_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.options);
  }
}
function InventoryItemViewComponent_div_7_div_42_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c1, tag_r5.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", tag_r5.name, " ");
  }
}
function InventoryItemViewComponent_div_7_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 15)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, InventoryItemViewComponent_div_7_div_42_div_5_Template, 2, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "INVENTORY_PAGE.TAGS"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.inventoryItem.tags);
  }
}
function InventoryItemViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, InventoryItemViewComponent_div_7_img_4_Template, 1, 1, "img", 9)(5, InventoryItemViewComponent_div_7_ga_no_image_5_Template, 1, 1, "ga-no-image", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, InventoryItemViewComponent_div_7_div_6_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 12)(8, "div", 13)(9, "div", 14)(10, "div", 15)(11, "p")(12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "p")(17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "p")(22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "p")(27, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "p")(32, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(35, InventoryItemViewComponent_div_7_nb_icon_35_Template, 1, 0, "nb-icon", 17)(36, InventoryItemViewComponent_div_7_nb_icon_36_Template, 1, 0, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(37, "div", 2)(38, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(41, InventoryItemViewComponent_div_7_div_41_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(42, InventoryItemViewComponent_div_7_div_42_Template, 6, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(43, "div", 21)(44, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(45, "angular2-smart-table", 23, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.inventoryItem.featuredImage && ctx_r0.inventoryItem.featuredImage.fullUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !(ctx_r0.inventoryItem == null ? null : ctx_r0.inventoryItem.featuredImage) && !(ctx_r0.inventoryItem == null ? null : ctx_r0.inventoryItem.featuredImage == null ? null : ctx_r0.inventoryItem.featuredImage.fullUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.inventoryItem.gallery);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 19, "INVENTORY_PAGE.NAME"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx_r0.getTranslatedProp(ctx_r0.inventoryItem, "name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 21, "INVENTORY_PAGE.DESCRIPTION"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx_r0.getTranslatedProp(ctx_r0.inventoryItem, "description"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 23, "INVENTORY_PAGE.TYPE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx_r0.getTranslatedProp(ctx_r0.inventoryItem.productType, "name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(29, 25, "INVENTORY_PAGE.CATEGORY"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx_r0.getTranslatedProp(ctx_r0.inventoryItem.productCategory, "name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 27, "INVENTORY_PAGE.ENABLED"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.inventoryItem.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r0.inventoryItem.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(40, 29, "INVENTORY_PAGE.OPTIONS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.inventoryItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.inventoryItem.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r0.settingsSmartTable)("source", ctx_r0.smartTableSource);
  }
}
let InventoryItemViewComponent = class InventoryItemViewComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(translateService, translatableService, productService, route, store, galleryService, nbDialogService) {
    super(translateService);
    this.translateService = translateService;
    this.translatableService = translatableService;
    this.productService = productService;
    this.route = route;
    this.store = store;
    this.galleryService = galleryService;
    this.nbDialogService = nbDialogService;
    this.loading = true;
    this.options = [];
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .LocalDataSource */ .h0();
  }
  ngOnInit() {
    var _this = this;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .combineLatest */ .z)([this.route.params, this.store.preferredLanguage$]).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
      var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* ([params, languageCode]) {
        _this.inventoryItem = yield _this.productService.getById(params.id, ['productCategory', 'productType', 'optionGroups', 'variants', 'tags', 'gallery', 'featuredImage']);
        let variants = [];
        if (_this.inventoryItem && _this.inventoryItem.variants) {
          variants = _this.inventoryItem.variants.map(variant => {
            return {
              ...variant,
              ...variant.setting,
              ...variant.price
            };
          });
        }
        if (_this.inventoryItem && _this.inventoryItem.optionGroups) {
          _this.options = [];
          _this.inventoryItem.optionGroups.forEach(optionGroup => {
            _this.options.push(...optionGroup.options);
          });
        }
        _this.options.map(option => {
          let currentTranslation = option.translations.find(translation => {
            return translation.languageCode == languageCode || translation.languageCode == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .LanguagesEnum */ .TR.ENGLISH;
          });
          if (currentTranslation) {
            option.name = currentTranslation.name;
          } else {
            option.name = '-';
          }
        });
        _this.loading = false;
        _this.loadSmartTable();
        _this.smartTableSource.load(variants);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  onGalleryItemClick(galleryItem) {
    const mappedImages = this.inventoryItem.gallery.map(image => {
      return {
        thumbUrl: image.fullUrl,
        fullUrl: image.fullUrl
      };
    });
    this.galleryService.appendItems(mappedImages);
    this.nbDialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .GalleryComponent */ .A, {
      context: {
        items: mappedImages,
        item: mappedImages.find(image => image.thumbUrl == galleryItem.fullUrl)
      },
      dialogClass: 'fullscreen'
    });
  }
  getTranslatedProp(item, prop) {
    if (!item) {
      console.warn('Translatable item object is undefined');
      return null;
    }
    return this.translatableService.getTranslatedProperty(item, prop);
  }
  loadSmartTable() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
      _this2.settingsSmartTable = {
        actions: false,
        hideSubHeader: true,
        columns: {
          image: {
            title: _this2.getTranslation('INVENTORY_PAGE.IMAGE'),
            type: 'custom',
            renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_8__/* .ImageRowComponent */ .j,
            isFilterable: false
          },
          options: {
            title: _this2.getTranslation('INVENTORY_PAGE.OPTIONS'),
            type: 'string',
            valuePrepareFunction: (_, variant) => {
              return variant.options && variant.options.length > 0 ? variant.options.map(option => option.name).join(', ') : _this2.getTranslation('INVENTORY_PAGE.NO_OPTIONS_LABEL');
            },
            isFilterable: false
          },
          internalReference: {
            title: _this2.getTranslation('INVENTORY_PAGE.CODE'),
            type: 'string',
            isFilterable: false
          },
          quantity: {
            title: _this2.getTranslation('INVENTORY_PAGE.QUANTITY'),
            type: 'string',
            isFilterable: false
          },
          price: {
            title: _this2.getTranslation('INVENTORY_PAGE.PRICE'),
            type: 'number',
            valuePrepareFunction: (_, price) => {
              return `${_.unitCostCurrency} ${_.unitCost}`;
            },
            isFilterable: false
          },
          isEquipment: {
            title: _this2.getTranslation('INVENTORY_PAGE.IS_EQUIPMENT'),
            type: 'custom',
            renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_9__/* .EnabledStatusComponent */ .j,
            isFilterable: false
          },
          canBePurchased: {
            title: _this2.getTranslation('INVENTORY_PAGE.CAN_BE_PURCHASED'),
            type: 'custom',
            renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_9__/* .EnabledStatusComponent */ .j,
            isFilterable: false
          },
          notes: {
            title: _this2.getTranslation('INVENTORY_PAGE.NOTES'),
            type: 'string',
            isFilterable: false
          },
          enabled: {
            title: _this2.getTranslation('INVENTORY_PAGE.ENABLED'),
            type: 'custom',
            renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_9__/* .EnabledStatusComponent */ .j,
            isFilterable: false
          }
        }
      };
    })();
  }
  static {
    this.ɵfac = function InventoryItemViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InventoryItemViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatableService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ProductService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .GalleryService */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogService */ .S0W));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InventoryItemViewComponent,
      selectors: [["ngx-view-inventory-item"]],
      viewQuery: function InventoryItemViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.variantTable = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 8,
      vars: 5,
      consts: [["variantTable", ""], [1, "main", "card-scroll"], [1, "d-flex"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-3"], [1, "product-container"], [1, "product-container-inner"], ["class", "featured-image", "alt", "Feature image", 3, "src", 4, "ngIf"], ["class", "no-image", 3, "fontSize", 4, "ngIf"], ["class", "gallery-preview-items mt-3", 4, "ngIf"], [1, "col-md-9", "right-content"], [1, "container"], [1, "row", "mb-1"], [1, "col-md-6", "col-sm-12"], [1, "key-description"], ["icon", "checkmark", "status", "success", 4, "ngIf"], ["icon", "close", "status", "danger", 4, "ngIf"], ["class", "options", 4, "ngIf"], ["class", "col-md-6 col-sm-12", 4, "ngIf"], [1, "row", "mt-5"], [1, "table-scroll-container"], [3, "settings", "source"], ["alt", "Feature image", 1, "featured-image", 3, "src"], [1, "no-image", 3, "fontSize"], [1, "gallery-preview-items", "mt-3"], ["class", "col-sm-3 col-md-4 gallery-sm-preview", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-3", "col-md-4", "gallery-sm-preview", 3, "click"], [1, "gallery-sm-preview-item", 3, "src"], ["icon", "checkmark", "status", "success"], ["icon", "close", "status", "danger"], [1, "options"], ["class", "option-item", 4, "ngFor", "ngForOf"], [1, "option-item"], [1, "key-description", "mb-2"], [1, "inventory-item-tags"], ["class", "tag-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "tag-item", 3, "ngStyle"]],
      template: function InventoryItemViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, InventoryItemViewComponent_div_7_Template, 47, 31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 3, "INVENTORY_PAGE.VIEW_INVENTORY_ITEM"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.inventoryItem);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgStyle */ .B3, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_18__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_19__/* .ImgDirective */ .z, _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_20__/* .NoImageComponent */ ._, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableComponent */ .T9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
      styles: [".featured-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.key-description[_ngcontent-%COMP%] {\n  font-weight: 600;\n  width: 6rem;\n  display: inline-block;\n}\n\nimg.gallery-sm-preview-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n}\nimg.gallery-sm-preview-item[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--color-primary-active-border) 0px 1px 2px 0px, var(--color-primary-hover-border) 0px 1px 3px 1px;\n}\n\n.option-item[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  background: #3366ff;\n  border-radius: 7px;\n  color: #fff;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.tag-item[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  width: fit-content;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n}\n\nimg[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 4px;\n  box-shadow: var(--gauzy-shadow);\n}\n\nimg.featured-image[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.product-container-inner[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.inventory-item-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}"]
    });
  }
};
InventoryItemViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatableService */ .b, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ProductService */ .b, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .GalleryService */ .A, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogService */ .S0W])], InventoryItemViewComponent);


/***/ }),

/***/ 10257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ WarehousesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17785);
/* harmony import */ var _warehouses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16725);
/* harmony import */ var _warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36354);
/* harmony import */ var _warehouses_table_warehouses_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59248);
/* harmony import */ var _warehouse_form_warehouse_form_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);









const routes = [{
  path: '',
  component: _warehouses_component__WEBPACK_IMPORTED_MODULE_2__/* .WarehousesComponent */ .w,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.ORG_INVENTORY_VIEW],
      redirectTo: '/pages/dashboard'
    },
    selectors: {
      date: false,
      employee: false,
      project: false
    }
  },
  children: [{
    path: '',
    component: _warehouses_table_warehouses_table_component__WEBPACK_IMPORTED_MODULE_1__/* .WarehousesTableComponent */ .m
  }, {
    path: 'create',
    component: _warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_0__/* .WarehouseFormComponent */ .h,
    data: {
      selectors: {
        organization: false,
        date: false,
        employee: false,
        project: false
      }
    }
  }, {
    path: 'edit/:id',
    component: _warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_0__/* .WarehouseFormComponent */ .h,
    data: {
      selectors: {
        organization: false,
        date: false,
        employee: false,
        project: false
      }
    },
    resolve: {
      warehouse: _warehouse_form_warehouse_form_resolver__WEBPACK_IMPORTED_MODULE_5__/* .WarehouseFormResolver */ ._
    }
  }]
}];
let WarehousesRoutingModule = /*#__PURE__*/(() => {
  class WarehousesRoutingModule {
    static {
      this.ɵfac = function WarehousesRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WarehousesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .$C({
        type: WarehousesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .iI]
      });
    }
  }
  return WarehousesRoutingModule;
})();

/***/ }),

/***/ 12624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ LanguageSelectorComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25023);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55567);

















function LanguageSelectorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function LanguageSelectorComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
  }
  if (rf & 2) {
    const newLanguageName_r3 = ctx.searchTerm;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "LANGUAGE_PAGE.ADD_NEW_LANGUAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(": ", newLanguageName_r3, " ");
  }
}
function LanguageSelectorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function LanguageSelectorComponent_ng_template_1_Template_ng_select_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onChangeLanguage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function LanguageSelectorComponent_ng_template_1_Template_ng_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.selectedLanguageCode, $event) || (ctx_r1.selectedLanguageCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, LanguageSelectorComponent_ng_template_1_ng_template_1_Template, 4, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", ctx_r1.languages)("loading", ctx_r1.loading)("addTag", ctx_r1.addTag ? ctx_r1.addLanguage : null)("closeOnSelect", true)("size", ctx_r1.size)("clearable", ctx_r1.clearable)("placeholder", ctx_r1.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.selectedLanguageCode);
  }
}
function LanguageSelectorComponent_ng_template_3_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const language_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", language_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", language_r5.name, " ");
  }
}
function LanguageSelectorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function LanguageSelectorComponent_ng_template_3_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onSelectedChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function LanguageSelectorComponent_ng_template_3_Template_nb_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.selectedLanguageCode, $event) || (ctx_r1.selectedLanguageCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, LanguageSelectorComponent_ng_template_3_nb_option_1_Template, 2, 2, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("size", ctx_r1.size)("placeholder", ctx_r1.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.selectedLanguageCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.languages);
  }
}
let LanguageSelectorComponent = /*#__PURE__*/(() => {
  let LanguageSelectorComponent = class LanguageSelectorComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get clearable() {
      return this._clearable;
    }
    set clearable(value) {
      this._clearable = value;
    }
    get addTag() {
      return this._addTag;
    }
    set addTag(value) {
      this._addTag = value;
    }
    get selectedLanguageCode() {
      return this._selectedLanguageCode;
    }
    set selectedLanguageCode(value) {
      if (value) {
        this._selectedLanguageCode = value;
        this.onChange(value);
        this.onTouch(value);
      }
    }
    get template() {
      return this._template;
    }
    set template(value) {
      this._template = value;
    }
    get size() {
      return this._size;
    }
    set size(value) {
      this._size = value;
    }
    constructor(languagesService, translate, store, cd) {
      var _this;
      super(translate);
      _this = this;
      this.languagesService = languagesService;
      this.translate = translate;
      this.store = store;
      this.cd = cd;
      this.onChange = () => {};
      this.onTouch = () => {};
      /*
       * Getter & Setter for dynamic placeholder
       */
      this._placeholder = this.getTranslation('MENU.LANGUAGE');
      /*
       * Getter & Setter for automatic language selection as per selected language
       */
      this.selectBy = 'code';
      /*
       * Getter & Setter for dynamic template size
       */
      this._size = 'medium';
      this.selectedLanguageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.addLanguage = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* (languageName) {
          const newLanguage = {
            name: languageName,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            description: ''
          };
          _this.loading = true;
          const language = yield _this.languagesService.insertLanguage(newLanguage);
          _this.loading = false;
          return language;
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
      this.store.preferredLanguage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(preferredLanguage => !!preferredLanguage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(preferredLanguage => this.selectedLanguageCode = preferredLanguage), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    onChangeLanguage(currentSelection) {
      let selectedLanguage;
      if (this.selectBy === 'object') {
        selectedLanguage = currentSelection;
      } else {
        selectedLanguage = currentSelection?.code || this.selectedLanguageCode;
      }
      this.selectedLanguageEvent.emit(selectedLanguage);
    }
    onSelectedChange(code) {
      this.cd.detectChanges();
      let selectedLanguage;
      if (this.selectBy === 'object') {
        selectedLanguage = this.getLanguageByCode(code);
      } else {
        selectedLanguage = code || this.selectedLanguageCode;
      }
      this.selectedLanguageEvent.emit(selectedLanguage);
    }
    writeValue(value) {
      this._selectedLanguageCode = value;
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouch = fn;
    }
    ngOnInit() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        yield _this2.getAllLanguages();
        if (_this2.selectBy === 'object') {
          _this2.checkPreFilledLanguage();
        }
      })();
    }
    getAllLanguages() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        const {
          items
        } = yield _this3.languagesService.getAllLanguages();
        _this3.languages = items;
      })();
    }
    checkPreFilledLanguage() {
      if (!this.selectedLanguageCode) {
        return;
      }
      if (this.languages?.length > 0) {
        const selectedLanguage = this.getLanguageByCode(this.selectedLanguageCode);
        this.onChangeLanguage(selectedLanguage);
      }
    }
    getLanguageByCode(code) {
      return this.languages.find(language => code === language.code);
    }
    static {
      this.ɵfac = function LanguageSelectorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LanguageSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .LanguagesService */ .D), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: LanguageSelectorComponent,
        selectors: [["ngx-language-selector"]],
        inputs: {
          placeholder: "placeholder",
          clearable: "clearable",
          addTag: "addTag",
          selectedLanguageCode: "selectedLanguageCode",
          selectBy: "selectBy",
          template: "template",
          size: "size"
        },
        outputs: {
          selectedLanguageEvent: "selectedLanguageEvent"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => LanguageSelectorComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 5,
        vars: 3,
        consts: [["ngSelectTemplate", ""], ["nbSelectTemplate", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["appendTo", "body", "bindLabel", "name", "bindValue", "code", 3, "change", "ngModelChange", "items", "loading", "addTag", "closeOnSelect", "size", "clearable", "placeholder", "ngModel"], ["ng-tag-tmp", ""], ["fullWidth", "", 3, "selectedChange", "ngModelChange", "size", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function LanguageSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, LanguageSelectorComponent_ng_container_0_Template, 1, 0, "ng-container", 2)(1, LanguageSelectorComponent_ng_template_1_Template, 2, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(3, LanguageSelectorComponent_ng_template_3_Template, 2, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const ngSelectTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            const nbSelectTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx._template === "ng-select")("ngIfThen", ngSelectTemplate_r6)("ngIfElse", nbSelectTemplate_r7);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbOptionComponent */ .ZJ2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgTagTemplateDirective */ .BW, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: [".language-color[_ngcontent-%COMP%] {\n  position: unset;\n  display: inline-flex;\n  align-self: center;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.language-label[_ngcontent-%COMP%] {\n  display: unset;\n  margin-right: 0.7em;\n}"]
      });
    }
  };
  LanguageSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .LanguagesService */ .D, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc])], LanguageSelectorComponent);
  return LanguageSelectorComponent;
})();


/***/ }),

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

/***/ 16725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ WarehousesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);


let WarehousesComponent = /*#__PURE__*/(() => {
  class WarehousesComponent {
    static {
      this.ɵfac = function WarehousesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WarehousesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WarehousesComponent,
        selectors: [["ga-warehouse-layout-selector"]],
        standalone: false,
        decls: 2,
        vars: 0,
        consts: [[1, "content"]],
        template: function WarehousesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterOutlet */ .n3],
        encapsulation: 2
      });
    }
  }
  return WarehousesComponent;
})();

/***/ }),

/***/ 18142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ DescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43826);


let DescriptionComponent = /*#__PURE__*/(() => {
  class DescriptionComponent {
    constructor() {}
    ngOnInit() {}
    static {
      this.ɵfac = function DescriptionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DescriptionComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DescriptionComponent,
        selectors: [["gauzy-description"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 4,
        consts: [[1, "description"]],
        template: function DescriptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "truncate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, ctx.rowData == null ? null : ctx.rowData.description, 50));
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__/* .TruncatePipe */ .H],
        styles: [".description[_ngcontent-%COMP%] {\n\tfont-size: 12px;\n\tfont-weight: 400;\n\tline-height: 15px;\n\tletter-spacing: 0em;\n\ttext-align: left;\n\tcolor: var(--gauzy-color-text-2);\n}"]
      });
    }
  }
  return DescriptionComponent;
})();

/***/ }),

/***/ 20345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ DebounceClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);



let DebounceClickDirective = /*#__PURE__*/(() => {
  class DebounceClickDirective {
    constructor() {
      this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B();
      this.debounceTime = 300;
      this.throttledClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    }
    /**
     * Handles the click event and emits it after a debounce time.
     *
     * @param {Event} event - The click event object.
     * @return {void} This function does not return a value.
     */
    clickEvent(event) {
      event.preventDefault();
      event.stopPropagation();
      this.clicks.next(event);
    }
    ngOnInit() {
      this.subscription = this.clicks.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(this.debounceTime), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(e => this.throttledClick.emit(e))).subscribe();
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static {
      this.ɵfac = function DebounceClickDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DebounceClickDirective)();
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .FsC({
        type: DebounceClickDirective,
        selectors: [["", "debounceClick", ""]],
        hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function DebounceClickDirective_click_HostBindingHandler($event) {
              return ctx.clickEvent($event);
            });
          }
        },
        inputs: {
          debounceTime: "debounceTime"
        },
        outputs: {
          throttledClick: "throttledClick"
        },
        standalone: false
      });
    }
  }
  return DebounceClickDirective;
})();

/***/ }),

/***/ 22403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ VariantFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64411);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81236);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35388);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98672);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10936);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
















const _c0 = a0 => ({
  "variant-stored-btn": a0
});
function VariantFormComponent_ng_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", option_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(option_r1);
  }
}
function VariantFormComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 11)(2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function VariantFormComponent_ng_container_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onSaveVariant());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "INVENTORY_PAGE.ADD_VARIANT"), " ");
  }
}
function VariantFormComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function VariantFormComponent_button_13_Template_button_click_0_listener() {
      const productVariant_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onVariantBtnClick(productVariant_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const productVariant_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c0, productVariant_r5.isStored));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r2.getVariantDisplayName(productVariant_r5), " ");
  }
}
let VariantFormComponent = class VariantFormComponent {
  constructor(translatableService, router, inventoryStore, store) {
    this.translatableService = translatableService;
    this.router = router;
    this.inventoryStore = inventoryStore;
    this.store = store;
    this.options = [];
    this.optionsSelect = [];
    this.variantCreateInputs = [];
    this.editVariantCreateInput = {
      optionsFull: [],
      options: [],
      isStored: false
    };
    this.mode = 'create';
    this.languageCode = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .LanguagesEnum */ .TR.ENGLISH;
  }
  ngOnInit() {
    var _this = this;
    this.inventoryStore.optionGroups$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(optionGroups => {
      this.options = [];
      optionGroups.forEach(optionGroup => {
        this.options.push(...optionGroup.options);
      });
      this.optionsSelect = this.options.map(opt => opt.name);
    });
    this.inventoryStore.variantCreateInputs$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(variantCreateInputs => {
      this.variantCreateInputs = variantCreateInputs;
    });
    this.store.preferredLanguage$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/(0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      _this.options = yield Promise.all(_this.options.map(/*#__PURE__*/function () {
        var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* (option) {
          return Promise.resolve(_this.translatableService.getTranslated(option, ['name']));
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()));
      _this.optionsSelect = _this.options.map(opt => opt.name);
      _this.editVariantCreateInput = {
        ..._this.editVariantCreateInput,
        optionsFull: _this.options
      };
    }));
  }
  onSelectOption(selectedOptions) {
    this.editVariantCreateInput.options = selectedOptions;
    if (selectedOptions.length === 0) {
      this.variantCreateInputs = this.variantCreateInputs.filter(variant => variant.options.length > 0);
      this.resetCreateVariantInputForm();
    }
  }
  onEditProductVariant(variantCreateInput) {
    this.editVariantCreateInput = variantCreateInput;
    this.mode = 'edit';
  }
  onSaveVariant() {
    if (this.mode === 'create' && !this.optionCombinationAlreadySelected()) {
      let opts = this.options.filter(opt => {
        return this.editVariantCreateInput.options.includes(opt.name);
      });
      this.inventoryStore.addVariantCreateInput({
        ...this.editVariantCreateInput,
        optionsFull: opts
      });
    }
    this.resetCreateVariantInputForm();
  }
  resetCreateVariantInputForm() {
    this.mode = 'create';
    this.editVariantCreateInput = {
      options: [],
      optionsFull: this.editVariantCreateInput.optionsFull,
      isStored: false
    };
  }
  optionCombinationAlreadySelected() {
    let result = false;
    this.variantCreateInputs.forEach(variant => {
      const check = this.editVariantCreateInput.options.every(elemCheck => {
        return variant.options.indexOf(elemCheck) > -1 && variant.options.length === this.editVariantCreateInput.options.length;
      });
      if (check) result = true;
    });
    return result;
  }
  getVariantDisplayName(variantCreateInput) {
    if (!variantCreateInput.options.length) return '-';
    return variantCreateInput.optionsFull.map(opt => opt.name).join(' ');
  }
  onVariantBtnClick(variantCreateInput) {
    const {
      id,
      productId
    } = variantCreateInput;
    if (!variantCreateInput.isStored) {
      this.onEditProductVariant(variantCreateInput);
      return;
    }
    if (productId && id) {
      this.router.navigate([`/pages/organization/inventory/${productId}/variants/${id}`]);
    }
  }
  static {
    this.ɵfac = function VariantFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VariantFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatableService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .InventoryStore */ .y), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: VariantFormComponent,
      selectors: [["ngx-variant-form"]],
      standalone: false,
      decls: 14,
      vars: 16,
      consts: [[1, "row", "d-bottom", "mb-3"], [1, "col-sm-9"], ["for", "addVariant", 1, "label"], ["id", "addVariant", "appendTo", "body", 3, "ngModelChange", "change", "multiple", "closeOnSelect", "searchable", "notFoundText", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-3", "align-self-end"], [4, "ngxPermissionsOnly"], [1, "row", "mb-3"], [1, "col-sm-12", "variants-container"], ["class", "mr-2 btn-variant", "nbButton", "", 3, "click", 4, "ngFor", "ngForOf"], [3, "value"], [1, "add-variant"], ["status", "success", "nbButton", "", "size", "small", 1, "green", 3, "click"], ["nbButton", "", 1, "mr-2", "btn-variant", 3, "click"], [1, "btn-variant-icon", 3, "ngClass"], ["icon", "edit-outline"]],
      template: function VariantFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "ng-select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function VariantFormComponent_Template_ng_select_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.editVariantCreateInput.options, $event) || (ctx.editVariantCreateInput.options = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function VariantFormComponent_Template_ng_select_change_5_listener($event) {
            return ctx.onSelectOption($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, VariantFormComponent_ng_option_8_Template, 2, 2, "ng-option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, VariantFormComponent_ng_container_10_Template, 5, 3, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 7)(12, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, VariantFormComponent_button_13_Template, 4, 4, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 10, "INVENTORY_PAGE.ADD_VARIANT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("multiple", true)("closeOnSelect", false)("searchable", false)("notFoundText", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 12, "INVENTORY_PAGE.NO_OPTIONS_LABEL"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 14, "INVENTORY_PAGE.ADD_VARIANT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.editVariantCreateInput.options);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.optionsSelect);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", "ALL_ORG_EDIT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.variantCreateInputs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .tHu, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__/* .NgOptionComponent */ .xt, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgModel */ .vS, ngx_permissions__WEBPACK_IMPORTED_MODULE_12__/* .NgxPermissionsDirective */ .f6, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
      styles: [".d-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n.add-variant[_ngcontent-%COMP%] {\n  background-color: var(--color-success-transparent-100);\n  padding: 6px;\n  border-radius: var(--button-rectangle-border-radius);\n  width: fit-content;\n}\n.add-variant[_ngcontent-%COMP%]   button[nbButton].green.appearance-filled.status-success[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  color: var(--color-success-default);\n  border: unset;\n  box-shadow: var(--gauzy-shadow);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.btn-variant-icon[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border-radius: var(--button-rectangle-border-radius);\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.35s all ease-in-out;\n  margin-right: 5px;\n}\n\n.variant-stored-btn[_ngcontent-%COMP%] {\n  background: var(--color-success-default) !important;\n  color: white;\n  cursor: pointer;\n}\n.variant-stored-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.variant-stored-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: white !important;\n}"]
    });
  }
};
VariantFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatableService */ .b, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .InventoryStore */ .y, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il])], VariantFormComponent);


/***/ }),

/***/ 23016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarehousesModule: () => (/* binding */ WarehousesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9669);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48052);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61444);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80784);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45418);
/* harmony import */ var _warehouses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);











const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogModule */ .nZv, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbStepperModule */ .QyE, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTooltipModule */ .IB0];
let WarehousesModule = /*#__PURE__*/(() => {
  class WarehousesModule {
    static {
      this.ɵfac = function WarehousesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WarehousesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .$C({
        type: WarehousesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .X1, NB_MODULES, ngx_permissions__WEBPACK_IMPORTED_MODULE_5__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild(), _warehouses_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .WarehousesRoutingModule */ .N, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .LocationFormModule */ .C, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .LeafletMapModule */ .q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .TagsColorInputModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .CardGridModule */ .n, _inventory_table_components__WEBPACK_IMPORTED_MODULE_13__/* .InventoryTableComponentsModule */ .B]
      });
    }
  }
  return WarehousesModule;
})();

/***/ }),

/***/ 23335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ ProductTypesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _product_types_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _product_types_component__WEBPACK_IMPORTED_MODULE_0__/* .ProductTypesComponent */ .W,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ORG_PRODUCT_TYPES_VIEW],
      redirectTo: '/pages/dashboard'
    },
    selectors: {
      project: false,
      employee: false,
      date: false
    }
  }
}];
let ProductTypesRoutingModule = /*#__PURE__*/(() => {
  class ProductTypesRoutingModule {
    static {
      this.ɵfac = function ProductTypesRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProductTypesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProductTypesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return ProductTypesRoutingModule;
})();

/***/ }),

/***/ 24023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ IconRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);



function IconRowComponent_nb_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx_r0.rowData.icon);
  }
}
let IconRowComponent = /*#__PURE__*/(() => {
  class IconRowComponent {
    static {
      this.ɵfac = function IconRowComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IconRowComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: IconRowComponent,
        selectors: [["ng-component"]],
        inputs: {
          value: "value"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [[1, "icon-container"], [3, "icon", 4, "ngIf"], [3, "icon"]],
        template: function IconRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, IconRowComponent_nb_icon_1_Template, 1, 1, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData.icon);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT],
        styles: [".icon-container[_ngcontent-%COMP%] {\n\t\t\t\twidth: 35px;\n\t\t\t\theight: 35px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tbackground: #3366ff;\n\t\t\t\tpadding: 5px 0;\n\t\t\t\tborder-radius: 50%;\n\t\t\t}\n\n\t\t\tnb-icon[_ngcontent-%COMP%] {\n\t\t\t\tcolor: #fff;\n\t\t\t\twidth: 25px;\n\t\t\t}"]
      });
    }
  }
  return IconRowComponent;
})();

/***/ }),

/***/ 25152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ContactRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let ContactRowComponent = /*#__PURE__*/(() => {
  class ContactRowComponent {
    get address() {
      if (!this.value) return '-';
      let props = [];
      for (const property in this.value) {
        if (!['country', 'city', 'address'].includes(property)) continue;
        props.push(this.value[property]);
      }
      return props.filter(p => !!p).join(', ');
    }
    static {
      this.ɵfac = function ContactRowComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactRowComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ContactRowComponent,
        selectors: [["ng-component"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        template: function ContactRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.address);
          }
        },
        encapsulation: 2
      });
    }
  }
  return ContactRowComponent;
})();

/***/ }),

/***/ 27760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ TableInventoryComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(64411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57733);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36950);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89160);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(91748);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(91045);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55101);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(59520);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(71924);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45121);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(49517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(49072);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(3456);





























const _c0 = ["actionButtons"];
function TableInventoryComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TableInventoryComponent_ng_template_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function TableInventoryComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 13)(1, "angular2-smart-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function TableInventoryComponent_ng_template_14_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectProduct($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, TableInventoryComponent_ng_template_14_ng_container_3_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function TableInventoryComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("scroll", function TableInventoryComponent_ng_template_15_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    })("onSelectedItem", function TableInventoryComponent_ng_template_15_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectProduct($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.products);
  }
}
function TableInventoryComponent_ng_template_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TableInventoryComponent_ng_template_17_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onAddInventoryItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function TableInventoryComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TableInventoryComponent_ng_template_17_ng_template_0_Template, 4, 3, "ng-template", 19);
  }
}
function TableInventoryComponent_ng_template_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TableInventoryComponent_ng_template_19_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onViewInventoryItem(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.VIEW"), " ");
  }
}
function TableInventoryComponent_ng_template_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TableInventoryComponent_ng_template_19_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEditInventoryItem(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r6 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.EDIT"), " ");
  }
}
function TableInventoryComponent_ng_template_19_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TableInventoryComponent_ng_template_19_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.delete(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r6 && ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "BUTTONS.DELETE"));
  }
}
function TableInventoryComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, TableInventoryComponent_ng_template_19_ng_template_1_Template, 4, 3, "ng-template", 23)(2, TableInventoryComponent_ng_template_19_ng_template_2_Template, 4, 4, "ng-template", 19)(3, TableInventoryComponent_ng_template_19_ng_template_3_Template, 3, 4, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function TableInventoryComponent_ng_template_21_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TableInventoryComponent_ng_template_21_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.manageStores());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TableInventoryComponent_ng_template_21_ng_template_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.manageWarehouses());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "INVENTORY_PAGE.MERCHANTS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "INVENTORY_PAGE.WAREHOUSES"), " ");
  }
}
function TableInventoryComponent_ng_template_21_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TableInventoryComponent_ng_template_21_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.manageProductCategories());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "INVENTORY_PAGE.PRODUCT_CATEGORIES"), " ");
  }
}
function TableInventoryComponent_ng_template_21_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TableInventoryComponent_ng_template_21_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.manageProductTypes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "INVENTORY_PAGE.PRODUCT_TYPES"), " ");
  }
}
function TableInventoryComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TableInventoryComponent_ng_template_21_ng_template_0_Template, 8, 6, "ng-template", 23)(1, TableInventoryComponent_ng_template_21_ng_template_1_Template, 4, 3, "ng-template", 30)(2, TableInventoryComponent_ng_template_21_ng_template_2_Template, 4, 3, "ng-template", 31);
  }
}
let TableInventoryComponent = class TableInventoryComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(http, translateService, dialogService, toastrService, productService, router, store) {
    super(translateService);
    this.http = http;
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.productService = productService;
    this.router = router;
    this.store = store;
    this.loading = false;
    this.disableButton = true;
    this.products = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    this.permissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U;
    this.products$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .B();
    this.setView();
  }
  ngOnInit() {
    this._applyTranslationOnSmartTable();
    this._loadSmartTableSettings();
  }
  ngAfterViewInit() {
    this.products$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.getTranslatedProducts()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.products$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    const storeOrganization$ = this.store.selectedOrganization$;
    const preferredLanguage$ = this.store.preferredLanguage$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .combineLatest */ .z)([storeOrganization$, preferredLanguage$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(300), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(([organization, language]) => !!organization && !!language), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([organization]) => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.products$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.products = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .ComponentEnum */ .L.INVENTORY;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.products = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.products$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      actions: false,
      editable: true,
      selectedRowIndex: -1,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : this.minItemPerPage
      },
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.INVENTORY'),
      columns: {
        image: {
          title: this.getTranslation('INVENTORY_PAGE.IMAGE'),
          width: '79px',
          isFilterable: false,
          type: 'custom',
          renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_12__/* .ImageRowComponent */ .j,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        name: {
          title: this.getTranslation('INVENTORY_PAGE.NAME'),
          type: 'custom',
          renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_13__/* .NameWithDescriptionComponent */ .v,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          },
          isFilterable: false,
          isSortable: false
        },
        code: {
          title: this.getTranslation('INVENTORY_PAGE.CODE'),
          type: 'string',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .InputFilterComponent */ .U
          },
          filterFunction: value => {
            this.setFilter({
              field: 'code',
              search: value || null
            });
          },
          isSortable: false
        },
        productType: {
          title: this.getTranslation('INVENTORY_PAGE.PRODUCT_TYPE'),
          type: 'string',
          valuePrepareFunction: value => value || '-',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .ProductTypeFilterComponent */ .$
          },
          filterFunction: value => {
            this.setFilter({
              field: 'productTypeId',
              search: value?.id || null
            });
          },
          isSortable: false
        },
        productCategory: {
          title: this.getTranslation('INVENTORY_PAGE.PRODUCT_CATEGORY'),
          type: 'string',
          valuePrepareFunction: value => value || '-',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .ProductCategoryFilterComponent */ .P
          },
          filterFunction: value => {
            this.setFilter({
              field: 'productCategoryId',
              search: value?.id || null
            });
          },
          isSortable: false
        },
        description: {
          title: this.getTranslation('INVENTORY_PAGE.TAGS'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .TagsOnlyComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        }
      }
    };
  }
  manageProductTypes() {
    this.router.navigate(['/pages/organization/inventory/product-types']);
  }
  manageProductCategories() {
    this.router.navigate(['/pages/organization/inventory/product-categories']);
  }
  manageWarehouses() {
    this.router.navigate(['/pages/organization/inventory/warehouses']);
  }
  manageStores() {
    this.router.navigate(['/pages/organization/inventory/merchants']);
  }
  onAddInventoryItem() {
    this.router.navigate([`/pages/organization/inventory/create`]);
  }
  /**
   * Navigate to the edit page of a selected inventory item.
   *
   * @param {IProduct} selectedItem - The selected inventory item to edit.
   */
  onEditInventoryItem(selectedItem) {
    // If a selected item is provided, update the selected product
    if (selectedItem) {
      this.selectProduct({
        isSelected: true,
        data: selectedItem
      });
    }
    // Navigate to the edit page with the selected product's ID
    this.router.navigate([`/pages/organization/inventory/edit`, this.selectedProduct.id]);
  }
  /**
   * Navigate to the detailed view of a selected inventory item.
   *
   * @param {IProduct} selectedItem - The selected inventory item to view.
   */
  onViewInventoryItem(selectedItem) {
    // If a selected item is provided, update the selected product
    if (selectedItem) {
      this.selectProduct({
        isSelected: true,
        data: selectedItem
      });
    }
    // Navigate to the detailed view page with the selected product's ID
    this.router.navigate([`/pages/organization/inventory/view`, this.selectedProduct.id]);
  }
  /**
   * Asynchronously deletes a product.
   *
   * @param {IProduct} selectedItem - The selected product to be deleted.
   */
  delete(selectedItem) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(function* () {
      // If a selected product is provided, update the selected product
      if (selectedItem) {
        _this.selectProduct({
          isSelected: true,
          data: selectedItem
        });
      }
      // Open a confirmation dialog and wait for the result
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ ._)(_this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .DeleteConfirmationComponent */ .u).onClose);
      // If the user cancels the deletion, return early
      if (!result) return;
      try {
        // Attempt to delete the selected product using the ProductService
        const res = yield _this.productService.delete(_this.selectedProduct.id);
        // Check if the deletion was successful based on the response
        if (res.affected > 0) {
          // Display a success toast notification
          _this.toastrService.success('INVENTORY_PAGE.INVENTORY_ITEM_DELETED', {
            name: _this.selectedProduct.name
          });
        }
      } catch {
        // Handle errors by displaying a danger toast notification
        _this.toastrService.danger('TOASTR.MESSAGE.SOMETHING_BAD_HAPPENED');
      } finally {
        // Trigger a refresh and notify subscribers
        _this._refresh$.next(true);
        _this.products$.next(true);
      }
    })();
  }
  /**
   * Registers and configures the Smart Table source for displaying product data.
   * If the organization context is unavailable, the function returns early.
   * The function sets up a server data source for pagination, relations, and filters.
   * It maps the result for each product and finalizes the setup by updating pagination and handling loading states.
   *
   * @throws {Error} If an error occurs during the setup, a danger toast notification is displayed.
   */
  setSmartTableSource() {
    // Check if the organization context is available
    if (!this.organization) {
      return;
    }
    try {
      // Set loading state to true while fetching data
      this.loading = true;
      // Destructure properties for clarity
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      // Create a new ServerDataSource for Smart Table
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ServerDataSource */ .N(this.http, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_22__/* .API_PREFIX */ .m4}/products/pagination`,
        relations: ['productType', 'productCategory', 'tags', 'featuredImage'],
        // Define query parameters for the API request
        where: {
          organizationId,
          tenantId,
          ...this.filters.where
        },
        // Define how to map the result for each product
        resultMap: product => {
          return Object.assign({}, product);
        },
        // Finalize callback to handle post-processing
        finalize: () => {
          // Update products based on the data layout style
          if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            this.products.push(...this.smartTableSource.getData());
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
    } catch (error) {
      // Handle errors by displaying a danger toast notification
      this.toastrService.danger(error);
    }
  }
  /**
   * Asynchronously sets up and retrieves translated product inventory data for a smart table.
   * If the organization context is unavailable, the function returns early.
   * The function sets up a smart table source, configures pagination, and fetches elements based on the data layout style.
   *
   * @throws {Error} If an error occurs during the setup or data retrieval, a danger toast notification is displayed.
   */
  getTranslatedProducts() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(function* () {
      // Check if the organization context is available
      if (!_this2.organization) {
        return;
      }
      try {
        // Set up the smart table source
        _this2.setSmartTableSource();
        // Configure pagination based on the active page and items per page
        const {
          activePage,
          itemsPerPage
        } = _this2.getPagination();
        _this2.smartTableSource.setPaging(activePage, itemsPerPage, false);
        // Fetch elements for the smart table based on the data layout style
        if (_this2.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          yield _this2.smartTableSource.getElements();
        }
      } catch (error) {
        // Handle errors by displaying a danger toast notification
        _this2.toastrService.danger(error);
      }
    })();
  }
  selectProduct({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedProduct = isSelected ? data : null;
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectProduct({
      isSelected: false,
      data: null
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function TableInventoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TableInventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_23__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .ProductService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_28__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TableInventoryComponent,
      selectors: [["ngx-table-inventory"]],
      viewQuery: function TableInventoryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.actionButtons = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 23,
      vars: 12,
      consts: [["gridLayout", ""], ["visibleButton", ""], ["actionButtons", ""], ["subActionButtons", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [3, "allowEmployee"], [1, "mr-2"], [4, "ngTemplateOutlet"], [1, "gauzy-button-container"], [3, "buttonTemplate", "componentName", "buttonTemplateVisible", "isDisable"], [3, "ngIf", "ngIfElse"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "scroll", "onSelectedItem", "totalItems", "settings", "source"], ["ngxPermissionsOnly", "ORG_INVENTORY_PRODUCT_EDIT"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "ORG_INVENTORY_VIEW"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "secondary", 3, "click"], ["icon", "eye-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["ngxPermissionsOnly", "ORG_PRODUCT_CATEGORIES_VIEW"], ["ngxPermissionsOnly", "ORG_PRODUCT_TYPES_VIEW"], ["status", "warning", "outline", "", "size", "small", "nbButton", "", 1, "action", 3, "click"], ["icon", "home-outline"], ["status", "primary", "outline", "", "size", "small", "nbButton", "", 1, "action", 3, "click"]],
      template: function TableInventoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "div", 6)(3, "div", 6)(4, "h4")(5, "ngx-header-title", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 6)(9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, TableInventoryComponent_ng_container_10_Template, 1, 0, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "ngx-gauzy-button-action", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, TableInventoryComponent_ng_template_14_Template, 4, 3, "ng-template", 12)(15, TableInventoryComponent_ng_template_15_Template, 1, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(17, TableInventoryComponent_ng_template_17_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(19, TableInventoryComponent_ng_template_19_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(21, TableInventoryComponent_ng_template_21_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const gridLayout_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(16);
          const visibleButton_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(18);
          const actionButtons_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(20);
          const subActionButtons_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 10, "INVENTORY_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", subActionButtons_r15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r14)("componentName", ctx.viewComponentName)("buttonTemplateVisible", visibleButton_r13)("isDisable", ctx.disableButton);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r12);
        }
      },
      dependencies: [_packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_30__/* .CardGridComponent */ .c, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgTemplateOutlet */ .T3, ngx_permissions__WEBPACK_IMPORTED_MODULE_32__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_33__/* .HeaderTitleComponent */ .X, angular2_smart_table__WEBPACK_IMPORTED_MODULE_34__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_35__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__/* .PaginationV2Component */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[_ngcontent-%COMP%] {\n  background-color: #0088fe;\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: rgb(37, 184, 105);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.primary[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%], \n.action.primary[_ngcontent-%COMP%]   .appearance-filled.status-basic[nbButtonToggle][_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n[_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0 1px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem - 0.5rem) !important;\n}"]
    });
  }
};
TableInventoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_37__/* .__metadata */ .Sn)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__/* .HttpClient */ .Qq, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .ProductService */ .b, _angular_router__WEBPACK_IMPORTED_MODULE_28__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .Store */ .il])], TableInventoryComponent);


/***/ }),

/***/ 28384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ WarehouseProductsTableComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64411);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52345);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94923);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(98672);
/* harmony import */ var _select_product_form_select_product_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97664);
/* harmony import */ var _inventory_table_components_image_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45121);
/* harmony import */ var _manage_quantity_manage_quantity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53592);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3456);
/* harmony import */ var _manage_variants_quantity_manage_variants_quantity_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(53718);

























function WarehouseProductsTableComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function WarehouseProductsTableComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function WarehouseProductsTableComponent_ng_template_6_ng_container_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onAddProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "INVENTORY_PAGE.ADD_PRODUCT"), " ");
  }
}
function WarehouseProductsTableComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, WarehouseProductsTableComponent_ng_template_6_ng_container_0_Template, 5, 3, "ng-container", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", "ALL_ORG_VIEW");
  }
}
function WarehouseProductsTableComponent_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ga-manage-variants-quantity", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r1.variants);
  }
}
function WarehouseProductsTableComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, WarehouseProductsTableComponent_ng_template_8_ng_container_0_Template, 3, 1, "ng-container", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", "ALL_ORG_EDIT");
  }
}
let WarehouseProductsTableComponent = class WarehouseProductsTableComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .PaginationFilterBaseComponent */ .t {
  constructor(dialogService, toastrService, warehouseService, translateService, store, inventoryStore) {
    super(translateService);
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.warehouseService = warehouseService;
    this.translateService = translateService;
    this.store = store;
    this.inventoryStore = inventoryStore;
    this.loading = true;
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .LocalDataSource */ .h0();
    this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .B();
    this.selectedWarehouse = {
      isSelected: false,
      data: null
    };
  }
  ngOnInit() {
    this._loadSmartTableSettings();
  }
  ngAfterViewInit() {
    this.products$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.loadItems()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.products$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.inventoryStore.warehouseProductsCountUpdate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.products$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.products$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      actions: false,
      mode: 'external',
      selectedRowIndex: -1,
      editable: true,
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.WAREHOUSE_PRODUCT'),
      columns: {
        image: {
          title: this.getTranslation('INVENTORY_PAGE.IMAGE'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _inventory_table_components_image_row_component__WEBPACK_IMPORTED_MODULE_10__/* .ImageRowComponent */ .j,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        name: {
          title: this.getTranslation('INVENTORY_PAGE.NAME'),
          type: 'string'
        },
        quantity: {
          title: this.getTranslation('INVENTORY_PAGE.QUANTITY'),
          type: 'custom',
          renderComponent: _manage_quantity_manage_quantity_component__WEBPACK_IMPORTED_MODULE_11__/* .ManageQuantityComponent */ .I,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        }
      },
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : this.minItemPerPage
      }
    };
  }
  handleImageUploadError(error) {
    this.toastrService.danger(error.error.message || error.message, 'TOASTR.TITLE.ERROR');
  }
  loadItems() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (!_this.organization) {
        return;
      }
      _this.loading = true;
      try {
        const items = yield _this.warehouseService.getWarehouseProducts(_this.warehouse.id);
        let mappedItems = items ? items.map(item => {
          return {
            ...item,
            name: item.product.translations[0]['name'],
            featuredImage: item.product.featuredImage,
            quantity: item.quantity
          };
        }) : [];
        const {
          activePage,
          itemsPerPage
        } = _this.getPagination();
        _this.smartTableSource.setPaging(activePage, itemsPerPage);
        _this.smartTableSource.load(mappedItems);
        _this.setPagination({
          ..._this.getPagination(),
          totalItems: _this.smartTableSource.count()
        });
      } catch (error) {} finally {
        _this.loading = false;
      }
    })();
  }
  onAddProduct() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (!_this2.organization) {
        return;
      }
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.store.selectedOrganization;
      const dialog = _this2.dialogService.open(_select_product_form_select_product_form_component__WEBPACK_IMPORTED_MODULE_0__/* .SelectProductComponent */ .Z, {});
      const selectedProducts = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .firstValueFrom */ ._)(dialog.onClose);
      let createWarehouseProductsInput = selectedProducts ? selectedProducts.map(pr => {
        return {
          productId: pr.id,
          variants: pr.variants.map(variant => variant.id),
          tenantId,
          organizationId
        };
      }) : [];
      let result = yield _this2.warehouseService.addWarehouseProducts(createWarehouseProductsInput, _this2.warehouse.id);
      if (createWarehouseProductsInput.length && result) {
        _this2.toastrService.success('INVENTORY_PAGE.SUCCESSFULLY_ADDED_PRODUCTS');
      }
      _this2.loadItems();
    })();
  }
  selectWarehouse(event) {
    this.selectedWarehouse = event;
  }
  get variants() {
    return this.selectedWarehouse && this.selectedWarehouse.data ? this.selectedWarehouse.data.variants : [];
  }
  static {
    this.ɵfac = function WarehouseProductsTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WarehouseProductsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .WarehouseService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .InventoryStore */ .y));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: WarehouseProductsTableComponent,
      selectors: [["ga-warehouse-products-table"]],
      inputs: {
        warehouse: "warehouse"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 10,
      vars: 7,
      consts: [["visible", ""], ["action", ""], [1, "container-content"], [1, "d-flex", "justify-content-end"], [3, "buttonTemplateVisible", "hasLayoutSelector", "buttonTemplate", "isDisable"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [4, "ngIf"], [3, "source"], [4, "ngxPermissionsOnly"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline"], [1, "actions"], [3, "value"]],
      template: function WarehouseProductsTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body", 2)(1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-gauzy-button-action", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div", 5)(4, "angular2-smart-table", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function WarehouseProductsTableComponent_Template_angular2_smart_table_userRowSelect_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectWarehouse($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, WarehouseProductsTableComponent_ng_container_5_Template, 2, 1, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, WarehouseProductsTableComponent_ng_template_6_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(8, WarehouseProductsTableComponent_ng_template_8_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const visible_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(7);
          const action_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("buttonTemplateVisible", visible_r4)("hasLayoutSelector", false)("buttonTemplate", action_r5)("isDisable", !(ctx.selectedWarehouse == null ? null : ctx.selectedWarehouse.isSelected));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.settingsSmartTable)("source", ctx.smartTableSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.smartTableSource);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .tHu, ngx_permissions__WEBPACK_IMPORTED_MODULE_21__/* .NgxPermissionsDirective */ .f6, angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_22__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_23__/* .PaginationV2Component */ .a, _manage_variants_quantity_manage_variants_quantity_component__WEBPACK_IMPORTED_MODULE_24__/* .ManageVariantsQuantityComponent */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-3) !important;\n  border: none;\n  height: 2rem !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-3) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   .container-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 22.5rem);\n  overflow: unset;\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 0 0.5rem 1rem 1rem;\n}\n[_nghost-%COMP%]   .container-content[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   .container-content[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .form-control {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"]
    });
  }
};
WarehouseProductsTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .WarehouseService */ .z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .InventoryStore */ .y])], WarehouseProductsTableComponent);


/***/ }),

/***/ 30617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ VariantTableComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64411);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52345);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84409);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56383);
/* harmony import */ var _inventory_table_components_enabled_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57761);
/* harmony import */ var _inventory_table_components_image_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45121);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19448);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98672);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45293);





















function VariantTableComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function VariantTableComponent_ng_template_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onEditVariant());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function VariantTableComponent_ng_template_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 10);
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
let VariantTableComponent = class VariantTableComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(translateService, router, dialogService, productVariantService, toastrService, inventoryStore) {
    super(translateService);
    this.translateService = translateService;
    this.router = router;
    this.dialogService = dialogService;
    this.productVariantService = productVariantService;
    this.toastrService = toastrService;
    this.inventoryStore = inventoryStore;
    this.variants = [];
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .LocalDataSource */ .h0();
    this.loading = true;
    this.disableButton = true;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      _this.loadSmartTable();
      _this.inventoryStore.activeProduct$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(_this)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* (activeProduct) {
          if (activeProduct.id) {
            let res = yield _this.productVariantService.getVariantsByProductId(activeProduct.id);
            _this.variants = res.items;
          }
          _this.loading = false;
          _this.smartTableSource.load(_this.variants);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      _this._applyTranslationOnSmartTable();
    })();
  }
  loadSmartTable() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      _this2.settingsSmartTable = {
        actions: false,
        selectedRowIndex: -1,
        columns: {
          image: {
            title: _this2.getTranslation('INVENTORY_PAGE.IMAGE'),
            type: 'custom',
            renderComponent: _inventory_table_components_image_row_component__WEBPACK_IMPORTED_MODULE_5__/* .ImageRowComponent */ .j
          },
          options: {
            title: _this2.getTranslation('INVENTORY_PAGE.OPTIONS'),
            type: 'string',
            valuePrepareFunction: (_, options) => {
              return options.value && options.value.length > 0 ? options.value.map(option => option.name).join(', ') : _this2.getTranslation('INVENTORY_PAGE.NO_OPTIONS_LABEL');
            }
          },
          internalReference: {
            title: _this2.getTranslation('INVENTORY_PAGE.CODE'),
            type: 'string'
          },
          quantity: {
            title: _this2.getTranslation('INVENTORY_PAGE.QUANTITY'),
            type: 'string'
          },
          enabled: {
            title: _this2.getTranslation('INVENTORY_PAGE.ENABLED'),
            type: 'custom',
            renderComponent: _inventory_table_components_enabled_row_component__WEBPACK_IMPORTED_MODULE_6__/* .EnabledStatusComponent */ .j
          }
        }
      };
    })();
  }
  onEditVariant() {
    this.router.navigate([`/pages/organization/inventory/${this.inventoryStore.activeProduct.id}/variants/${this.selectedItem.id}`]);
  }
  selectItem(_x2) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* ({
      isSelected,
      data
    }) {
      _this3.disableButton = !isSelected;
      _this3.selectedItem = isSelected ? data : null;
    }).apply(this, arguments);
  }
  delete() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this4.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .DeleteConfirmationComponent */ .u).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .first */ .$)()));
      if (!result) return;
      try {
        const res = yield _this4.productVariantService.delete(_this4.selectedItem.id);
        if (res.affected > 0) {
          _this4.inventoryStore.deleteVariant(_this4.selectedItem);
          if (_this4.selectedItem) {
            _this4.selectItem({
              isSelected: true,
              data: null
            });
          }
          _this4.toastrService.success('INVENTORY_PAGE.PRODUCT_VARIANT_DELETED');
        }
      } catch {
        _this4.toastrService.danger('TOASTR.MESSAGE.SOMETHING_BAD_HAPPENED');
      }
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.subscribe(() => {
      this.loadSmartTable();
    });
  }
  static {
    this.ɵfac = function VariantTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VariantTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ProductVariantService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .InventoryStore */ .y));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: VariantTableComponent,
      selectors: [["ngx-variant-table"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 7,
      vars: 6,
      consts: [["actionButtons", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "main-wrapper", 3, "nbSpinner"], [1, "gauzy-button-container"], [3, "hasLayoutSelector", "buttonTemplate", "isDisable"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function VariantTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ngx-gauzy-button-action", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 4)(4, "angular2-smart-table", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function VariantTableComponent_Template_angular2_smart_table_userRowSelect_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.selectItem($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, VariantTableComponent_ng_template_5_Template, 8, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const actionButtons_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasLayoutSelector", false)("buttonTemplate", actionButtons_r4)("isDisable", ctx.disableButton);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.settingsSmartTable)("source", ctx.smartTableSource);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbTooltipDirective */ .BmQ, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_16__/* .GauzyButtonActionComponent */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   ngx-gauzy-button-action[_ngcontent-%COMP%]     .transition-container span {\n  background-color: unset;\n}\n[_nghost-%COMP%]   ngx-gauzy-button-action[_ngcontent-%COMP%]     .actions-container {\n  padding-top: 0;\n}"]
    });
  }
};
VariantTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .Ix, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ProductVariantService */ .M, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .InventoryStore */ .y])], VariantTableComponent);


/***/ }),

/***/ 31544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ ManageVariantsQuantityFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52345);
/* harmony import */ var _inventory_table_components_image_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45121);
/* harmony import */ var _manage_quantity_manage_quantity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);











const _c0 = ["warehouseVariantsTable"];
let ManageVariantsQuantityFormComponent = /*#__PURE__*/(() => {
  class ManageVariantsQuantityFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    set content(content) {
      if (content) {
        this.warehouseVariantsTable = content;
      }
    }
    constructor(dialogRef, translateService) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.translateService = translateService;
      this.variants = [];
      this.variantsTable = [];
      this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .LocalDataSource */ .h0();
    }
    ngOnInit() {
      this.loadSmartTable();
      new Promise(res => {
        res(this.variants.map(variant => {
          return {
            id: variant.id,
            image: variant.variant.image,
            options: variant.variant.options.map(opt => opt.name).join(', '),
            quantity: variant.quantity,
            type: 'variant'
          };
        }).slice());
      }).then(res => {
        this.variantsTable = res;
        this.smartTableSource.load(this.variantsTable);
      });
    }
    loadSmartTable() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        _this.settingsSmartTable = {
          actions: false,
          columns: {
            image: {
              title: _this.getTranslation('INVENTORY_PAGE.IMAGE'),
              type: 'custom',
              renderComponent: _inventory_table_components_image_row_component__WEBPACK_IMPORTED_MODULE_3__/* .ImageRowComponent */ .j
            },
            options: {
              title: _this.getTranslation('INVENTORY_PAGE.OPTIONS'),
              type: 'string'
            },
            quantity: {
              title: _this.getTranslation('INVENTORY_PAGE.QUANTITY'),
              type: 'custom',
              renderComponent: _manage_quantity_manage_quantity_component__WEBPACK_IMPORTED_MODULE_4__/* .ManageQuantityComponent */ .I
            }
          }
        };
      })();
    }
    onClose() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function ManageVariantsQuantityFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManageVariantsQuantityFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ManageVariantsQuantityFormComponent,
        selectors: [["ng-component"]],
        viewQuery: function ManageVariantsQuantityFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.content = _t.first);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 15,
        vars: 8,
        consts: [["warehouseVariantsTable", ""], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "content"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source"], ["status", "success", "nbButton", "", 1, "action", 3, "click"]],
        template: function ManageVariantsQuantityFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function ManageVariantsQuantityFormComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 5)(8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(9, "angular2-smart-table", 7, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(11, "nb-card-footer")(12, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function ManageVariantsQuantityFormComponent_Template_button_click_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx.onClose());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, "INVENTORY_PAGE.MANAGE_VARIANTS_QUANTITY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.settingsSmartTable)("source", ctx.smartTableSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(14, 6, "BUTTONS.OK"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonComponent */ .YP2, angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .Angular2SmartTableComponent */ .T9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-3) !important;\n  border: none;\n  height: 2rem !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-3) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem 0.5rem 1rem 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow: unset;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  width: 845px;\n}\n\n[_nghost-%COMP%]     input[type=checkbox] {\n  width: 15px !important;\n}\n\n[_nghost-%COMP%]     .angular2-smart-action-multiple-select {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n[_nghost-%COMP%]     td.angular2-smart-action-multiple-select {\n  display: flex;\n  height: 79px;\n  align-items: center;\n}"]
      });
    }
  }
  return ManageVariantsQuantityFormComponent;
})();

/***/ }),

/***/ 33755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ImageUploaderBaseComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29087);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26860);











let ImageUploaderBaseComponent = /*#__PURE__*/(() => {
  let ImageUploaderBaseComponent = class ImageUploaderBaseComponent {
    get folder() {
      return this._folder;
    }
    set folder(value) {
      this._folder = value;
      this.setUploaderConfigurationOptions();
    }
    constructor(store) {
      this.store = store;
      this.subject$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B();
      /*
       * Getter & Setter for dynamic image upload folder
       */
      this._folder = 'profile_pictures';
      this.onInit();
    }
    onInit() {
      this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.setUploaderConfigurationOptions()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Set file uploader configuration options
     */
    setUploaderConfigurationOptions() {
      if (!this.user) {
        return;
      }
      const {
        token
      } = this.store;
      const {
        tenantId
      } = this.user;
      const headers = [];
      headers.push({
        name: 'Authorization',
        value: `Bearer ${token}`
      });
      headers.push({
        name: 'Tenant-Id',
        value: tenantId
      });
      const uploaderOptions = {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__/* .environment */ .c.API_BASE_URL + `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .API_PREFIX */ .m4}/image-assets/upload/${this.folder}`,
        method: 'POST',
        // XHR request method
        autoUpload: true,
        // Upload files automatically upon addition to upload queue
        isHTML5: true,
        // Use xhrTransport in favor of iframeTransport
        removeAfterUpload: true,
        // Calculate progress independently for each uploaded file
        headers: headers // XHR request headers
      };
      this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileUploader */ .l0(uploaderOptions);
      // Adding additional form data
      this.uploader.onBuildItemForm = (fileItem, form) => {
        if (!!this.store.user.tenantId) {
          form.append('tenantId', tenantId);
        }
        if (!!this.organization) {
          form.append('organizationId', this.organization.id);
        }
      };
    }
    /**
     * Get image metadata using by Image URL
     *
     * @param url
     * @returns
     */
    getImageMetadata(url) {
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        try {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = error => reject(false);
            img.src = url;
          });
        } catch (error) {
          console.log('Error while retrieving image metadata', error);
        }
      })();
    }
    static {
      this.ɵfac = function ImageUploaderBaseComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImageUploaderBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ImageUploaderBaseComponent,
        selectors: [["ng-component"]],
        inputs: {
          folder: "folder"
        },
        standalone: false,
        decls: 0,
        vars: 0,
        template: function ImageUploaderBaseComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
    }
  };
  ImageUploaderBaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il])], ImageUploaderBaseComponent);
  return ImageUploaderBaseComponent;
})();


/***/ }),

/***/ 35388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ TranslatableService)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);




let TranslatableService = /*#__PURE__*/(() => {
  class TranslatableService {
    constructor(translateService) {
      this.translateService = translateService;
    }
    /**
     * Retrieves the translated properties of an ITranslatable object based on the current language.
     *
     * @param {ITranslatable<any>} translatable - The ITranslatable object to be translated.
     * @param {string[]} translateProps - An array of property names to be translated.
     * @return {any} The translated ITranslatable object.
     */
    getTranslated(translatable, translateProps) {
      if (!translatable || !Array.isArray(translatable.translations)) {
        console.warn('Invalid translatable object or translations property:', translatable);
        return translatable;
      }
      const currentLangCode = this.translateService.currentLang || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .LanguagesEnum */ .TR.ENGLISH;
      const currentLangTranslation = translatable.translations.find(tr => tr.languageCode == currentLangCode);
      translateProps.forEach(prop => {
        if (currentLangTranslation) {
          translatable[prop] = currentLangTranslation[prop];
        } else {
          translatable[prop] = '(No Translation)';
        }
      });
      return translatable;
    }
    /**
     * Retrieves the translated value of a specific property from an ITranslatable object based on the current language.
     *
     * @param {ITranslatable<any>} translatable - The ITranslatable object to be translated.
     * @param {string} translateProperty - The name of the property to be translated.
     * @return {string} The translated value of the specified property.
     */
    getTranslatedProperty(translatable, translateProperty) {
      if (!translatable || !translateProperty) {
        console.warn('Invalid translatable object or translation property:', translatable, translateProperty);
        return null;
      }
      return this.getTranslated({
        ...translatable
      }, [translateProperty])[translateProperty];
    }
    static {
      this.ɵfac = function TranslatableService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TranslatableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TranslatableService,
        factory: TranslatableService.ɵfac
      });
    }
  }
  return TranslatableService;
})();

/***/ }),

/***/ 36354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ WarehouseFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9620);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23423);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93105);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94923);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(44495);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78870);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19426);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(26161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71466);
/* harmony import */ var _packages_ui_core_shared_src_lib_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7281);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(62177);
/* harmony import */ var _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8738);
/* harmony import */ var _warehouse_products_table_warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28384);

var WarehouseFormComponent_1;



























const _c0 = ["locationFormDirective"];
const _c1 = ["leafletTemplate"];
const _c2 = ["stepper"];
const _c3 = a0 => ({
  opacity: a0
});
function WarehouseFormComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function WarehouseFormComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVENTORY_PAGE.THIS_FIELD_IS_REQUIRED"), " ");
  }
}
function WarehouseFormComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVENTORY_PAGE.THIS_FIELD_IS_REQUIRED"), " ");
  }
}
function WarehouseFormComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVENTORY_PAGE.EMAIL_WRONG_FORMAT"), " ");
  }
}
function WarehouseFormComponent_button_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.NEXT"));
  }
}
function WarehouseFormComponent_button_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function WarehouseFormComponent_button_83_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onSaveRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "BUTTONS.SAVE"), " ");
  }
}
function WarehouseFormComponent_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(1, "div", 32)(2, "div", 9)(3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(4, "ga-warehouse-products-table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(5, "div", 13)(6, "div", 29)(7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function WarehouseFormComponent_ng_container_86_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(10, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(13, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function WarehouseFormComponent_ng_container_86_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onSaveRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("warehouse", ctx_r2.warehouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(9, 5, "BUTTONS.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(12, 7, "BUTTONS.PREVIOUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(15, 9, "BUTTONS.SAVE"), " ");
  }
}
function WarehouseFormComponent_ng_template_87__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnamespaceSVG"] */ .qSk();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "svg", 51)(1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(2, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(3, "g", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(4, "circle", 54)(5, "circle", 55)(6, "use", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(1, _c3, ctx_r2.hoverState ? "1" : "0.3"));
  }
}
function WarehouseFormComponent_ng_template_87_ga_no_image_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "ga-no-image", 57);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("fontSize", 14)("placeholder", "NO_IMAGE.ADD_DROP");
  }
}
function WarehouseFormComponent_ng_template_87_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "img", 58);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r2.logo.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function WarehouseFormComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("mouseenter", function WarehouseFormComponent_ng_template_87_Template_div_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.hoverState = true);
    })("mouseleave", function WarehouseFormComponent_ng_template_87_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.hoverState = false);
    })("click", function WarehouseFormComponent_ng_template_87_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onImageSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(1, WarehouseFormComponent_ng_template_87__svg_svg_1_Template, 7, 3, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(3, WarehouseFormComponent_ng_template_87_ga_no_image_3_Template, 1, 2, "ga-no-image", 49)(4, WarehouseFormComponent_ng_template_87_img_4_Template, 1, 1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.logo && ctx_r2.logo.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(4, _c3, ctx_r2.hoverState ? "0.2" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.logo || !ctx_r2.logo.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.logo && ctx_r2.logo.url);
  }
}
let WarehouseFormComponent = /*#__PURE__*/(() => {
  let WarehouseFormComponent = class WarehouseFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .K {
    static {
      WarehouseFormComponent_1 = this;
    }
    static buildForm(fb) {
      return fb.group({
        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required],
        tags: [],
        code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required],
        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.email]],
        active: [false],
        logo: [null],
        description: [null]
      });
    }
    constructor(toastrService, warehouseService, translateService, route, router, fb, store, dialogService, imageAssetService) {
      super(translateService);
      this.toastrService = toastrService;
      this.warehouseService = warehouseService;
      this.translateService = translateService;
      this.route = route;
      this.router = router;
      this.fb = fb;
      this.store = store;
      this.dialogService = dialogService;
      this.imageAssetService = imageAssetService;
      this.FormHelpers = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .FormHelpers */ .k;
      this.images = [];
      this.newImageUploadedEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .B();
      /*
       * Location Mutation Form
       */
      this.locationForm = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .LocationFormComponent */ .f.buildForm(this.fb);
      /*
       * Warehouse Mutation Form
       */
      this.form = WarehouseFormComponent_1.buildForm(this.fb);
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => this._getAssetsImages()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      this.newImageUploadedEvent$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(image => !!image), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(data => !!data && !!data.warehouse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(({
        warehouse
      }) => this.warehouse = warehouse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => {
        this._patchForm();
        this._patchLocationForm();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    onImageSelect() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
        const dialog = _this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .SelectAssetComponent */ .a, {
          context: {
            newImageUploadedEvent: _this.newImageUploadedEvent$,
            galleryInput: _this.images,
            settings: {
              uploadImageEnabled: true,
              deleteImageEnabled: true,
              selectMultiple: false
            }
          }
        });
        let selectedImage = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(dialog.onClose);
        if (selectedImage) {
          _this.logo = selectedImage;
        }
      })();
    }
    _getAssetsImages() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        const {
          id: organizationId
        } = _this2.organization;
        const {
          tenantId
        } = _this2.store.user;
        _this2.images = (yield _this2.imageAssetService.getAll({
          tenantId,
          organizationId
        })).items;
      })();
    }
    _patchForm() {
      if (!this.warehouse) return;
      const {
        warehouse
      } = this;
      this.form.patchValue({
        name: warehouse.name,
        tags: warehouse.tags,
        code: warehouse.code,
        email: warehouse.email,
        active: warehouse.active,
        description: warehouse.description,
        logo: warehouse.logo
      });
      this.logo = warehouse.logo || null;
    }
    _patchLocationForm() {
      if (!this.warehouse || !this.warehouse.contact) return;
      const {
        contact
      } = this.warehouse;
      this.locationFormDirective.setValue({
        country: contact.country,
        city: contact.city,
        postcode: contact.postcode,
        address: contact.address,
        address2: contact.address2,
        loc: {
          type: 'Point',
          coordinates: [contact.latitude, contact.longitude]
        }
      });
    }
    handleImageUploadError(error) {
      this.toastrService.danger('INVENTORY_PAGE.COULD_NOT_UPLOAD_IMAGE', 'TOASTR.TITLE.ERROR');
    }
    onSaveRequest() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this3.store.user;
        const {
          id: organizationId
        } = _this3.organization;
        const locationFormValue = _this3.locationFormDirective.getValue();
        const {
          coordinates
        } = locationFormValue['loc'];
        delete locationFormValue['loc'];
        const [latitude, longitude] = coordinates;
        let request = {
          ..._this3.form.value,
          logo: _this3.logo,
          tenantId,
          organizationId,
          contact: {
            ...locationFormValue,
            latitude,
            longitude
          }
        };
        if (!_this3.warehouse) {
          yield _this3.warehouseService.create(request).then(() => {
            _this3.toastrService.success('INVENTORY_PAGE.WAREHOUSE_WAS_CREATED', {
              name: request.name
            });
          }).catch(() => {
            _this3.toastrService.danger('INVENTORY_PAGE.COULD_NOT_CREATE_WAREHOUSE', null, {
              name: request.name
            });
          }).finally(() => {
            _this3.cancel();
          });
        } else {
          yield _this3.warehouseService.update(_this3.warehouse.id, request).then(res => {
            _this3.toastrService.success('INVENTORY_PAGE.WAREHOUSE_WAS_UPDATED', {
              name: request.name
            });
            _this3.warehouse = res;
          }).finally(() => {
            _this3.cancel();
          });
        }
      })();
    }
    cancel() {
      this.router.navigate(['/pages/organization/inventory/warehouses']);
    }
    selectedTagsEvent(currentSelection) {
      this.form.get('tags').setValue(currentSelection);
      this.form.updateValueAndValidity();
    }
    onCoordinatesChanges($event) {
      const {
        loc: {
          coordinates
        }
      } = this.locationFormDirective.getValue();
      const [lat, lng] = coordinates;
      this.leafletTemplate.addMarker(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(lat, lng));
    }
    onMapClicked(latlng) {
      const {
        lat,
        lng
      } = latlng;
      const location = this.locationFormDirective.getValue();
      this.locationFormDirective.setValue({
        ...location,
        country: '',
        loc: {
          type: 'Point',
          coordinates: [lat, lng]
        }
      });
    }
    stepClick() {
      setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
    }
    isActiveInventoryTab() {
      return this.warehouse && this.warehouse.id;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function WarehouseFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WarehouseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .WarehouseService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ImageAssetService */ .V));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WarehouseFormComponent,
        selectors: [["ga-warehouse-form"]],
        viewQuery: function WarehouseFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .GBs(_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .GBs(_c2, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.locationFormDirective = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.leafletTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.stepper = _t.first);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 89,
        vars: 67,
        consts: [["stepper", ""], ["locationFormDirective", ""], ["leafletTemplate", ""], ["warehouseImage", ""], [1, "main-header"], [1, "top-nav"], ["disableStepNavigation", "true", "linear", "false", 3, "click"], [3, "label"], [1, "step-container", 3, "formGroup"], [1, "row", "step-form"], [1, "col-md-3", "col-sm-12", "image-container"], [4, "ngTemplateOutlet"], [1, "col-md-9", "col-sm-12", "pl-5"], [1, "row"], [1, "col-md-6", "col-sm-12"], [1, "form-group"], ["for", "name", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "name", "type", "text", "formControlName", "name", "nbInput", "", 3, "placeholder", "status"], ["class", "text-danger", 4, "ngIf"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], ["for", "code", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "code", "type", "text", "formControlName", "code", "nbInput", "", 3, "placeholder", "status"], ["for", "email", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "email", "type", "text", "formControlName", "email", "nbInput", "", 3, "placeholder", "status"], [1, "row", "mb-2"], ["status", "basic", "formControlName", "active"], [1, "col-md-12", "col-sm-12"], ["for", "description", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "description", "type", "text", "formControlName", "description", "nbInput", "", 3, "placeholder"], [1, "col-12", "next-button-container"], ["status", "basic", "outline", "", "nbButton", "", "nbStepperNext", "", 3, "click"], ["outline", "", "nbButton", "", "nbStepperNext", "", 1, "green"], [1, "step-container"], [1, "col-md-4", "col-sm-5"], [3, "mapCoordinatesEmitter", "form", "showAutocompleteSearch"], [1, "col-md-8", "col-sm-7"], [3, "mapClicked"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["outline", "", "nbButton", "", "nbStepperPrevious", "", 1, "gray"], ["class", "green", "outline", "", "nbButton", "", "nbStepperNext", "", 4, "ngIf"], ["status", "success", "nbButton", "", 3, "disabled", "click", 4, "ngIf"], [3, "label", "hidden"], [4, "ngIf"], [1, "text-danger"], ["status", "success", "nbButton", "", 3, "click", "disabled"], [3, "warehouse"], [1, "warehouse-photo", 3, "mouseenter", "mouseleave", "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle", 4, "ngIf"], [1, "image-overlay", 3, "ngStyle"], ["class", "store-image", 3, "fontSize", "placeholder", 4, "ngIf"], ["class", "store-image", "alt", "Warehouse Photo", 3, "src", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [1, "store-image", 3, "fontSize", "placeholder"], ["alt", "Warehouse Photo", 1, "store-image", 3, "src"]],
        template: function WarehouseFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header")(2, "div", 4)(3, "div", 5)(4, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(5, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body")(9, "nb-stepper", 6, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function WarehouseFormComponent_Template_nb_stepper_click_9_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.stepClick());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(11, "nb-step", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(13, "form", 8)(14, "div", 9)(15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(16, WarehouseFormComponent_ng_container_16_Template, 1, 0, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(21, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(23, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(25, WarehouseFormComponent_div_25_Template, 3, 3, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(26, "div", 14)(27, "div", 15)(28, "ga-tags-color-input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function WarehouseFormComponent_Template_ga_tags_color_input_selectedTagsEvent_28_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsEvent($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(29, "div", 13)(30, "div", 14)(31, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(32, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(34, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(36, WarehouseFormComponent_div_36_Template, 3, 3, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(37, "div", 14)(38, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(39, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(41, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(43, WarehouseFormComponent_div_43_Template, 3, 3, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(44, "div", 24)(45, "div", 14)(46, "nb-checkbox", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(49, "div", 13)(50, "div", 26)(51, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(52, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(53, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(54, "textarea", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(56, "div", 13)(57, "div", 29)(58, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function WarehouseFormComponent_Template_button_click_58_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.cancel());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(59);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(61, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(62);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(64, "nb-step", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(66, "div", 32)(67, "div", 9)(68, "div", 33)(69, "ga-location-form", 34, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("mapCoordinatesEmitter", function WarehouseFormComponent_Template_ga_location_form_mapCoordinatesEmitter_69_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.onCoordinatesChanges($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(71, "div", 35)(72, "ga-leaflet-map", 36, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("mapClicked", function WarehouseFormComponent_Template_ga_leaflet_map_mapClicked_72_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.onMapClicked($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(74, "div", 13)(75, "div", 29)(76, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function WarehouseFormComponent_Template_button_click_76_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.cancel());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(77);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(78, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(79, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(80);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(81, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(82, WarehouseFormComponent_button_82_Template, 3, 3, "button", 39)(83, WarehouseFormComponent_button_83_Template, 3, 4, "button", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(84, "nb-step", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(85, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(86, WarehouseFormComponent_ng_container_86_Template, 16, 11, "ng-container", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(87, WarehouseFormComponent_ng_template_87_Template, 5, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const warehouseImage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(88);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(7, 33, !ctx.warehouse ? "INVENTORY_PAGE.CREATE_WAREHOUSE" : "INVENTORY_PAGE.EDIT_WAREHOUSE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(12, 35, "INVENTORY_PAGE.MAIN"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", warehouseImage_r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(22, 37, "INVENTORY_PAGE.NAME"), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(24, 39, "INVENTORY_PAGE.NAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "name") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(33, 41, "INVENTORY_PAGE.CODE"), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(35, 43, "INVENTORY_PAGE.CODE"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "code") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "code"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(40, 45, "INVENTORY_PAGE.EMAIL"), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(42, 47, "INVENTORY_PAGE.EMAIL"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "email") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(48, 49, "INVENTORY_PAGE.ACTIVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(53, 51, "INVENTORY_PAGE.DESCRIPTION"), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(55, 53, "INVENTORY_PAGE.DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(60, 55, "BUTTONS.CANCEL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(63, 57, "BUTTONS.NEXT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(65, 59, "INVENTORY_PAGE.LOCATION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("form", ctx.locationForm)("showAutocompleteSearch", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(78, 61, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(81, 63, "BUTTONS.PREVIOUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isActiveInventoryTab());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.isActiveInventoryTab());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(85, 65, "INVENTORY_PAGE.INVENTORY"))("hidden", !ctx.isActiveInventoryTab());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isActiveInventoryTab());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgTemplateOutlet */ .T3, _angular_common__WEBPACK_IMPORTED_MODULE_23__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbStepperComponent */ .RCE, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbStepComponent */ .oYO, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbStepperNextDirective */ .Se1, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbStepperPreviousDirective */ .e09, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_24__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_25__/* .ImgDirective */ .z, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .LocationFormComponent */ .f, _packages_ui_core_shared_src_lib_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_26__/* .LeafletMapComponent */ .x, _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_27__/* .TagsColorInputComponent */ .i, _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_28__/* .NoImageComponent */ ._, _warehouse_products_table_warehouse_products_table_component__WEBPACK_IMPORTED_MODULE_1__/* .WarehouseProductsTableComponent */ .v, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.store-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 5px;\n}\n\n.top-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n\n.product-store-photo[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%] {\n  width: 90%;\n  overflow: hidden;\n  position: relative;\n  height: 300px;\n  border-radius: 13px;\n}\n.product-store-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.product-store-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n.product-store-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n.product-store-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], \n.warehouse-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n}\n[_nghost-%COMP%]   nb-stepper[_ngcontent-%COMP%]     .step-content {\n  padding: 1rem;\n  height: calc(100vh - 17.25rem);\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\n[_nghost-%COMP%]   nb-stepper[_ngcontent-%COMP%]     .step-content {\n  height: calc(100vh - 17.25rem);\n}\n[_nghost-%COMP%]   .next-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .step-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .step-container[_ngcontent-%COMP%]   .step-form[_ngcontent-%COMP%] {\n  flex-grow: 10;\n}"]
      });
    }
  };
  return WarehouseFormComponent;
})();
WarehouseFormComponent = WarehouseFormComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .WarehouseService */ .z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .Ix, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .Store */ .il, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ImageAssetService */ .V])], WarehouseFormComponent);


/***/ }),

/***/ 36387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ InventoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4106);
/* harmony import */ var _components_inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71922);
/* harmony import */ var _components_edit_inventory_item_product_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69758);
/* harmony import */ var _components_table_inventory_items_table_inventory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27760);
/* harmony import */ var _components_edit_inventory_item_variant_variant_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97124);
/* harmony import */ var _components_view_inventory_item_view_inventory_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);










const ORG_PERMISSIONS = [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ALL_ORG_EDIT];
const routes = [{
  path: '',
  component: _components_inventory_component__WEBPACK_IMPORTED_MODULE_4__/* .InventoryComponent */ .C,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [...ORG_PERMISSIONS, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ORG_INVENTORY_VIEW],
      redirectTo: '/pages/dashboard'
    }
  },
  children: [{
    path: '',
    component: _components_table_inventory_items_table_inventory_component__WEBPACK_IMPORTED_MODULE_1__/* .TableInventoryComponent */ .a,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: 'create',
    component: _components_edit_inventory_item_product_form_component__WEBPACK_IMPORTED_MODULE_0__/* .ProductFormComponent */ .F,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: 'edit/:id',
    component: _components_edit_inventory_item_product_form_component__WEBPACK_IMPORTED_MODULE_0__/* .ProductFormComponent */ .F,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: 'view/:id',
    component: _components_view_inventory_item_view_inventory_item_component__WEBPACK_IMPORTED_MODULE_2__/* .InventoryItemViewComponent */ .w,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: ':itemId/variants/:itemVariantId',
    component: _components_edit_inventory_item_variant_variant_form_component__WEBPACK_IMPORTED_MODULE_6__/* .InventoryVariantFormComponent */ .p,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false
      }
    }
  }]
}, {
  path: 'product-types',
  loadChildren: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 81686)).then(m => m.ProductTypesModule)
}, {
  path: 'product-categories',
  loadChildren: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 38585)).then(m => m.ProductCategoriesRoutingModule)
}, {
  path: 'warehouses',
  loadChildren: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 23016)).then(m => m.WarehousesModule)
}, {
  path: 'merchants',
  loadChildren: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 77041)).then(m => m.MerchantModule)
}];
let InventoryRoutingModule = /*#__PURE__*/(() => {
  class InventoryRoutingModule {
    static {
      this.ɵfac = function InventoryRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InventoryRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InventoryRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .RouterModule */ .iI]
      });
    }
  }
  return InventoryRoutingModule;
})();

/***/ }),

/***/ 38270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ MerchantComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);


let MerchantComponent = /*#__PURE__*/(() => {
  class MerchantComponent {
    static {
      this.ɵfac = function MerchantComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MerchantComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: MerchantComponent,
        selectors: [["ga-merchant-layout-selector"]],
        standalone: false,
        decls: 2,
        vars: 0,
        consts: [[1, "content"]],
        template: function MerchantComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterOutlet */ .n3],
        encapsulation: 2
      });
    }
  }
  return MerchantComponent;
})();

/***/ }),

/***/ 38327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ SelectedRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);


let SelectedRowComponent = /*#__PURE__*/(() => {
  class SelectedRowComponent {
    onValueChange(event) {
      this.rowData.selected = event.target.checked;
    }
    static {
      this.ɵfac = function SelectedRowComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SelectedRowComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: SelectedRowComponent,
        selectors: [["ga-selected-row-table-selector"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [["status", "basic", 3, "change", "checked"]],
        template: function SelectedRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "nb-checkbox", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function SelectedRowComponent_Template_nb_checkbox_change_1_listener($event) {
              return ctx.onValueChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.rowData && ctx.rowData.selected);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCheckboxComponent */ .DMy],
        encapsulation: 2
      });
    }
  }
  return SelectedRowComponent;
})();

/***/ }),

/***/ 38585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCategoriesRoutingModule: () => (/* binding */ ProductCategoriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _product_categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _product_categories_component__WEBPACK_IMPORTED_MODULE_0__/* .ProductCategoriesComponent */ .r,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ORG_PRODUCT_CATEGORIES_VIEW],
      redirectTo: '/pages/dashboard'
    },
    selectors: {
      project: false,
      employee: false,
      date: false
    }
  }
}];
let ProductCategoriesRoutingModule = /*#__PURE__*/(() => {
  class ProductCategoriesRoutingModule {
    static {
      this.ɵfac = function ProductCategoriesRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProductCategoriesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProductCategoriesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return ProductCategoriesRoutingModule;
})();

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

/***/ 45418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ InventoryTableComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let InventoryTableComponentsModule = /*#__PURE__*/(() => {
  class InventoryTableComponentsModule {
    static {
      this.ɵfac = function InventoryTableComponentsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InventoryTableComponentsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InventoryTableComponentsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconModule */ .clu, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G]
      });
    }
  }
  return InventoryTableComponentsModule;
})();

/***/ }),

/***/ 52369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ItemImgTagsComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71466);
/* harmony import */ var _no_image_no_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8738);







const _c0 = a0 => ({
  "tags-right": a0
});
function ItemImgTagsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ItemImgTagsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5)(1, "ga-no-image", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("mouseenter", function ItemImgTagsComponent_div_2_Template_ga_no_image_mouseenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.hoverState = true);
    })("mouseleave", function ItemImgTagsComponent_div_2_Template_ga_no_image_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.hoverState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
function ItemImgTagsComponent_div_6_nb_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 10);
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", tag_r3 == null ? null : tag_r3.color)("color", ctx_r0.backgroundContrast(tag_r3 == null ? null : tag_r3.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("text", tag_r3 == null ? null : tag_r3.name);
  }
}
function ItemImgTagsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ItemImgTagsComponent_div_6_nb_badge_1_Template, 1, 5, "nb-badge", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c0, ctx_r0.layout === ctx_r0.componentLayoutEnum.CARDS_GRID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.rowData == null ? null : ctx_r0.rowData.tags);
  }
}
let ItemImgTagsComponent = /*#__PURE__*/(() => {
  class ItemImgTagsComponent {
    constructor() {
      this.isTags = true;
      this.componentLayoutEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .ComponentLayoutStyleEnum */ .IE;
    }
    get imageUrl() {
      if (this.rowData.logo) {
        return this.rowData.logo.url || this.rowData.logo;
      } else if (this.rowData.featuredImage && this.rowData.featuredImage.url) {
        return this.rowData.featuredImage.url;
      }
      return null;
    }
    backgroundContrast(bgColor) {
      return (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .getContrastColor */ .w5)(bgColor);
    }
    static {
      this.ɵfac = function ItemImgTagsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ItemImgTagsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ItemImgTagsComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData",
          isTags: "isTags",
          value: "value",
          layout: "layout"
        },
        standalone: false,
        decls: 7,
        vars: 4,
        consts: [[1, "img-tags-container"], ["class", "image-container", 4, "ngIf"], [1, "row"], [1, "col-12", "text-truncate", "name"], ["class", "col-12 mt-2", 3, "ngClass", 4, "ngIf"], [1, "image-container"], [3, "src"], [1, "no-image", 3, "mouseenter", "mouseleave"], [1, "col-12", "mt-2", 3, "ngClass"], ["class", "color", "position", "centered", 3, "background", "color", "text", 4, "ngFor", "ngForOf"], ["position", "centered", 1, "color", 3, "text"]],
        template: function ItemImgTagsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ItemImgTagsComponent_div_1_Template, 2, 1, "div", 1)(2, ItemImgTagsComponent_div_2_Template, 2, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, ItemImgTagsComponent_div_6_Template, 2, 4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.imageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.imageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.value || "-", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isTags);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeComponent */ .XyX, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_5__/* .ImgDirective */ .z, _no_image_no_image_component__WEBPACK_IMPORTED_MODULE_6__/* .NoImageComponent */ ._],
        styles: [".img-tags-container[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\tgap: 10px;\n\t\t\t}\n\n\t\t\t.image-container[_ngcontent-%COMP%] {\n\t\t\t\twidth: 70px;\n\t\t\t\theight: 64px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\n\t\t\t.color[_ngcontent-%COMP%] {\n\t\t\t\tposition: static;\n\t\t\t\tmargin-top: 5px;\n\t\t\t\tmargin-right: 5px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\t\t\t.tags[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\twidth: 200px;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t}\n\n\t\t\timg[_ngcontent-%COMP%] {\n\t\t\t\twidth: 70px;\n\t\t\t\theight: 64px;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tobject-fit: cover;\n\t\t\t\tbox-shadow: var(--gauzy-shadow) (0 0 0 / 15%);\n\t\t\t}\n\n\t\t\t.no-image[_ngcontent-%COMP%] {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\n\t\t\t.content[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: baseline;\n\t\t\t\tpadding: 8px;\n\t\t\t\tgap: 5px;\n\t\t\t}\n\n\t\t\t.tags-right[_ngcontent-%COMP%] {\n\t\t\t\tjustify-content: flex-end;\n\t\t\t}\n\n\t\t\t.name[_ngcontent-%COMP%] {\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tline-height: 17px;\n\t\t\t\tletter-spacing: 0em;\n\t\t\t\ttext-align: left;\n\t\t\t\tcolor: var(--gauzy-color-text-1);\n\t\t\t\tmargin-bottom: 4px;\n\t\t\t}"]
      });
    }
  }
  return ItemImgTagsComponent;
})();

/***/ }),

/***/ 53437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ FileUploaderInputComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _image_uploader_image_uploader_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33755);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71924);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20345);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);













let FileUploaderInputComponent = /*#__PURE__*/(() => {
  class FileUploaderInputComponent extends _image_uploader_image_uploader_base_component__WEBPACK_IMPORTED_MODULE_0__/* .ImageUploaderBaseComponent */ .a {
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get locale() {
      return this._locale;
    }
    set locale(value) {
      this._locale = value;
    }
    get fileUrl() {
      return this._fileUrl;
    }
    set fileUrl(fileUrl) {
      this._fileUrl = fileUrl;
      this.inputControl.setValue(fileUrl);
      this.inputControl.updateValueAndValidity();
    }
    constructor(store) {
      super(store);
      this.store = store;
      this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ();
      this.loading = false;
      this.uploadedImageAsset = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .bkB();
      this.uploadedImgUrl = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .bkB();
      this.uploadedImgData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {}
    ngAfterViewInit() {
      this.uploader.onAfterAddingFile = file => {
        file.withCredentials = false;
      };
      this.uploader.onSuccessItem = (item, response, status) => {
        try {
          if (response) {
            const image = JSON.parse(response);
            this.uploadedImageAsset.emit(image);
            this.uploadedImgData.emit(image);
            this.inputControl.setValue(image.fullUrl);
            this.inputControl.updateValueAndValidity();
          }
        } catch (error) {
          console.log('Error while uploaded image url', error);
        }
      };
      this.uploader.onErrorItem = (item, response, status) => {
        try {
          if (response) {
            const error = JSON.parse(response);
            console.log(error);
          }
        } catch (error) {
          console.log('Error while uploaded image url error', error);
        }
      };
    }
    /**
     * When input changed file URL
     *
     * @param event
     */
    inputUrlChanged() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        const fileUrl = _this.inputControl.value;
        if (fileUrl) {
          try {
            yield _this._setupImage(fileUrl);
            _this.uploadedImgUrl.emit(fileUrl);
          } catch (error) {
            console.log('Error while retrieving image from URL', error);
          }
        }
      })();
    }
    /**
     * Image asset upload handler
     */
    imageUploadHandler() {
      if (this.uploader.queue.length > 0) {
        this.uploader.queue[this.uploader.queue.length - 1].upload();
      }
    }
    /**
     * Get image metadata and setup image object
     *
     * @param imgUrl
     * @returns
     */
    _setupImage(imgUrl) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        try {
          const img = yield _this2.getImageMetadata(imgUrl);
          const width = img['width'];
          const height = img['height'];
          const orientation = width !== height ? width > height ? 2 : 1 : 0;
          const locale = _this2.locale;
          const url = imgUrl;
          return {
            locale,
            url,
            width,
            height,
            orientation
          };
        } catch (error) {
          return error;
        }
      })();
    }
    static {
      this.ɵfac = function FileUploaderInputComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileUploaderInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: FileUploaderInputComponent,
        selectors: [["ngx-file-uploader-input"]],
        inputs: {
          placeholder: "placeholder",
          locale: "locale",
          fileUrl: "fileUrl"
        },
        outputs: {
          uploadedImageAsset: "uploadedImageAsset",
          uploadedImgUrl: "uploadedImgUrl",
          uploadedImgData: "uploadedImgData"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 10,
        vars: 9,
        consts: [["fileInput", ""], ["nbSpinnerStatus", "primary", 1, "file-uploader-container"], ["type", "text", 1, "form-control", 3, "change", "placeholder", "formControl"], ["type", "file", "id", "fileInput", "ng2FileSelect", "", 3, "change", "hidden", "uploader"], ["nbButton", "", "status", "primary", "outline", "", "size", "tiny", "debounceClick", "", 3, "throttledClick"], [1, "far", "fa-folder", "mr-1"], [1, "text"]],
        template: function FileUploaderInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("change", function FileUploaderInputComponent_Template_input_change_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.inputUrlChanged());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(2, "input", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("change", function FileUploaderInputComponent_Template_input_change_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.imageUploadHandler());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("throttledClick", function FileUploaderInputComponent_Template_button_throttledClick_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(3);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(fileInput_r2.click());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(9, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", ctx.placeholder)("formControl", ctx.inputControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("hidden", true)("uploader", ctx.uploader);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(9, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(8, 5, "BROWSE")), " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .YP2, _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__/* .DebounceClickDirective */ .J, ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileSelectDirective */ .UJ, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .TitleCasePipe */ .PV, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.file-uploader-container[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n  border-radius: nb-theme(border-radius);\n}\n.file-uploader-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: calc(50% - 12px);\n  height: 24px;\n  border-width: 2px;\n  border-color: nb-theme(color-primary-transparent-default);\n}\n.file-uploader-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 6.25rem;\n  border-radius: nb-theme(border-radius);\n}\n.file-uploader-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n}"]
      });
    }
  }
  return FileUploaderInputComponent;
})();

/***/ }),

/***/ 53592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ManageQuantityComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94923);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);









const _c0 = ["quantity"];
let ManageQuantityComponent = /*#__PURE__*/(() => {
  class ManageQuantityComponent {
    constructor(warehouseService) {
      this.warehouseService = warehouseService;
    }
    ngAfterViewInit() {
      var _this = this;
      // Using 'fromEvent' to create an observable from the 'change' event of the quantity input field
      (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .fromEvent */ .R)(this.quantity.nativeElement, 'change').pipe(
      // Applying a debounce time of 100 milliseconds to avoid rapid firing of events
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .debounceTime */ .B)(100))
      // Subscribing to the observable
      .subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* (ev) {
          // Checking if the quantity is less than 0 and returning if true
          if (+ev.target.value < 0) return;
          // Depending on the type of rowData, update the warehouse product count or variant count
          if (_this.rowData.type == 'variant') {
            yield _this.warehouseService.updateWarehouseProductVariantCount(_this.rowData.id, +ev.target.value);
          } else {
            yield _this.warehouseService.updateWarehouseProductCount(_this.rowData.id, +ev.target.value);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    static {
      this.ɵfac = function ManageQuantityComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManageQuantityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .WarehouseService */ .z));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ManageQuantityComponent,
        selectors: [["ga-manage-warehouse-quantity-selector"]],
        viewQuery: function ManageQuantityComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.quantity = _t.first);
          }
        },
        standalone: false,
        decls: 4,
        vars: 5,
        consts: [["quantity", ""], ["nbInput", "", "type", "number", 3, "value", "min", "placeholder"]],
        template: function ManageQuantityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "input", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "INVENTORY_PAGE.QUANTITY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("value", ctx.value)("min", 0);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputDirective */ .i6h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        styles: ["input[_ngcontent-%COMP%] { width: 80px }"]
      });
    }
  }
  return ManageQuantityComponent;
})();

/***/ }),

/***/ 53718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ManageVariantsQuantityComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36950);
/* harmony import */ var _manage_variants_quantity_form_manage_variants_quantity_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98672);










let ManageVariantsQuantityComponent = /*#__PURE__*/(() => {
  class ManageVariantsQuantityComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translateService, dialogService, inventoryStore) {
      super(translateService);
      this.translateService = translateService;
      this.dialogService = dialogService;
      this.inventoryStore = inventoryStore;
    }
    onManageVariantsClick() {
      const dialog = this.dialogService.open(_manage_variants_quantity_form_manage_variants_quantity_form_component__WEBPACK_IMPORTED_MODULE_1__/* .ManageVariantsQuantityFormComponent */ .y, {
        context: {
          variants: this.value
        }
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(dialog.onClose).then(res => {
        this.inventoryStore.warehouseProductsCountUpdate$.next();
      });
    }
    static {
      this.ɵfac = function ManageVariantsQuantityComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManageVariantsQuantityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .InventoryStore */ .y));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ManageVariantsQuantityComponent,
        selectors: [["ga-manage-variants-quantity"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 4,
        vars: 3,
        consts: [["size", "small", "nbButton", "", "status", "primary", "outline", "", 1, "action", 3, "click"], ["status", "primary", "icon", "list-outline"]],
        template: function ManageVariantsQuantityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("click", function ManageVariantsQuantityComponent_Template_button_click_0_listener() {
              return ctx.onManageVariantsClick();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "INVENTORY_PAGE.MANAGE_VARIANTS_QUANTITY"), "\n");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconComponent */ .tHu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}"]
      });
    }
  }
  return ManageVariantsQuantityComponent;
})();

/***/ }),

/***/ 54102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ NameWithDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43826);


let NameWithDescriptionComponent = /*#__PURE__*/(() => {
  class NameWithDescriptionComponent {
    constructor() {}
    ngOnInit() {}
    static {
      this.ɵfac = function NameWithDescriptionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NameWithDescriptionComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NameWithDescriptionComponent,
        selectors: [["gauzy-name-with-description"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 5,
        vars: 5,
        consts: [[1, "name"], [1, "description"]],
        template: function NameWithDescriptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "truncate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData == null ? null : ctx.rowData.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(4, 2, ctx.rowData == null ? null : ctx.rowData.description, 50));
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__/* .TruncatePipe */ .H],
        styles: [".name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-color-text-1);\n  margin-bottom: 4px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-color-text-2);\n}"]
      });
    }
  }
  return NameWithDescriptionComponent;
})();

/***/ }),

/***/ 54462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ ImageUploaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);



let ImageUploaderModule = /*#__PURE__*/(() => {
  class ImageUploaderModule {
    static {
      this.ɵfac = function ImageUploaderModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImageUploaderModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ImageUploaderModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__/* .FileUploadModule */ .eB]
      });
    }
  }
  return ImageUploaderModule;
})();

/***/ }),

/***/ 55266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryModule: () => (/* binding */ InventoryModule)
/* harmony export */ });
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36387);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55567);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59520);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19448);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55337);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10248);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44495);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98672);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35388);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(43629);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(99820);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5844);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(61444);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59743);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(87736);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(17492);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(19223);
/* harmony import */ var _components_manage_merchants_merchant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77041);
/* harmony import */ var _components_manage_product_types_product_types_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81686);
/* harmony import */ var _components_manage_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94608);
/* harmony import */ var _components_manage_warehouses_warehouses_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23016);
/* harmony import */ var _components_inventory_table_components_inventory_table_components_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);
















const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogModule */ .nZv, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbStepperModule */ .QyE, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogModule */ .nZv.forChild()];
let InventoryModule = /*#__PURE__*/(() => {
  class InventoryModule {
    static {
      this.ɵfac = function InventoryModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InventoryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InventoryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ProductService */ .b, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ProductVariantService */ .M, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ProductVariantSettingService */ .q, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ProductVariantPriceService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ImageAssetService */ .V, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .InventoryStore */ .y, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatableService */ .b],
        imports: [_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .CurrencyModule */ .C, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .ImageAssetModule */ .g, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .InventoryRoutingModule */ .d, _components_manage_merchants_merchant_module__WEBPACK_IMPORTED_MODULE_1__.MerchantModule, NB_MODULES, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__/* .NgSelectModule */ .MQ, _components_manage_product_types_product_types_module__WEBPACK_IMPORTED_MODULE_2__.ProductTypesModule, _components_manage_product_categories_product_categories_module__WEBPACK_IMPORTED_MODULE_3__/* .ProductCategoriesModule */ .S, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .SelectAssetModule */ .B, _components_inventory_table_components_inventory_table_components_module__WEBPACK_IMPORTED_MODULE_21__/* .InventoryTableComponentsModule */ .B, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .TagsColorInputModule */ .x, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateModule */ .h.forChild(), _components_manage_warehouses_warehouses_module__WEBPACK_IMPORTED_MODULE_4__.WarehousesModule, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .LanguageSelectorModule */ .A, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .ProductTypeSelectorModule */ .f, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__/* .ProductCategorySelectorModule */ .f, ngx_permissions__WEBPACK_IMPORTED_MODULE_28__/* .NgxPermissionsModule */ .Ov.forChild()]
      });
    }
  }
  return InventoryModule;
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

/***/ 57761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ EnabledStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);



function EnabledStatusComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "INVENTORY_PAGE.INACTIVE"), " ");
  }
}
function EnabledStatusComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "INVENTORY_PAGE.ACTIVE"), " ");
  }
}
let EnabledStatusComponent = /*#__PURE__*/(() => {
  class EnabledStatusComponent {
    static {
      this.ɵfac = function EnabledStatusComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EnabledStatusComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EnabledStatusComponent,
        selectors: [["ng-component"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf"], [1, "badge", "badge-disabled"], [1, "badge", "badge-success"]],
        template: function EnabledStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EnabledStatusComponent_div_1_Template, 4, 3, "div", 0)(2, EnabledStatusComponent_div_2_Template, 4, 3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: [".badge-disabled[_ngcontent-%COMP%] {\n\t\t\t\tbackground-color: #ccc;\n\t\t\t}\n\n\t\t\t.badge[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: center;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tpadding: 4px 8px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tline-height: 15px;\n\t\t\t\tletter-spacing: 0em;\n\t\t\t\ttext-align: left;\n\t\t\t}"]
      });
    }
  }
  return EnabledStatusComponent;
})();

/***/ }),

/***/ 59248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ WarehousesTableComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9620);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(45715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72781);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(94923);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55101);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52369);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25152);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(57761);
/* harmony import */ var _inventory_table_components_description_description_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(49072);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(3456);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(49517);






























const _c0 = ["actionButtons"];
function WarehousesTableComponent_ng_template_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function WarehousesTableComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "angular2-smart-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function WarehousesTableComponent_ng_template_11_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectWarehouse($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, WarehousesTableComponent_ng_template_11_ng_container_3_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function WarehousesTableComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("scroll", function WarehousesTableComponent_ng_template_12_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    })("onSelectedItem", function WarehousesTableComponent_ng_template_12_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectWarehouse($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.warehouses);
  }
}
function WarehousesTableComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WarehousesTableComponent_ng_template_14_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onCreateWarehouse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function WarehousesTableComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, WarehousesTableComponent_ng_template_14_ng_template_0_Template, 4, 3, "ng-template", 15);
  }
}
function WarehousesTableComponent_ng_template_16_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WarehousesTableComponent_ng_template_16_ng_template_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onUpdateWarehouse(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WarehousesTableComponent_ng_template_16_ng_template_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onDelete(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "BUTTONS.DELETE"));
  }
}
function WarehousesTableComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, WarehousesTableComponent_ng_template_16_ng_template_0_Template, 8, 8, "ng-template", 15);
  }
}
let WarehousesTableComponent = class WarehousesTableComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(translateService, dialogService, warehouseService, toastrService, router, store, http) {
    super(translateService);
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.warehouseService = warehouseService;
    this.toastrService = toastrService;
    this.router = router;
    this.store = store;
    this.http = http;
    this.loading = false;
    this.disableButton = true;
    this.warehouses = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    this.warehouses$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
    this.setView();
  }
  ngOnInit() {
    this._applyTranslationOnSmartTable();
    this._loadSmartTableSettings();
  }
  ngAfterViewInit() {
    this.warehouses$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.getWarehouses()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.warehouses$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    const storeOrganization$ = this.store.selectedOrganization$;
    storeOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(300), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.warehouses$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.warehouses = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.WAREHOUSE;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.warehouses = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.warehouses$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      actions: false,
      editable: true,
      selectedRowIndex: -1,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.WAREHOUSE'),
      columns: {
        name: {
          title: this.getTranslation('INVENTORY_PAGE.LOGO'),
          type: 'custom',
          renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_10__/* .ItemImgTagsComponent */ .j,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          },
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .InputFilterComponent */ .U
          },
          filterFunction: name => {
            this.setFilter({
              field: 'name',
              search: name
            });
          }
        },
        email: {
          title: this.getTranslation('INVENTORY_PAGE.EMAIL'),
          type: 'string',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .InputFilterComponent */ .U
          },
          filterFunction: email => {
            this.setFilter({
              field: 'email',
              search: email
            });
          }
        },
        code: {
          title: this.getTranslation('INVENTORY_PAGE.CODE'),
          type: 'string',
          isFilterable: false
        },
        contact: {
          title: this.getTranslation('INVENTORY_PAGE.CONTACT'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_12__/* .ContactRowComponent */ .a,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getRawValue();
          }
        },
        description: {
          title: this.getTranslation('INVENTORY_PAGE.DESCRIPTION'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _inventory_table_components_description_description_component__WEBPACK_IMPORTED_MODULE_13__/* .DescriptionComponent */ ._,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        active: {
          title: this.getTranslation('INVENTORY_PAGE.ACTIVE'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_14__/* .EnabledStatusComponent */ .j,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        }
      }
    };
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  onCreateWarehouse() {
    if (!this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .PermissionsEnum */ .U.ORG_INVENTORY_PRODUCT_EDIT)) {
      return;
    }
    this.router.navigate(['/pages/organization/inventory/warehouses/create']);
  }
  onUpdateWarehouse(selectedItem) {
    if (selectedItem) {
      this.selectWarehouse({
        isSelected: true,
        data: selectedItem
      });
    }
    if (!this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .PermissionsEnum */ .U.ORG_INVENTORY_PRODUCT_EDIT)) {
      return;
    }
    const {
      id
    } = this.selectedWarehouse;
    this.router.navigate(['/pages/organization/inventory/warehouses/edit', id]);
  }
  onDelete(selectedItem) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this.selectWarehouse({
          isSelected: true,
          data: selectedItem
        });
      }
      if (!_this.selectedWarehouse) {
        return;
      }
      if (!_this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .PermissionsEnum */ .U.ORG_INVENTORY_PRODUCT_EDIT)) {
        return;
      }
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ ._)(_this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .DeleteConfirmationComponent */ .u).onClose);
      if (result) {
        yield _this.warehouseService.deleteFeaturedImage(_this.selectedWarehouse.id).then(res => {
          if (res && res.affected == 1) {
            const {
              name
            } = _this.selectedWarehouse;
            _this.toastrService.success('INVENTORY_PAGE.WAREHOUSE_WAS_DELETED', {
              name
            });
          }
        }).finally(() => {
          _this._refresh$.next(true);
          _this.warehouses$.next(true);
        });
      }
    })();
  }
  /*
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    try {
      this.loading = true;
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .ServerDataSource */ .N(this.http, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_20__/* .API_PREFIX */ .m4}/warehouses/pagination`,
        relations: ['logo', 'contact'],
        where: {
          organizationId,
          tenantId,
          ...(this.filters.where ? this.filters.where : {})
        },
        finalize: () => {
          if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            this.warehouses.push(...this.smartTableSource.getData());
          }
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          this.loading = false;
        }
      });
    } catch (error) {
      this.toastrService.danger(error);
      this.loading = false;
    }
  }
  /**
   * GET warehouse smart table source
   */
  getWarehouses() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(function* () {
      if (!_this2.organization) {
        return;
      }
      try {
        _this2.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this2.getPagination();
        _this2.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this2.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          yield _this2.smartTableSource.getElements();
        }
      } catch (error) {
        _this2.toastrService.danger(error);
      }
    })();
  }
  selectWarehouse({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedWarehouse = isSelected ? data : null;
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectWarehouse({
      isSelected: false,
      data: null
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function WarehousesTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WarehousesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .WarehouseService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_25__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_27__/* .HttpClient */ .Qq));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: WarehousesTableComponent,
      selectors: [["ga-warehouses"]],
      viewQuery: function WarehousesTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.actionButtons = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 18,
      vars: 10,
      consts: [["gridLayout", ""], ["visibleButton", ""], ["actionButtons", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [1, "gauzy-button-container"], [3, "buttonTemplate", "componentName", "buttonTemplateVisible", "isDisable"], [3, "ngIf", "ngIfElse"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "scroll", "onSelectedItem", "totalItems", "settings", "source"], ["ngxPermissionsOnly", "ORG_INVENTORY_PRODUCT_EDIT"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function WarehousesTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4)(2, "div", 5)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "ngx-gauzy-button-action", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, WarehousesTableComponent_ng_template_11_Template, 4, 3, "ng-template", 8)(12, WarehousesTableComponent_ng_template_12_Template, 1, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, WarehousesTableComponent_ng_template_14_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(16, WarehousesTableComponent_ng_template_16_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const gridLayout_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(13);
          const visibleButton_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
          const actionButtons_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 8, "INVENTORY_PAGE.WAREHOUSES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r9)("componentName", ctx.viewComponentName)("buttonTemplateVisible", visibleButton_r8)("isDisable", ctx.disableButton);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r7);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_29__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_30__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_31__/* .HeaderTitleComponent */ .X, angular2_smart_table__WEBPACK_IMPORTED_MODULE_32__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_33__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_34__/* .PaginationV2Component */ .a, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_35__/* .CardGridComponent */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[_ngcontent-%COMP%] {\n  background-color: #0088fe;\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: rgb(37, 184, 105);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.primary[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%], \n.action.primary[_ngcontent-%COMP%]   .appearance-filled.status-basic[nbButtonToggle][_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n[_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0 1px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}"]
    });
  }
};
WarehousesTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_36__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_36__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .WarehouseService */ .z, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ .t, _angular_router__WEBPACK_IMPORTED_MODULE_25__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .il, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__/* .HttpClient */ .Qq])], WarehousesTableComponent);


/***/ }),

/***/ 59743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LanguageSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let LanguageSelectorModule = /*#__PURE__*/(() => {
  class LanguageSelectorModule {
    static {
      this.ɵfac = function LanguageSelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LanguageSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: LanguageSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .LanguagesService */ .D],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return LanguageSelectorModule;
})();

/***/ }),

/***/ 64218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ MerchantFormResolver)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90010);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95126);




/**
 * Resolver function to fetch merchant details by ID.
 * If an error occurs, the user is redirected to the merchants page.
 *
 * @param route - The activated route snapshot containing the route parameters.
 * @returns An observable that emits the merchant details or an empty observable on error.
 */
const MerchantFormResolver = route => {
  // Inject necessary services
  const _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix);
  const _merchantService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .MerchantService */ .A);
  // Extract merchant ID from route parameters
  const merchantId = route.params['id'];
  // If no merchant ID is provided, return an empty observable
  if (!merchantId) {
    return rxjs__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY */ .w;
  }
  // If no merchant ID is provided, return an empty observable
  const merchant$ = _merchantService.getById(merchantId, ['logo', 'contact', 'warehouses', 'tags']);
  // Attempt to fetch merchant details
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .from */ .H)(merchant$).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(error => {
    // Navigate to the merchants page in case of an error
    _router.navigate(['/pages/organization/inventory/merchants']);
    // Log the error for debugging purposes
    console.error('Error while fetching merchant details:', error);
    // Return EMPTY observable
    return rxjs__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY */ .w;
  }));
};

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

/***/ 67759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85783);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35484);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99333);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46632);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61848);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86289);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(options)) {
    resultSelector = options;
    options = undefined;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__/* .mapOneOrManyArgs */ .I)(resultSelector));
  }
  const [add, remove] = isEventTarget(target) ? eventTargetMethods.map(methodName => handler => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];
  if (!add) {
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__/* .isArrayLike */ .X)(target)) {
      return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__/* .mergeMap */ .Z)(subTarget => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__/* .innerFrom */ .Tg)(target));
    }
  }
  if (!add) {
    throw new TypeError('Invalid event target');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_5__/* .Observable */ .c(subscriber => {
    const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
    add(handler);
    return () => remove(handler);
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return methodName => handler => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(target.off);
}
function isEventTarget(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ 69758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ ProductFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19159);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81236);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59520);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19448);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56383);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(62177);
/* harmony import */ var _packages_ui_core_shared_src_lib_language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(12624);
/* harmony import */ var _packages_ui_core_shared_src_lib_product_product_type_selector_product_type_selector_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45413);
/* harmony import */ var _packages_ui_core_shared_src_lib_product_product_category_selector_product_category_selector_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(37041);
/* harmony import */ var _options_form_options_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82661);
/* harmony import */ var _product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(693);
/* harmony import */ var _variant_form_variant_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22403);
/* harmony import */ var _variant_table_variant_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30617);



























const _c0 = ["inventoryTabset"];
const _c1 = ["mainTab"];
const _c2 = ["optionsTab"];
const _c3 = ["variantsTab"];
const _c4 = a0 => ({
  "status-danger": a0
});
function ProductFormComponent_form_27_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function ProductFormComponent_form_27_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(1, ProductFormComponent_form_27_div_16_div_1_Template, 3, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.form.controls["name"].errors.required);
  }
}
function ProductFormComponent_form_27_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function ProductFormComponent_form_27_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(1, ProductFormComponent_form_27_div_23_div_1_Template, 3, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.form.controls["code"].errors.required);
  }
}
function ProductFormComponent_form_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "form", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(7, "ngx-language-selector", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("selectedLanguageEvent", function ProductFormComponent_form_27_Template_ngx_language_selector_selectedLanguageEvent_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onLangChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(9, "div", 23)(10, "div", 24)(11, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(14, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(16, ProductFormComponent_form_27_div_16_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(17, "div", 30)(18, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(21, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(23, ProductFormComponent_form_27_div_23_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(24, "div", 23)(25, "div", 24)(26, "ngx-product-type-selector", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("onLoaded", function ProductFormComponent_form_27_Template_ngx_product_type_selector_onLoaded_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onLoadProductTypes($event));
    })("onChanged", function ProductFormComponent_form_27_Template_ngx_product_type_selector_onChanged_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectedProductType($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(28, "div", 30)(29, "ngx-product-category-selector", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("onLoaded", function ProductFormComponent_form_27_Template_ngx_product_category_selector_onLoaded_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onLoadProductCategories($event));
    })("onChanged", function ProductFormComponent_form_27_Template_ngx_product_category_selector_onChanged_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectedProductCategory($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(31, "div", 23)(32, "div", 19)(33, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(36, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(38, "\t\t\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(39, "div", 18)(40, "div", 19)(41, "nb-checkbox", 37)(42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(6, 19, "INVENTORY_PAGE.LANGUAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(8, 21, "INVENTORY_PAGE.LANGUAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(13, 23, "INVENTORY_PAGE.NAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(15, 25, "INVENTORY_PAGE.NAME"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction1"] */ .eq3(41, _c4, ctx_r2.form.controls["name"].invalid && ctx_r2.form.controls["name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.form.controls["name"].errors && ctx_r2.form.controls["name"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(20, 27, "INVENTORY_PAGE.CODE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(22, 29, "INVENTORY_PAGE.CODE"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction1"] */ .eq3(43, _c4, ctx_r2.form.controls["code"].invalid && ctx_r2.form.controls["code"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.form.controls["code"].errors && ctx_r2.form.controls["code"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(27, 31, "INVENTORY_PAGE.PRODUCT_TYPE"))("addTag", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(30, 33, "INVENTORY_PAGE.PRODUCT_CATEGORY"))("addTag", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(35, 35, "INVENTORY_PAGE.DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(37, 37, "INVENTORY_PAGE.DESCRIPTION"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpureFunction1"] */ .eq3(45, _c4, ctx_r2.form.controls["description"].invalid && ctx_r2.form.controls["description"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(44, 39, "INVENTORY_PAGE.ENABLED"));
  }
}
let ProductFormComponent = class ProductFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_5__/* .TranslationBaseComponent */ .K {
  constructor(translationService, fb, store, productService, route, location, router, toastrService, productVariantService, inventoryStore) {
    super(translationService);
    this.translationService = translationService;
    this.fb = fb;
    this.store = store;
    this.productService = productService;
    this.route = route;
    this.location = location;
    this.router = router;
    this.toastrService = toastrService;
    this.productVariantService = productVariantService;
    this.inventoryStore = inventoryStore;
    this.translations = [];
    this.tags = [];
    this.validateTranslationProperty = propertyName => control => {
      return this.translations.every(translation => {
        return !translation[propertyName] && !control.value;
      }) ? {
        required: true
      } : null;
    };
  }
  ngOnInit() {
    this.inventoryStore.clearCurrentProduct();
    this.setRouteSubscription();
    this.setOrganizationSubscription();
    this.setTranslationSettings();
  }
  setRouteSubscription() {
    var _this = this;
    this.route.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
      var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* (params) {
        if (!params.id) {
          _this.inventoryStore.clearCurrentProduct();
          return;
        } else if (params.id) {
          _this.productId = params.id;
          _this.loadProduct(_this.productId);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  setOrganizationSubscription() {
    this.store.selectedOrganization$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(organization => {
      if (organization) {
        this.organization = organization;
        this.loadProduct(this.productId);
      }
    });
  }
  _initializeForm() {
    this.form = this.fb.group({
      tags: [this.inventoryItem ? this.inventoryItem.tags : ''],
      name: [this.activeTranslation ? this.activeTranslation.name : '', this.validateTranslationProperty('name')],
      code: [this.inventoryItem ? this.inventoryItem.code : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.required],
      productTypeId: [this.inventoryItem ? this.inventoryItem.productTypeId : null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.required],
      productType: [this.inventoryItem ? this.inventoryItem.productType : null],
      productCategoryId: [this.inventoryItem ? this.inventoryItem.productCategoryId : null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.required],
      productCategory: [this.inventoryItem ? this.inventoryItem.productCategory : null],
      enabled: [this.inventoryItem ? this.inventoryItem.enabled : true],
      description: [this.activeTranslation ? this.activeTranslation.description : ''],
      languageCode: [this.translateService.currentLang, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.required]
    });
  }
  loadProduct(id) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      if (id && _this2.organization) {
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        _this2.inventoryItem = yield _this2.productService.getById(id, ['productCategory', 'productType', 'optionGroups', 'optionGroups.options.translations', 'variants', 'tags', 'gallery', 'featuredImage'], {
          organizationId,
          tenantId
        });
        _this2.inventoryStore.activeProduct = _this2.inventoryItem;
      }
      _this2.tags = _this2.inventoryItem ? _this2.inventoryItem.tags : [];
      _this2.setTranslationSettings();
      _this2._initializeForm();
      _this2.inventoryStore.initVariantCreateInputs();
      _this2.form.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(_this2)).subscribe(() => {
        _this2.updateTranslations();
      });
    })();
  }
  /**
   * When product types selectors loaded in DOM
   *
   * @param productTypes
   */
  onLoadProductTypes(productTypes) {
    if (!this.inventoryStore.productTypesLoaded) {
      this.inventoryStore.productTypes = productTypes;
    }
  }
  /**
   * When product type is selected in DOM
   *
   * @param productType
   */
  selectedProductType(productType) {
    this.form.get('productType').setValue(productType);
    this.form.get('productType').updateValueAndValidity();
  }
  /**
   * When product categories selectors loaded in DOM
   *
   * @param productCategories
   */
  onLoadProductCategories(productCategories) {
    if (!this.inventoryStore.productCategoriesLoaded) {
      this.inventoryStore.productCategories = productCategories;
    }
  }
  /**
   * When product category is selected in DOM
   *
   * @param productCategory
   */
  selectedProductCategory(productCategory) {
    this.form.get('productCategory').setValue(productCategory);
    this.form.get('productCategory').updateValueAndValidity();
  }
  onSaveRequest() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      if (!_this3.organization) {
        return;
      }
      const {
        id: organizationId
      } = _this3.organization;
      const {
        tenantId
      } = _this3.store.user;
      const productRequest = {
        tags: _this3.form.get('tags').value,
        translations: _this3.translations,
        code: _this3.form.get('code').value,
        featuredImage: _this3.inventoryStore.featuredImage || null,
        productTypeId: _this3.form.get('productTypeId').value,
        productCategoryId: _this3.form.get('productCategoryId').value,
        enabled: _this3.form.get('enabled').value,
        optionGroupUpdateInputs: _this3.inventoryStore.updateOptionGroups,
        optionGroupCreateInputs: _this3.inventoryStore.createOptionGroups,
        optionGroupDeleteInputs: _this3.inventoryStore.deletedOptionGroups,
        optionDeleteInputs: _this3.inventoryStore.deleteOptions,
        gallery: _this3.inventoryStore.gallery || [],
        category: _this3.form.get('productCategory').value,
        type: _this3.form.get('productType').value,
        tenantId: tenantId,
        organizationId: organizationId
      };
      if (_this3.inventoryItem) {
        productRequest['id'] = _this3.inventoryItem.id;
      }
      try {
        let productResult;
        if (!productRequest['id']) {
          productResult = yield _this3.productService.create(productRequest);
        } else {
          productResult = yield _this3.productService.update(productRequest);
        }
        yield _this3.productVariantService.createProductVariants({
          product: productResult,
          optionCombinations: _this3.inventoryStore.createOptionCombinations
        });
        _this3.inventoryStore.resetDeletedOptions();
        _this3.inventoryStore.resetCreateVariants();
        yield _this3.loadProduct(productResult.id).then(() => {
          _this3.router.navigate([`/pages/organization/inventory/edit/${_this3.inventoryItem.id}`]);
          _this3.toastrService.success('INVENTORY_PAGE.INVENTORY_ITEM_SAVED', {
            name: _this3.activeTranslation.name
          });
        });
      } catch (err) {
        _this3.toastrService.danger('TOASTR.MESSAGE.SOMETHING_BAD_HAPPENED');
      }
    })();
  }
  onLangChange(langCode) {
    this.selectedLanguage = langCode;
    this.setActiveTranslation();
    this.form.patchValue({
      name: this.activeTranslation.name,
      description: this.activeTranslation.description
    });
  }
  setTranslationSettings() {
    this.selectedLanguage = this.translateService.currentLang || this.store.preferredLanguage || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .LanguagesEnum */ .TR.ENGLISH;
    this.translations = this.inventoryItem ? this.inventoryItem.translations : [];
    this.setActiveTranslation();
  }
  setActiveTranslation() {
    this.activeTranslation = this.translations.find(tr => {
      return tr.languageCode === this.selectedLanguage;
    });
    if (!this.activeTranslation && this.organization) {
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      this.activeTranslation = {
        languageCode: this.selectedLanguage,
        name: '',
        description: '',
        organizationId,
        tenantId
      };
      this.translations.push(this.activeTranslation);
    }
  }
  updateTranslations() {
    this.activeTranslation.name = this.form.get('name').value;
    this.activeTranslation.description = this.form.get('description').value;
  }
  handleImageUploadError(error) {
    this.toastrService.danger(error.error.message || error.message);
  }
  onCancel() {
    this.location.back();
  }
  selectedTagsEvent(currentSelection) {
    this.form.get('tags').setValue(currentSelection);
  }
  isActive(tab) {
    if (!this.inventoryStore.activeTab) {
      return tab.tabTitle == 'Main';
    } else {
      return this.inventoryStore.activeTab.tabTitle == tab.tabTitle;
    }
  }
  onChangeTab(tab) {
    this.inventoryStore.activeTab = tab;
  }
  static {
    this.ɵfac = function ProductFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ProductService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .Location */ .aZ), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ProductVariantService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .InventoryStore */ .y));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ProductFormComponent,
      selectors: [["ngx-product-form"]],
      viewQuery: function ProductFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .GBs(_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .GBs(_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .GBs(_c3, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.inventoryTabset = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.mainTab = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.optionsTab = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.variantsTab = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 40,
      vars: 25,
      consts: [["inventoryTabset", ""], ["mainTab", ""], ["optionsTab", ""], ["variantsTab", ""], [1, "main"], [1, "d-flex"], [1, "row", "h-100"], [1, "col-md-3", "product-photo-container"], [1, "d-flex", "align-self-start"], [1, "product-container"], [1, "d-flex", "align-self-end"], ["status", "danger", "outline", "", "nbButton", "", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"], [1, "col-md-9"], [3, "changeTab"], [3, "tabTitle", "active"], [1, ""], ["class", "mb-4", 3, "formGroup", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "mb-4", 3, "formGroup"], [1, "form-group"], [1, "row", "mb-3"], [1, "col-sm-7"], ["for", "lang", 1, "label"], ["size", "medium", "template", "ng-select", "formControlName", "languageCode", 1, "d-block", 3, "selectedLanguageEvent", "placeholder"], ["for", "name", 1, "label"], ["fullWidth", "", "id", "name", "type", "text", "nbInput", "", "formControlName", "name", 3, "placeholder", "ngClass"], [4, "ngIf"], [1, "col-sm-5"], ["for", "codeInput", 1, "label"], ["fullWidth", "", "id", "codeInput", "type", "text", "nbInput", "", "formControlName", "code", 3, "placeholder", "ngClass"], ["formControlName", "productTypeId", 3, "onLoaded", "onChanged", "placeholder", "addTag"], ["formControlName", "productCategoryId", 3, "onLoaded", "onChanged", "placeholder", "addTag"], ["for", "description", 1, "label"], ["formControlName", "description", "nbInput", "", "fullWidth", "", "id", "description", 3, "placeholder", "ngClass"], ["formControlName", "enabled"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function ProductFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(3, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body")(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(11, "ngx-product-gallery");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(12, "div", 10)(13, "nb-card-footer")(14, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function ProductFormComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.onCancel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(17, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function ProductFormComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.onSaveRequest());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(20, "div", 13)(21, "nb-tabset", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("changeTab", function ProductFormComponent_Template_nb_tabset_changeTab_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.onChangeTab($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(23, "nb-tab", 15, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(26, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(27, ProductFormComponent_form_27_Template, 45, 47, "form", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(28, "nb-tab", 15, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(31, "ngx-options-form");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(32, "div", 18)(33, "div", 19)(34, "ga-tags-color-input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function ProductFormComponent_Template_ga_tags_color_input_selectedTagsEvent_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsEvent($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(35, "nb-tab", 15, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(38, "ngx-variant-form")(39, "ngx-variant-table");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
        }
        if (rf & 2) {
          const mainTab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(24);
          const optionsTab_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(29);
          const variantsTab_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(5, 13, ctx.inventoryItem ? "INVENTORY_PAGE.EDIT_INVENTORY_ITEM" : "INVENTORY_PAGE.ADD_INVENTORY_ITEM"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(16, 15, "BUTTONS.CANCEL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form && ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(19, 17, "BUTTONS.SAVE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(25, 19, "ORGANIZATIONS_PAGE.MAIN"))("active", ctx.isActive(mainTab_r4));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(30, 21, "ORGANIZATIONS_PAGE.TAGS_OPTIONS"))("active", ctx.isActive(optionsTab_r5));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.tags)("isOrgLevel", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(37, 23, "ORGANIZATIONS_PAGE.VARIANTS"))("active", ctx.isActive(variantsTab_r6));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbTabsetComponent */ .Hsi, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbTabComponent */ .d3K, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_20__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_21__/* .TagsColorInputComponent */ .i, _packages_ui_core_shared_src_lib_language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_22__/* .LanguageSelectorComponent */ .t, _packages_ui_core_shared_src_lib_product_product_type_selector_product_type_selector_component__WEBPACK_IMPORTED_MODULE_23__/* .ProductTypeSelectorComponent */ .C, _packages_ui_core_shared_src_lib_product_product_category_selector_product_category_selector_component__WEBPACK_IMPORTED_MODULE_24__/* .ProductCategorySelectorComponent */ .W, _options_form_options_form_component__WEBPACK_IMPORTED_MODULE_0__/* .OptionsFormComponent */ ._Z, _product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_1__/* .ProductGalleryComponent */ .d, _variant_form_variant_form_component__WEBPACK_IMPORTED_MODULE_2__/* .VariantFormComponent */ .L, _variant_table_variant_table_component__WEBPACK_IMPORTED_MODULE_3__/* .VariantTableComponent */ .l, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.d-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  align-content: flex-end;\n}\n\n.options-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.option-delete[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 5px;\n}\n.option-delete[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  padding-bottom: 2px;\n}\n\n.option[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 12px;\n  background: #3366ff;\n  border-radius: 7px;\n  color: #fff;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  max-width: 100%;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\nng-option[_ngcontent-%COMP%] {\n  z-index: 200;\n}\n\n.variants-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow-y: visible;\n  height: 100%;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  overflow-y: visible;\n  margin-bottom: 0px;\n}\n\nnb-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  padding: 0 24px;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.product-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.product-photo-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.product-photo-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  bottom: 0;\n}\n\n.product-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: white;\n  overflow: hidden;\n  position: relative;\n}\n.product-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.product-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.product-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n.product-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\nnb-tab[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: 0 0 var(--border-radius) var(--border-radius);\n}\nnb-tab.content-active[_ngcontent-%COMP%] {\n  margin: 0 -1.5rem -1rem 0;\n  height: calc(100vh - 17rem);\n  border-radius: 0 0 var(--border-radius) 0;\n}\nnb-tab[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \nnb-tab[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \nnb-tab[_ngcontent-%COMP%]     .ng-select .ng-select-container, \nnb-tab[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \nnb-tab[_ngcontent-%COMP%]   ga-location-form[_ngcontent-%COMP%]     input {\n  background-color: var(--gauzy-card-1);\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}"]
    });
  }
};
ProductFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ProductService */ .b, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .Location */ .aZ, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ProductVariantService */ .M, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .InventoryStore */ .y])], ProductFormComponent);


/***/ }),

/***/ 71922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);


let InventoryComponent = /*#__PURE__*/(() => {
  class InventoryComponent {
    static {
      this.ɵfac = function InventoryComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InventoryComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InventoryComponent,
        selectors: [["ga-inventory-layout-selector"]],
        standalone: false,
        decls: 2,
        vars: 0,
        consts: [[1, "content"]],
        template: function InventoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterOutlet */ .n3],
        encapsulation: 2
      });
    }
  }
  return InventoryComponent;
})();

/***/ }),

/***/ 72293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ MerchantTableComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9620);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36950);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(95126);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55101);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52369);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25152);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(57761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(79475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(67063);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(3456);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(49517);






























const _c0 = ["actionButtons"];
const _c1 = () => ["ORG_INVENTORY_VIEW", "ORG_INVENTORY_PRODUCT_EDIT"];
function MerchantTableComponent_ng_template_11_ng_template_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function MerchantTableComponent_ng_template_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 10)(1, "angular2-smart-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function MerchantTableComponent_ng_template_11_ng_template_0_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectStore($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, MerchantTableComponent_ng_template_11_ng_template_0_ng_container_3_Template, 2, 1, "ng-container", 13);
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
function MerchantTableComponent_ng_template_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function MerchantTableComponent_ng_template_11_ng_template_1_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectStore($event));
    })("scroll", function MerchantTableComponent_ng_template_11_ng_template_1_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.merchants);
  }
}
function MerchantTableComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, MerchantTableComponent_ng_template_11_ng_template_0_Template, 4, 3, "ng-template", 9)(1, MerchantTableComponent_ng_template_11_ng_template_1_Template, 1, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const gridLayout_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === ctx_r1.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r4);
  }
}
function MerchantTableComponent_ng_template_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function MerchantTableComponent_ng_template_12_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onAddStoreClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function MerchantTableComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, MerchantTableComponent_ng_template_12_ng_template_0_Template, 4, 3, "ng-template", 16);
  }
}
function MerchantTableComponent_ng_template_14_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r6 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.VIEW"), " ");
  }
}
function MerchantTableComponent_ng_template_14_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function MerchantTableComponent_ng_template_14_ng_container_0_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEditStore(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function MerchantTableComponent_ng_template_14_ng_container_0_ng_template_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onDelete(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r6 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r6 && ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "BUTTONS.DELETE"));
  }
}
function MerchantTableComponent_ng_template_14_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, MerchantTableComponent_ng_template_14_ng_container_0_ng_template_2_Template, 4, 4, "ng-template", 8)(3, MerchantTableComponent_ng_template_14_ng_container_0_ng_template_3_Template, 7, 8, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
}
function MerchantTableComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, MerchantTableComponent_ng_template_14_ng_container_0_Template, 4, 0, "ng-container", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(1, _c1));
  }
}
let MerchantTableComponent = class MerchantTableComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(translateService, router, http, toastrService, merchantService, store, dialogService) {
    super(translateService);
    this.translateService = translateService;
    this.router = router;
    this.http = http;
    this.toastrService = toastrService;
    this.merchantService = merchantService;
    this.store = store;
    this.dialogService = dialogService;
    this.loading = false;
    this.merchants = [];
    this.disableButton = true;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    this.merchants$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
    this.setView();
  }
  ngOnInit() {
    this._applyTranslationOnSmartTable();
    this._loadSmartTableSettings();
  }
  ngAfterViewInit() {
    this.merchants$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.getMerchants()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.merchants$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    const storeOrganization$ = this.store.selectedOrganization$;
    storeOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(300), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.merchants$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.merchants = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.MERCHANTS;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.merchants = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.merchants$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadSmartTableSettings() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      const pagination = _this.getPagination();
      _this.settingsSmartTable = {
        actions: false,
        editable: true,
        selectedRowIndex: -1,
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        noDataMessage: _this.getTranslation('SM_TABLE.NO_DATA.MERCHANT'),
        columns: {
          name: {
            title: _this.getTranslation('INVENTORY_PAGE.NAME'),
            type: 'custom',
            renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_11__/* .ItemImgTagsComponent */ .j,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            },
            filter: {
              type: 'custom',
              component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
            },
            filterFunction: name => {
              _this.setFilter({
                field: 'name',
                search: name
              });
            }
          },
          code: {
            title: _this.getTranslation('INVENTORY_PAGE.CODE'),
            type: 'string',
            filter: {
              type: 'custom',
              component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
            },
            filterFunction: code => {
              _this.setFilter({
                field: 'code',
                search: code
              });
            }
          },
          contact: {
            title: _this.getTranslation('INVENTORY_PAGE.CONTACT'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_13__/* .ContactRowComponent */ .a,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getRawValue();
            }
          },
          description: {
            title: _this.getTranslation('INVENTORY_PAGE.DESCRIPTION'),
            type: 'string',
            isFilterable: false,
            valuePrepareFunction: value => value ? value.slice(0, 15) + '...' : ''
          },
          active: {
            title: _this.getTranslation('INVENTORY_PAGE.ACTIVE'),
            type: 'custom',
            width: '5%',
            isFilterable: false,
            renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_14__/* .EnabledStatusComponent */ .j,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          }
        }
      };
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  onAddStoreClick() {
    this.router.navigate(['/pages/organization/inventory/merchants/create']);
  }
  onEditStore(selectedItem) {
    if (selectedItem) {
      this.selectStore({
        isSelected: true,
        data: selectedItem
      });
    }
    this.router.navigate([`/pages/organization/inventory/merchants/edit`, this.selectedMerchant.id]);
  }
  onDelete(selectedItem) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this2.selectStore({
          isSelected: true,
          data: selectedItem
        });
      }
      if (!_this2.selectedMerchant) {
        return;
      }
      const dialog = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(_this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .DeleteConfirmationComponent */ .u).onClose);
      if (dialog) {
        yield _this2.merchantService.delete(_this2.selectedMerchant.id).then(res => {
          if (res && res['affected'] == 1) {
            const {
              name
            } = _this2.selectedMerchant;
            _this2.toastrService.success('INVENTORY_PAGE.MERCHANT_DELETED_SUCCESSFULLY', {
              name
            });
          }
        }).finally(() => {
          _this2._refresh$.next(true);
          _this2.merchants$.next(true);
        });
      }
    })();
  }
  /*
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    try {
      this.loading = true;
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ServerDataSource */ .N(this.http, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__/* .API_PREFIX */ .m4}/merchants/pagination`,
        relations: ['logo', 'contact', 'tags', 'warehouses'],
        where: {
          organizationId,
          tenantId,
          ...(this.filters.where ? this.filters.where : {})
        },
        resultMap: warehouse => {
          return Object.assign({}, warehouse);
        },
        finalize: () => {
          if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            this.merchants.push(...this.smartTableSource.getData());
          }
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          this.loading = false;
        }
      });
    } catch (error) {
      this.loading = false;
      this.toastrService.danger(error);
    }
  }
  /**
   * GET merchants smart table source
   */
  getMerchants() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      if (!_this3.organization) {
        return;
      }
      try {
        _this3.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this3.getPagination();
        _this3.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this3.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          yield _this3.smartTableSource.getElements();
        }
      } catch (error) {
        _this3.toastrService.danger(error);
      }
    })();
  }
  selectStore({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedMerchant = isSelected ? data : null;
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectStore({
      isSelected: false,
      data: null
    });
  }
  static {
    this.ɵfac = function MerchantTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MerchantTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_20__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_21__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .MerchantService */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: MerchantTableComponent,
      selectors: [["ga-merchant-table"]],
      viewQuery: function MerchantTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.actionButtons = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 16,
      vars: 8,
      consts: [["visibleButton", ""], ["actionButtons", ""], ["gridLayout", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [1, "gauzy-button-container"], [3, "buttonTemplate", "componentName", "buttonTemplateVisible", "isDisable"], ["ngxPermissionsOnly", "ORG_INVENTORY_VIEW"], [3, "ngIf", "ngIfElse"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], ["ngxPermissionsOnly", "ORG_INVENTORY_PRODUCT_EDIT"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], [4, "ngxPermissionsOnly"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "disabled"], ["icon", "eye-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function MerchantTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4)(2, "div", 5)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "ngx-gauzy-button-action", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, MerchantTableComponent_ng_template_11_Template, 3, 2, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, MerchantTableComponent_ng_template_12_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(14, MerchantTableComponent_ng_template_14_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const visibleButton_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(13);
          const actionButtons_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 6, "INVENTORY_PAGE.MERCHANTS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r9)("componentName", ctx.viewComponentName)("buttonTemplateVisible", visibleButton_r8)("isDisable", ctx.disableButton);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_26__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_28__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_29__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_30__/* .UnderConstructionDirective */ .r, angular2_smart_table__WEBPACK_IMPORTED_MODULE_31__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_32__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_33__/* .PaginationV2Component */ .a, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_34__/* .CardGridComponent */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[_ngcontent-%COMP%] {\n  background-color: #0088fe;\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: rgb(37, 184, 105);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.primary[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%], \n.action.primary[_ngcontent-%COMP%]   .appearance-filled.status-basic[nbButtonToggle][_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n[_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0 1px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}"]
    });
  }
};
MerchantTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_35__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_35__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_20__/* .Router */ .Ix, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__/* .HttpClient */ .Qq, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .MerchantService */ .A, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .il, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W])], MerchantTableComponent);


/***/ }),

/***/ 74711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ WarehouseFormResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90010);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94923);





/**
 * Resolver function to fetch warehouse details by ID before route activation.
 *
 * @param route - The activated route snapshot.
 * @returns An observable containing warehouse details or an empty observable on error.
 */
const WarehouseFormResolver = route => {
  // Injecting required services
  const warehouseService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .WarehouseService */ .z);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .Ix);
  // Extract warehouse ID from route parameters
  const warehouseId = route.params['id'];
  // If no warehouse ID is provided, return an empty observable
  if (!warehouseId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
  }
  // Fetch warehouse details by ID with relations and handle errors
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .from */ .H)(warehouseService.getById(warehouseId, ['logo', 'contact', 'tags'])).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(() => {
    // Redirect to the warehouses page in case of an error
    router.navigate(['/pages/organization/inventory/warehouses']);
    return rxjs__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY */ .w;
  }));
};

/***/ }),

/***/ 77041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MerchantModule: () => (/* binding */ MerchantModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43629);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48052);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9669);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61444);
/* harmony import */ var _merchant_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92864);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);









const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogModule */ .nZv, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbStepperModule */ .QyE, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTooltipModule */ .IB0];
let MerchantModule = /*#__PURE__*/(() => {
  class MerchantModule {
    static {
      this.ɵfac = function MerchantModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MerchantModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .$C({
        type: MerchantModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [NB_MODULES, ngx_permissions__WEBPACK_IMPORTED_MODULE_3__/* .NgxPermissionsModule */ .Ov.forChild(), _merchant_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .MerchantRoutingModule */ .f, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyModule */ .C, _inventory_table_components__WEBPACK_IMPORTED_MODULE_9__/* .InventoryTableComponentsModule */ .B, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .LeafletMapModule */ .q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .LocationFormModule */ .C, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .TagsColorInputModule */ .x]
      });
    }
  }
  return MerchantModule;
})();

/***/ }),

/***/ 79455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ImageUploaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29087);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14572);












let ImageUploaderComponent = /*#__PURE__*/(() => {
  let ImageUploaderComponent = class ImageUploaderComponent {
    get styles() {
      return this._styles;
    }
    set styles(styles) {
      this._styles = styles;
    }
    get folder() {
      return this._folder;
    }
    set folder(value) {
      this._folder = value;
    }
    constructor(store) {
      this.store = store;
      /*
       * Getter & Setter for dynamic file uploader style element
       */
      this._styles = {
        width: '100%',
        opacity: '0',
        position: 'absolute',
        zIndex: 3,
        cursor: 'pointer'
      };
      /*
       * Getter & Setter for dynamic image upload folder
       */
      this._folder = 'profile_pictures';
      this.changeHoverState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.uploadedImageAsset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.uploadImageAssetError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._loadUploaderSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      if (!this.uploader) {
        return;
      }
      this.uploader.onAfterAddingFile = file => {
        file.withCredentials = false;
      };
      this.uploader.onSuccessItem = (item, response, status) => {
        try {
          if (response) {
            const image = JSON.parse(response);
            this.uploadedImageAsset.emit(image);
          }
        } catch (error) {
          console.log('Error while uploaded image url', error);
        }
      };
      this.uploader.onErrorItem = (item, response, status) => {
        try {
          if (response) {
            const error = JSON.parse(response);
            this.uploadImageAssetError.emit(error);
          }
        } catch (error) {
          console.log('Error while uploaded image url error', error);
        }
      };
    }
    /**
     * Image asset upload handler
     */
    imageUploadHandler() {
      if (this.uploader.queue.length > 0) {
        this.uploader.queue[this.uploader.queue.length - 1].upload();
      }
    }
    /**
     * Load settings for the file uploader, including headers and additional form data.
     *
     * @returns void
     */
    _loadUploaderSettings() {
      if (!this.user) {
        return;
      }
      const token = this.store.token;
      const tenantId = this.user.tenantId;
      const headers = [];
      headers.push({
        name: 'Authorization',
        value: `Bearer ${token}`
      });
      headers.push({
        name: 'Tenant-Id',
        value: tenantId
      });
      if (!!this.organization) {
        headers.push({
          name: 'Organization-Id',
          value: `${this.organization.id}`
        });
      }
      const uploaderOptions = {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__/* .environment */ .c.API_BASE_URL + `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .API_PREFIX */ .m4}/image-assets/upload/${this.folder}`,
        method: 'POST',
        // XHR request method
        autoUpload: true,
        // Upload files automatically upon addition to upload queue
        isHTML5: true,
        // Use xhrTransport in favor of iframeTransport
        removeAfterUpload: true,
        // Calculate progress independently for each uploaded file
        headers: headers // XHR request headers
      };
      this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileUploader */ .l0(uploaderOptions);
      // Adding additional form data
      this.uploader.onBuildItemForm = (fileItem, form) => {
        if (!!this.store.user.tenantId) {
          form.append('tenantId', tenantId);
        }
        if (!!this.organization) {
          form.append('organizationId', this.organization.id);
        }
      };
    }
    static {
      this.ɵfac = function ImageUploaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImageUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ImageUploaderComponent,
        selectors: [["ngx-image-uploader"]],
        inputs: {
          styles: "styles",
          folder: "folder"
        },
        outputs: {
          changeHoverState: "changeHoverState",
          uploadedImageAsset: "uploadedImageAsset",
          uploadImageAssetError: "uploadImageAssetError"
        },
        standalone: false,
        decls: 1,
        vars: 2,
        consts: [["type", "file", "accept", "image/*", "ng2FileSelect", "", 3, "change", "mouseenter", "mouseleave", "ngStyle", "uploader"]],
        template: function ImageUploaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function ImageUploaderComponent_Template_input_change_0_listener() {
              return ctx.imageUploadHandler();
            })("mouseenter", function ImageUploaderComponent_Template_input_mouseenter_0_listener() {
              return ctx.changeHoverState.emit(true);
            })("mouseleave", function ImageUploaderComponent_Template_input_mouseleave_0_listener() {
              return ctx.changeHoverState.emit(false);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", ctx.styles)("uploader", ctx.uploader);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgStyle */ .B3, ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileSelectDirective */ .UJ],
        styles: ["input[_ngcontent-%COMP%] {\n  height: 100% !important;\n}"]
      });
    }
  };
  ImageUploaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il])], ImageUploaderComponent);
  return ImageUploaderComponent;
})();


/***/ }),

/***/ 80743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ProductTypesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(64411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(45715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72781);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(73607);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89735);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55101);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(79475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(49517);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(3456);



























const _c0 = ["actionButtons"];
function ProductTypesComponent_ng_template_11_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function ProductTypesComponent_ng_template_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 11)(1, "angular2-smart-table", 12, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function ProductTypesComponent_ng_template_11_ng_template_0_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectProductType($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, ProductTypesComponent_ng_template_11_ng_template_0_ng_container_4_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function ProductTypesComponent_ng_template_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function ProductTypesComponent_ng_template_11_ng_template_1_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectProductType($event));
    })("scroll", function ProductTypesComponent_ng_template_11_ng_template_1_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.productTypes);
  }
}
function ProductTypesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProductTypesComponent_ng_template_11_ng_template_0_Template, 5, 3, "ng-template", 10)(1, ProductTypesComponent_ng_template_11_ng_template_1_Template, 1, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const gridLayout_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === ctx_r1.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r4);
  }
}
function ProductTypesComponent_ng_template_12_ng_template_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductTypesComponent_ng_template_12_ng_template_0_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onAdd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function ProductTypesComponent_ng_template_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProductTypesComponent_ng_template_12_ng_template_0_button_0_Template, 4, 3, "button", 18);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.showAddCard);
  }
}
function ProductTypesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProductTypesComponent_ng_template_12_ng_template_0_Template, 1, 1, "ng-template", 17);
  }
}
function ProductTypesComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 21)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductTypesComponent_ng_template_14_ng_template_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEdit(selectedItem_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductTypesComponent_ng_template_14_ng_template_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.delete(selectedItem_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r7 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r7 && ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "BUTTONS.DELETE"));
  }
}
function ProductTypesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProductTypesComponent_ng_template_14_ng_template_0_Template, 8, 8, "ng-template", 17);
  }
}
let ProductTypesComponent = class ProductTypesComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(translateService, http, dialogService, productTypeService, toastrService, store, _errorHandlingService) {
    super(translateService);
    this.translateService = translateService;
    this.http = http;
    this.dialogService = dialogService;
    this.productTypeService = productTypeService;
    this.toastrService = toastrService;
    this.store = store;
    this._errorHandlingService = _errorHandlingService;
    this.loading = false;
    this.disableButton = true;
    this.productTypes = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    this.types$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
    this.setView();
  }
  ngOnInit() {
    this._applyTranslationOnSmartTable();
    this._loadSmartTableSettings();
    this.types$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.getTranslatedProductTypes()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.types$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    const storeOrganization$ = this.store.selectedOrganization$;
    const preferredLanguage$ = this.store.preferredLanguage$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .combineLatest */ .z)([storeOrganization$, preferredLanguage$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(([organization, language]) => !!organization && !!language), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(([organization]) => this.organization = organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.types$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.productTypes = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .ComponentEnum */ .L.PRODUCT_TYPE;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.productTypes = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.types$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadSmartTableSettings() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      const pagination = _this.getPagination();
      _this.settingsSmartTable = {
        actions: false,
        editable: true,
        selectedRowIndex: -1,
        noDataMessage: _this.getTranslation('SM_TABLE.NO_DATA.PRODUCT_TYPE_NO_DATA'),
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        columns: {
          icon: {
            title: _this.getTranslation('INVENTORY_PAGE.ICON'),
            width: '5%',
            isFilterable: false,
            type: 'custom',
            renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_12__/* .IconRowComponent */ .d,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          name: {
            title: _this.getTranslation('INVENTORY_PAGE.NAME'),
            type: 'string',
            width: '40%',
            filter: {
              type: 'custom',
              component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .InputFilterComponent */ .U
            },
            filterFunction: name => {
              _this.setFilter({
                field: 'name',
                search: name
              });
            }
          },
          description: {
            title: _this.getTranslation('INVENTORY_PAGE.DESCRIPTION'),
            type: 'string',
            isFilterable: false
          }
        }
      };
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  onAdd() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (!_this2.organization) {
        return;
      }
      try {
        const dialog = _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .ProductTypeMutationComponent */ .G);
        const productType = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(dialog.onClose);
        if (productType) {
          _this2.toastrService.success('INVENTORY_PAGE.PRODUCT_TYPE_SAVED', {
            name: productType.name
          });
          _this2._refresh$.next(true);
          _this2.types$.next(true);
        }
      } catch (error) {
        console.log('Error while creating product types', error);
      }
    })();
  }
  onEdit(selectedItem) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this3.selectProductType({
          isSelected: true,
          data: selectedItem
        });
      }
      if (!_this3.organization) {
        return;
      }
      try {
        const editProductType = _this3.selectedProductType ? yield _this3.productTypeService.getById(_this3.selectedProductType.id) : null;
        const dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .ProductTypeMutationComponent */ .G, {
          context: {
            productType: editProductType
          }
        });
        const productType = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(dialog.onClose);
        if (productType) {
          let translation = productType.translations[0];
          _this3.toastrService.success('INVENTORY_PAGE.PRODUCT_TYPE_SAVED', {
            name: translation.name
          });
          _this3._refresh$.next(true);
          _this3.types$.next(true);
        }
      } catch (error) {
        console.log('Error while updating product types', error);
      }
    })();
  }
  delete(selectedItem) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      try {
        if (selectedItem) {
          _this4.selectProductType({
            isSelected: true,
            data: selectedItem
          });
        }
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(_this4.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .DeleteConfirmationComponent */ .u).onClose);
        if (result) {
          if (_this4.selectedProductType) {
            yield _this4.productTypeService.delete(_this4.selectedProductType.id).then(() => {
              _this4.toastrService.success('INVENTORY_PAGE.PRODUCT_TYPE_DELETED', {
                name: _this4.selectedProductType.name
              });
            }).finally(() => {
              _this4._refresh$.next(true);
              _this4.types$.next(true);
            });
          }
        }
      } catch (error) {
        _this4._errorHandlingService.handleError(error);
      }
    })();
  }
  selectProductType({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedProductType = isSelected ? data : null;
  }
  /**
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    try {
      this.loading = true;
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ServerDataSource */ .N(this.http, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__/* .API_PREFIX */ .m4}/product-types/pagination`,
        relations: [],
        where: {
          ...{
            organizationId,
            tenantId
          },
          ...this.filters.where
        },
        resultMap: item => {
          return Object.assign({}, item);
        },
        finalize: () => {
          if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            this.productTypes.push(...this.smartTableSource.getData());
          }
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          this.loading = false;
        }
      });
    } catch (error) {
      this._errorHandlingService.handleError(error);
      this.loading = false;
    }
  }
  /**
   * GET product types smart table source
   */
  getTranslatedProductTypes() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (!_this5.organization) {
        return;
      }
      try {
        _this5.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this5.getPagination();
        _this5.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this5.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          yield _this5.smartTableSource.getElements();
        }
      } catch (error) {
        _this5.toastrService.danger(error);
      }
    })();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectProductType({
      isSelected: false,
      data: null
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ProductTypesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_20__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ProductTypeService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ProductTypesComponent,
      selectors: [["ngx-product-types"]],
      viewQuery: function ProductTypesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.actionButtons = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 16,
      vars: 8,
      consts: [["visibleButton", ""], ["actionButtons", ""], ["gridLayout", ""], ["productTypesTable", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [1, "gauzy-button-container"], [3, "buttonTemplate", "componentName", "buttonTemplateVisible", "isDisable"], ["ngxPermissionsOnly", "ORG_PRODUCT_TYPES_VIEW"], [3, "ngIf", "ngIfElse"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], ["ngxPermissionsOnly", "ORG_PRODUCT_TYPES_EDIT"], ["nbButton", "", "status", "success", "class", "action", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function ProductTypesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "div", 6)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "ngx-gauzy-button-action", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, ProductTypesComponent_ng_template_11_Template, 3, 2, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, ProductTypesComponent_ng_template_12_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(14, ProductTypesComponent_ng_template_14_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const visibleButton_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(13);
          const actionButtons_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 6, "INVENTORY_PAGE.PRODUCT_TYPES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r9)("componentName", ctx.viewComponentName)("buttonTemplateVisible", visibleButton_r8)("isDisable", ctx.disableButton);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_26__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_28__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_29__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_30__/* .CardGridComponent */ .c, angular2_smart_table__WEBPACK_IMPORTED_MODULE_31__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_32__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_33__/* .PaginationV2Component */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[_ngcontent-%COMP%] {\n  background-color: #0088fe;\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: rgb(37, 184, 105);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.primary[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%], \n.action.primary[_ngcontent-%COMP%]   .appearance-filled.status-basic[nbButtonToggle][_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n[_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0 1px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}"]
    });
  }
};
ProductTypesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_34__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_34__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslateService */ .c$, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__/* .HttpClient */ .Qq, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ProductTypeService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .ErrorHandlingService */ .X])], ProductTypesComponent);


/***/ }),

/***/ 81686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductTypesModule: () => (/* binding */ ProductTypesModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49624);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _product_types_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);









let ProductTypesModule = /*#__PURE__*/(() => {
  class ProductTypesModule {
    static {
      this.ɵfac = function ProductTypesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProductTypesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProductTypesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, ngx_permissions__WEBPACK_IMPORTED_MODULE_3__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _product_types_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ProductTypesRoutingModule */ .d, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .ProductMutationModule */ .r, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .TableComponentsModule */ .p]
      });
    }
  }
  return ProductTypesModule;
})();

/***/ }),

/***/ 82661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _Z: () => (/* binding */ OptionsFormComponent)
/* harmony export */ });
/* unused harmony exports OptionLevel, OptionFormFields */
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81236);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98672);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52843);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54983);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79475);



















const _c0 = (a0, a1) => ({
  optionGroup: a0,
  idxGroup: a1
});
const _c1 = a0 => ({
  active: a0
});
const _c2 = a0 => ({
  "active-group": a0
});
const _c3 = a0 => ({
  option: a0
});
function OptionsFormComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 10)(2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function OptionsFormComponent_ng_container_6_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onCreateOptionGroupClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "INVENTORY_PAGE.NEW_OPTION_GROUP"), " ");
  }
}
function OptionsFormComponent_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function OptionsFormComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, OptionsFormComponent_ng_container_9_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const optionGroup_r3 = ctx.$implicit;
    const idxGroup_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const optionGroupTemplate_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", optionGroupTemplate_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(2, _c0, optionGroup_r3, idxGroup_r4));
  }
}
function OptionsFormComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function OptionsFormComponent_ng_template_10_Template_div_click_0_listener() {
      const optionData_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6).option;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.setActiveOption(optionData_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 14)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "span", 16)(5, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function OptionsFormComponent_ng_template_10_Template_nb_icon_click_5_listener() {
      const optionData_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6).option;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onDeleteOption(optionData_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const optionData_r7 = ctx.option;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(3, _c1, ctx_r1.isActiveOption(optionData_r7)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", optionData_r7 == null ? null : optionData_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", optionData_r7 == null ? null : optionData_r7.code, " ");
  }
}
function OptionsFormComponent_ng_template_12_div_0_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function OptionsFormComponent_ng_template_12_div_0_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, OptionsFormComponent_ng_template_12_div_0_ng_container_20_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    const optionRowTemplate_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", optionRowTemplate_r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c3, option_r10));
  }
}
function OptionsFormComponent_ng_template_12_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 24)(5, "div", 25)(6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 30)(13, "div", 31)(14, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function OptionsFormComponent_ng_template_12_div_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const optionGroupData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().optionGroup;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onTranslateOptionClick(optionGroupData_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function OptionsFormComponent_ng_template_12_div_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onCreateOptionClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function OptionsFormComponent_ng_template_12_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const optionGroupData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().optionGroup;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onDeleteOptionGroupClick(optionGroupData_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(19, "nb-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(20, OptionsFormComponent_ng_template_12_div_0_ng_container_20_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const optionGroupData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().optionGroup;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(11, _c2, ctx_r1.isActive(optionGroupData_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 5, "INVENTORY_PAGE.OPTION_GROUP_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 7, "INVENTORY_PAGE.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 9, "INVENTORY_PAGE.CODE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", optionGroupData_r9.options);
  }
}
function OptionsFormComponent_ng_template_12_div_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function OptionsFormComponent_ng_template_12_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, OptionsFormComponent_ng_template_12_div_1_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    const optionRowTemplate_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", optionRowTemplate_r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c3, option_r13));
  }
}
function OptionsFormComponent_ng_template_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function OptionsFormComponent_ng_template_12_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const optionGroupData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().optionGroup;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.setActiveOptionGroup($event, optionGroupData_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 22)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, OptionsFormComponent_ng_template_12_div_1_ng_container_6_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const optionGroupData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().optionGroup;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(optionGroupData_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", optionGroupData_r9.options);
  }
}
function OptionsFormComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, OptionsFormComponent_ng_template_12_div_0_Template, 21, 13, "div", 19)(1, OptionsFormComponent_ng_template_12_div_1_Template, 7, 2, "div", 20);
  }
  if (rf & 2) {
    const optionGroupData_r9 = ctx.optionGroup;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.isActive(optionGroupData_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.isActive(optionGroupData_r9));
  }
}
var OptionLevel = /*#__PURE__*/function (OptionLevel) {
  OptionLevel["SINGLE"] = "SINGLE";
  OptionLevel["GROUP"] = "GROUP";
  return OptionLevel;
}(OptionLevel || {});
var OptionFormFields = /*#__PURE__*/function (OptionFormFields) {
  OptionFormFields["All"] = "ALL";
  OptionFormFields["OPTION"] = "OPTION";
  OptionFormFields["OPTION_GROUP"] = "OPTION_GROUP";
  return OptionFormFields;
}(OptionFormFields || {});
let OptionsFormComponent = class OptionsFormComponent {
  onClick(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.activeOptionGroup = this.getEmptyOptionGroup();
      this.activeOption = this.getEmptyOption();
    }
  }
  constructor(dialogService, inventoryStore, fb, store, translateService, eRef) {
    this.dialogService = dialogService;
    this.inventoryStore = inventoryStore;
    this.fb = fb;
    this.store = store;
    this.translateService = translateService;
    this.eRef = eRef;
    this.optionMode = 'create';
    this.options = [];
    this.activeOptionGroup = null;
    this.activeOption = {};
    this.activeLanguageCode = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .LanguagesEnum */ .TR.ENGLISH;
    this.optionGroups = [];
    this.getEmptyOptionGroup = () => {
      return {
        name: 'new option group',
        options: [],
        translations: [],
        formOptionGroupId: this.generateUniqueId()
      };
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
      _this.initForm();
      _this.form.controls['activeOptionGroupName'].valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(_this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChanged */ .F)()).subscribe(value => {
        _this.updateActiveOptionGroupName(value);
      });
      _this.form.controls['activeOptionName'].valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(_this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChanged */ .F)()).subscribe(value => {
        _this.updateActiveOptionName(value);
      });
      _this.form.controls['activeOptionCode'].valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(_this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChanged */ .F)()).subscribe(value => {
        _this.updateActiveOptionCode(value);
      });
      _this.inventoryStore.activeProduct$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(_this), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(500)).subscribe(activeProduct => {
        _this.optionGroups = activeProduct.optionGroups || [];
        if (activeProduct.optionGroups) {
          _this.optionGroups = activeProduct.optionGroups.map((optionGroup, i) => {
            return {
              ...optionGroup,
              formOptionGroupId: _this.generateUniqueId(),
              options: optionGroup.options.map((option, k) => {
                return {
                  ...option,
                  formOptionId: option.code + _this.generateUniqueId()
                };
              })
            };
          });
        } else {
          _this.optionGroups = [];
        }
        _this.inventoryStore.optionGroups = _this.optionGroups;
      });
      _this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(_this)).subscribe(language => {
        _this.activeLanguageCode = language.lang;
        _this.resetActiveTranslations();
        _this.activeOptionGroup = null;
        _this.activeOption = _this.getEmptyOption();
        _this.resetActiveTranslations();
      });
    })();
  }
  onSaveOption() {}
  onTranslateOptionClick(optionGroupData) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
      const dialog = _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .ProductOptionGroupTranslationsComponent */ .n, {
        context: {
          productOptionGroup: optionGroupData
        }
      });
      let result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(dialog.onClose);
      if (result) {
        _this2.activeOptionGroup = result;
        _this2.updateOptionGroupInStore();
      }
    })();
  }
  onCreateOptionGroupClick() {
    let newOptionGroup = this.getEmptyOptionGroup();
    this.activeOptionGroup = newOptionGroup;
    this.activeOption = this.getEmptyOption();
    this.resetFormValue(OptionFormFields.All);
    this.optionGroups.splice(0, 0, newOptionGroup);
  }
  onDeleteOptionGroupClick(optionGroupDeleted) {
    optionGroupDeleted.options.forEach(option => {
      this.onDeleteOption(option);
    });
    this.optionGroups = this.optionGroups.filter(optionGroup => optionGroup.formOptionGroupId !== optionGroupDeleted.formOptionGroupId);
    this.inventoryStore.addDeletedOptionGroup(optionGroupDeleted);
    this.updateOptionGroupInStore();
  }
  onCreateOptionClick() {
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.store.selectedOrganization;
    if (!this.activeOptionGroup) return;
    let formValue = this.form.value;
    if (!formValue.activeOptionName || !formValue.activeOptionCode) return;
    let newOption = {
      formOptionId: this.generateUniqueId(),
      name: formValue['activeOptionName'],
      code: formValue['activeOptionCode'],
      organizationId,
      tenantId,
      translations: [{
        name: formValue['activeOptionName'],
        languageCode: this.activeLanguageCode || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .LanguagesEnum */ .TR.ENGLISH,
        description: ''
      }]
    };
    this.activeOptionGroup.options.splice(0, 0, newOption);
    this.activeOption = this.getEmptyOption();
    this.resetFormValue(OptionFormFields.OPTION);
    this.updateOptionGroupInStore();
  }
  resetOptionForm() {}
  onEditOption(option) {
    this.editOption = option;
    this.optionMode = 'edit';
  }
  updateActiveOptionGroupName(value) {
    if (this.optionGroups.find(optionGroup => optionGroup.name == value)) {
      this.form.controls['activeOptionGroupName'].setErrors({
        error: 'already group'
      });
      return;
    } else {
      this.form.controls['activeOptionGroupName'].setErrors(null);
    }
    this.activeOptionGroup.name = value;
    this.updateTranslationProperty(this.activeOptionGroup, 'name', OptionLevel.GROUP, value);
    this.updateOptionGroupInStore();
  }
  updateActiveOptionName(value) {
    let checkDuplicateOption = this.activeOptionGroup.options.find(option => option.name == value);
    if (checkDuplicateOption) {
      this.form.controls['activeOptionName'].setErrors({
        error: 'duplicate option'
      });
    } else {
      this.form.controls['activeOptionName'].setErrors(null);
    }
    this.activeOption.name = value;
    this.updateTranslationProperty(this.activeOption, 'name', OptionLevel.SINGLE, value);
  }
  updateActiveOptionCode(value) {
    let checkDuplicateCode = this.activeOptionGroup.options.find(option => option.code == value);
    if (checkDuplicateCode) {
      this.form.controls['activeOptionCode'].setErrors({
        error: 'duplicate code'
      });
    } else {
      this.form.controls['activeOptionCode'].setErrors(null);
    }
    this.activeOption.code = value;
    this.updateTranslationProperty(this.activeOption, 'code', OptionLevel.SINGLE, value);
  }
  updateTranslationProperty(el, property, optionLevel, value) {
    if (!el.translations) return;
    let translation = el.translations.find(translation => translation.languageCode == this.activeLanguageCode);
    if (!translation) {
      switch (optionLevel) {
        case OptionLevel.GROUP:
          translation = {
            languageCode: this.activeLanguageCode,
            name: '',
            description: ''
          };
          break;
        case OptionLevel.SINGLE:
          translation = {
            languageCode: this.activeLanguageCode,
            name: ''
          };
          break;
      }
      el.translations.push(translation);
    }
    if (value) {
      translation[property] = value;
    }
    el[property] = translation[property];
  }
  resetActiveTranslations() {
    this.optionGroups.forEach(group => {
      this.updateTranslationProperty(group, 'name', OptionLevel.GROUP);
      this.updateTranslationProperty(group, 'description', OptionLevel.GROUP);
      group.options.forEach(option => {
        this.updateTranslationProperty(option, 'name', OptionLevel.SINGLE);
      });
    });
  }
  isActive(productOptionGroupInput) {
    if (!productOptionGroupInput || !this.activeOptionGroup) return false;
    return productOptionGroupInput.formOptionGroupId == this.activeOptionGroup.formOptionGroupId;
  }
  setActiveOptionGroup($event, productOptionGroupInput) {
    $event.stopPropagation();
    this.activeOptionGroup = productOptionGroupInput;
    this.activeOption = this.getEmptyOption();
    this.updateFormValue();
  }
  setActiveOption(productOption) {
    if (productOption.formOptionId === this.activeOption.formOptionId) {
      this.activeOption = this.getEmptyOption();
      this.resetFormValue(OptionFormFields.OPTION);
      return;
    }
    this.activeOption = productOption;
    this.updateFormValue();
  }
  isActiveOption(productOption) {
    if (!this.activeOption) return false;
    return productOption.formOptionId == this.activeOption.formOptionId;
  }
  onDeleteOption(productOption) {
    if (!this.activeOptionGroup) return;
    this.activeOptionGroup.options = this.activeOptionGroup.options.filter(option => option.formOptionId !== productOption.formOptionId);
    if (productOption.id) {
      this.inventoryStore.addDeletedOption(productOption);
    }
    this.updateOptionGroupInStore();
  }
  initForm() {
    this.form = this.fb.group({
      activeOptionGroupName: [''],
      activeOptionName: [''],
      activeOptionCode: ['']
    });
  }
  updateOptionGroupInStore() {
    this.inventoryStore.optionGroups = this.optionGroups;
  }
  resetFormValue(formFields = OptionFormFields.All) {
    switch (formFields) {
      case OptionFormFields.All:
        this.form.patchValue({
          activeOptionGroupName: '',
          activeOptionName: '',
          activeOptionCode: ''
        });
        break;
      case OptionFormFields.OPTION:
        this.form.patchValue({
          activeOptionName: '',
          activeOptionCode: ''
        });
        break;
      case OptionFormFields.OPTION_GROUP:
        this.form.patchValue({
          activeOptionGroupName: ''
        });
        break;
    }
  }
  updateFormValue() {
    if (!this.activeOptionGroup || !this.activeOption) return;
    this.form.patchValue({
      activeOptionGroupName: this.activeOptionGroup.name,
      activeOptionName: this.activeOption.name,
      activeOptionCode: this.activeOption.code
    });
  }
  getEmptyOption() {
    return {
      formOptionId: '',
      name: '',
      code: '',
      translations: [{
        name: '',
        languageCode: this.activeLanguageCode,
        description: ''
      }]
    };
  }
  generateUniqueId() {
    let S4 = () => {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
  }
  /**
   * unique id for generated/stored option groups
   */
  generateOptionGroupFormId(optionGroups = this.optionGroups) {
    if (!optionGroups) return 1;
    const lastEl = optionGroups.sort((group1, group2) => group2.formOptionGroupId - group1.formOptionGroupId)[0];
    return lastEl ? lastEl.formOptionGroupId + 1 : 1;
  }
  /**
   * unique id for generated/stored options
   */
  generateOptionId(optionGroup = this.activeOptionGroup) {
    if (!optionGroup.options) return 1;
    const lastEl = optionGroup.options.sort((option1, option2) => option2.formOptionId - option1.formOptionId)[0];
    return lastEl ? optionGroup.name.toString() + lastEl.formOptionId + 1 : optionGroup.name.toString() + 1;
  }
  generateOptionIdsForGroup(optionGroup = this.activeOptionGroup) {
    optionGroup.options = optionGroup.options.map(option => {
      return {
        ...option,
        formOptionId: this.generateUniqueId()
      };
    });
  }
  static {
    this.ɵfac = function OptionsFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OptionsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .InventoryStore */ .y), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: OptionsFormComponent,
      selectors: [["ngx-options-form"]],
      hostBindings: function OptionsFormComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function OptionsFormComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresolveDocument"] */ .EBC);
        }
      },
      standalone: false,
      decls: 14,
      vars: 6,
      consts: [["formGroupElement", ""], ["optionRowTemplate", ""], ["optionGroupTemplate", ""], [1, "form-group"], [1, "label", "label-group"], [1, "row", "mb-3"], [1, "col-md-12"], [4, "ngxPermissionsOnly"], [3, "formGroup"], [4, "ngFor", "ngForOf"], [1, "button-new"], ["status", "basic", "nbButton", "", 1, "", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "row", "mb-2", "p-2", "option-row", 3, "click", "ngClass"], [1, "col-md-2", "d-flex", "pr-1"], ["icon", "edit-outline", 1, "option-row-icon", "edit"], [1, "mr-3", "ml-3"], ["icon", "close-outline", 1, "option-row-icon", "delete", 3, "click"], [1, "col-sm-12", "col-md-5", "mb-1"], ["class", "row mb-2 edit-option-group option-group-form", 3, "ngClass", 4, "ngIf"], ["class", "row mb-2 view-option-group", 3, "click", 4, "ngIf"], [1, "row", "mb-2", "edit-option-group", "option-group-form", 3, "ngClass"], [1, "col-md-3", "col-sm-12"], ["formControlName", "activeOptionGroupName", "fullWidth", "", "type", "text", "nbInput", "", 3, "placeholder"], [1, "col-md-9", "col-sm-12"], [1, "row", "mb-2"], [1, "col-sm-12", "col-md-5"], ["fullWidth", "", "type", "text", "nbInput", "", "formControlName", "activeOptionName", 3, "placeholder"], [1, "col-sm-12", "col-md-4"], ["fullWidth", "", "type", "text", "nbInput", "", "formControlName", "activeOptionCode", 3, "placeholder"], [1, "col-md-3", "d-flex", "justify-content-end"], [1, "btn-group", "actions"], ["nbButton", "", "status", "success", "outline", "", "size", "small", 3, "click"], ["icon", "globe-outline"], [1, "fas", "fa-plus"], ["nbButton", "", "status", "danger", "outline", "", "size", "small", 3, "click"], ["icon", "trash-2-outline"], [1, "row", "mb-2", "view-option-group", 3, "click"], [1, "option-name"], [1, "col-md-9", "option", "col-sm-12"]],
      template: function OptionsFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 5)(5, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, OptionsFormComponent_ng_container_6_Template, 5, 3, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "form", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, OptionsFormComponent_ng_container_9_Template, 2, 5, "ng-container", 9)(10, OptionsFormComponent_ng_template_10_Template, 10, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(12, OptionsFormComponent_ng_template_12_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "INVENTORY_PAGE.OPTIONS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", "ORG_INVENTORY_PRODUCT_EDIT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.optionGroups);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgTemplateOutlet */ .T3, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .FormControlName */ .JD, ngx_permissions__WEBPACK_IMPORTED_MODULE_14__/* .NgxPermissionsDirective */ .f6, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.options-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 20px;\n}\n\n.d-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n.width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.row.text-option[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-basic-300);\n}\n\n.text-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-basic-600);\n}\n.text-option[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.option-row-icon[_ngcontent-%COMP%] {\n  color: var(--color-basic-300);\n}\n\n.option-group-form[_ngcontent-%COMP%] {\n  padding: 2em 0.5em;\n}\n\n.active-group[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  margin: 0;\n  padding: 10px 0 0 0;\n}\n\n.option-row[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-3);\n  border-radius: 4px;\n  margin-right: 0;\n  color: var(--gauzy-text-color-2);\n}\n.option-row[_ngcontent-%COMP%]   .option-row-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.1s all ease-in-out;\n}\n.option-row[_ngcontent-%COMP%]:hover   .option-row-icon.edit[_ngcontent-%COMP%], .option-row.active[_ngcontent-%COMP%]   .option-row-icon.edit[_ngcontent-%COMP%] {\n  color: var(--color-primary-600);\n}\n.option-row[_ngcontent-%COMP%]:hover   .option-row-icon.delete[_ngcontent-%COMP%], .option-row.active[_ngcontent-%COMP%]   .option-row-icon.delete[_ngcontent-%COMP%] {\n  color: var(--color-danger-600);\n}\n\n.btn-group.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-3);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 6px 8px;\n  gap: 10px;\n}\n\n.option-name[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-3);\n  border-radius: 4px;\n  padding: 4px 8px;\n  color: var(--gauzy-text-color-2);\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  border-width: 2px;\n  background-color: unset;\n}\nbutton[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  color: var(--gauzy-text-color-2);\n  border: unset;\n  box-shadow: var(--gauzy-shadow);\n}\nbutton[nbButton].appearance-outline.status-danger[_ngcontent-%COMP%] {\n  border-color: var(--color-danger-transparent-300);\n  background-color: unset;\n  padding: 7px 8px;\n  border-width: 2px;\n}\nbutton[nbButton].appearance-outline.status-success[_ngcontent-%COMP%] {\n  border-color: var(--color-success-transparent-300);\n  background-color: unset;\n  padding: 7px 8px;\n  border-width: 2px;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.button-new[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 6px;\n  border-radius: var(--button-rectangle-border-radius);\n  width: fit-content;\n}"]
    });
  }
};
OptionsFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .InventoryStore */ .y, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT])], OptionsFormComponent);


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

/***/ }),

/***/ 92864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ MerchantRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17785);
/* harmony import */ var _merchant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38270);
/* harmony import */ var _merchant_table_merchant_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72293);
/* harmony import */ var _merchant_form_merchant_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4401);
/* harmony import */ var _merchant_form_merchant_form_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);









const routes = [{
  path: '',
  component: _merchant_component__WEBPACK_IMPORTED_MODULE_2__/* .MerchantComponent */ .O,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.ORG_INVENTORY_VIEW],
      redirectTo: '/pages/dashboard'
    },
    selectors: {
      date: false,
      employee: false,
      project: false
    }
  },
  children: [{
    path: '',
    component: _merchant_table_merchant_table_component__WEBPACK_IMPORTED_MODULE_0__/* .MerchantTableComponent */ .a
  }, {
    path: 'create',
    component: _merchant_form_merchant_form_component__WEBPACK_IMPORTED_MODULE_1__/* .MerchantFormComponent */ .E,
    data: {
      selectors: {
        organization: false,
        date: false,
        employee: false,
        project: false
      }
    }
  }, {
    path: 'edit/:id',
    component: _merchant_form_merchant_form_component__WEBPACK_IMPORTED_MODULE_1__/* .MerchantFormComponent */ .E,
    data: {
      selectors: {
        organization: false,
        date: false,
        employee: false,
        project: false
      }
    },
    resolve: {
      merchant: _merchant_form_merchant_form_resolver__WEBPACK_IMPORTED_MODULE_5__/* .MerchantFormResolver */ .T
    }
  }]
}];
let MerchantRoutingModule = /*#__PURE__*/(() => {
  class MerchantRoutingModule {
    static {
      this.ɵfac = function MerchantRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MerchantRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .$C({
        type: MerchantRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .iI]
      });
    }
  }
  return MerchantRoutingModule;
})();

/***/ }),

/***/ 94608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ProductCategoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94579);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49624);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38834);
/* harmony import */ var _product_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);












let ProductCategoriesModule = /*#__PURE__*/(() => {
  class ProductCategoriesModule {
    static {
      this.ɵfac = function ProductCategoriesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProductCategoriesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProductCategoriesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .ProductCategoryService */ .F],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipModule */ .IB0, ngx_permissions__WEBPACK_IMPORTED_MODULE_6__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .G, _product_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductCategoriesRoutingModule, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .ProductMutationModule */ .r, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .SmartDataViewLayoutModule */ .H]
      });
    }
  }
  return ProductCategoriesModule;
})();

/***/ }),

/***/ 94923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ WarehouseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let WarehouseService = /*#__PURE__*/(() => {
  class WarehouseService {
    constructor(http) {
      this.http = http;
      this.WAREHOUSES_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/warehouses`;
    }
    create(warehouse) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.WAREHOUSES_URL}`, warehouse));
    }
    getAll(where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.WAREHOUSES_URL}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where
        })
      }));
    }
    update(id, warehouse) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.WAREHOUSES_URL}/${id}`, warehouse));
    }
    getById(id, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.WAREHOUSES_URL}/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          relations
        })
      }));
    }
    deleteFeaturedImage(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.WAREHOUSES_URL}/${id}`));
    }
    addWarehouseProducts(warehouseProductCreateInput, warehouseId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.WAREHOUSES_URL}/inventory/${warehouseId}`, warehouseProductCreateInput));
    }
    getWarehouseProducts(warehouseId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.WAREHOUSES_URL}/inventory/${warehouseId}`));
    }
    updateWarehouseProductCount(warehouseProductId, count) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.WAREHOUSES_URL}/inventory-quantity/${warehouseProductId}`, {
        count: count
      }));
    }
    updateWarehouseProductVariantCount(warehouseProductVariantId, count) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.WAREHOUSES_URL}/inventory-quantity/variants/${warehouseProductVariantId}`, {
        count: count
      }));
    }
    static {
      this.ɵfac = function WarehouseService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WarehouseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: WarehouseService,
        factory: WarehouseService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return WarehouseService;
})();

/***/ }),

/***/ 95126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MerchantService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let MerchantService = /*#__PURE__*/(() => {
  class MerchantService {
    constructor(http) {
      this.http = http;
      this.MERCHANTS_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/merchants`;
    }
    getById(id, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.MERCHANTS_URL}/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          relations
        })
      }));
    }
    create(productStore) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.MERCHANTS_URL}`, productStore));
    }
    update(productStore) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.MERCHANTS_URL}/${productStore.id}`, productStore));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.MERCHANTS_URL}/${id}`));
    }
    static {
      this.ɵfac = function MerchantService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MerchantService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: MerchantService,
        factory: MerchantService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MerchantService;
})();

/***/ }),

/***/ 97124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ InventoryVariantFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90542);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12614);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19448);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10248);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55337);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98672);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19159);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14572);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56383);
/* harmony import */ var _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64251);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(71466);
/* harmony import */ var _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8738);























const _c0 = a0 => ({
  opacity: a0
});
const _c1 = a0 => ({
  "status-danger": a0
});
function InventoryVariantFormComponent__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceSVG"] */ .qSk();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "svg", 20)(1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "g", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "circle", 23)(5, "circle", 24)(6, "use", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(1, _c0, ctx_r0.hoverState ? "1" : "0.3"));
  }
}
function InventoryVariantFormComponent_ga_no_image_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-no-image", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("fontSize", 14)("placeholder", "NO_IMAGE.ADD_DROP");
  }
}
function InventoryVariantFormComponent_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 27);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.image.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function InventoryVariantFormComponent_form_20_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InventoryVariantFormComponent_form_20_div_9_div_1_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["internationalReference"].errors && ctx_r0.form.controls["internationalReference"].errors.required);
  }
}
function InventoryVariantFormComponent_form_20_nb_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const policy_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("value", policy_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", policy_r2, " ");
  }
}
function InventoryVariantFormComponent_form_20_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InventoryVariantFormComponent_form_20_div_17_div_1_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["invoicingPolicy"].errors && ctx_r0.form.controls["invoicingPolicy"].errors.required);
  }
}
function InventoryVariantFormComponent_form_20_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.ENTER_POSITIVE_NUMBER"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InventoryVariantFormComponent_form_20_div_25_div_1_Template, 3, 3, "div", 63)(2, InventoryVariantFormComponent_form_20_div_25_div_2_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["quantity"].errors && ctx_r0.form.controls["quantity"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["quantity"].errors && ctx_r0.form.controls["quantity"].errors.min);
  }
}
function InventoryVariantFormComponent_form_20_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.ENTER_POSITIVE_NUMBER"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InventoryVariantFormComponent_form_20_div_32_div_1_Template, 3, 3, "div", 63)(2, InventoryVariantFormComponent_form_20_div_32_div_2_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["taxes"].errors && ctx_r0.form.controls["taxes"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["taxes"].errors && ctx_r0.form.controls["taxes"].errors.min);
  }
}
function InventoryVariantFormComponent_form_20_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.ENTER_POSITIVE_NUMBER"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InventoryVariantFormComponent_form_20_div_40_div_1_Template, 3, 3, "div", 63)(2, InventoryVariantFormComponent_form_20_div_40_div_2_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["retailPrice"].errors && ctx_r0.form.controls["retailPrice"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["retailPrice"].errors && ctx_r0.form.controls["retailPrice"].errors.min);
  }
}
function InventoryVariantFormComponent_form_20_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InventoryVariantFormComponent_form_20_div_44_div_1_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["retailPriceCurrency"].errors && ctx_r0.form.controls["retailPriceCurrency"].errors.required);
  }
}
function InventoryVariantFormComponent_form_20_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_52_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.ENTER_POSITIVE_NUMBER"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InventoryVariantFormComponent_form_20_div_52_div_1_Template, 3, 3, "div", 63)(2, InventoryVariantFormComponent_form_20_div_52_div_2_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["unitCost"].errors && ctx_r0.form.controls["unitCost"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["unitCost"].errors && ctx_r0.form.controls["unitCost"].errors.min);
  }
}
function InventoryVariantFormComponent_form_20_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "VALIDATION.FIELD_REQUIRED"), " ");
  }
}
function InventoryVariantFormComponent_form_20_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InventoryVariantFormComponent_form_20_div_56_div_1_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["unitCostCurrency"].errors && ctx_r0.form.controls["unitCostCurrency"].errors.required);
  }
}
function InventoryVariantFormComponent_form_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 28)(1, "div", 29)(2, "div", 4)(3, "div", 30)(4, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, InventoryVariantFormComponent_form_20_div_9_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 30)(11, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "nb-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(16, InventoryVariantFormComponent_form_20_nb_option_16_Template, 2, 2, "nb-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(17, InventoryVariantFormComponent_form_20_div_17_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "div", 4)(19, "div", 30)(20, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(23, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(25, InventoryVariantFormComponent_form_20_div_25_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "div", 30)(27, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(30, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(32, InventoryVariantFormComponent_form_20_div_32_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(33, "div", 4)(34, "div", 41)(35, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(38, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(40, InventoryVariantFormComponent_form_20_div_40_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(41, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(42, "ga-currency", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(44, InventoryVariantFormComponent_form_20_div_44_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(45, "div", 4)(46, "div", 41)(47, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(50, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(52, InventoryVariantFormComponent_form_20_div_52_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(53, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(54, "ga-currency", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(56, InventoryVariantFormComponent_form_20_div_56_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(57, "div", 49)(58, "div", 50)(59, "nb-checkbox", 51)(60, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(63, "nb-checkbox", 52)(64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(67, "nb-checkbox", 53)(68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(71, "div", 50)(72, "nb-checkbox", 54)(73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(76, "nb-checkbox", 55)(77, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(80, "nb-checkbox", 56)(81, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(84, "div", 50)(85, "nb-checkbox", 57)(86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(88, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(89, "nb-checkbox", 58)(90, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(93, "nb-checkbox", 59)(94, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(96, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(97, "div", 4)(98, "div", 60)(99, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(101, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(102, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(103, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(104, "\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 45, "INVENTORY_PAGE.INTERNATIONAL_REFERENCE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 47, "INVENTORY_PAGE.INTERNATIONAL_REFERENCE"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(95, _c1, ctx_r0.form.controls["internationalReference"].invalid && ctx_r0.form.controls["internationalReference"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["internationalReference"].invalid && ctx_r0.form.controls["internationalReference"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 49, "INVENTORY_PAGE.BILLING_INVOICING_POLICY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 51, "INVENTORY_PAGE.BILLING_INVOICING_POLICY"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(97, _c1, ctx_r0.form.controls["invoicingPolicy"].invalid && ctx_r0.form.controls["invoicingPolicy"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.billingInvoicingPolicies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["invoicingPolicy"].invalid && ctx_r0.form.controls["invoicingPolicy"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 53, "INVENTORY_PAGE.QUANTITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 55, "INVENTORY_PAGE.QUANTITY"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(99, _c1, ctx_r0.form.controls["quantity"].invalid && ctx_r0.form.controls["quantity"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["quantity"].invalid && ctx_r0.form.controls["quantity"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(29, 57, "INVENTORY_PAGE.TAXES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(31, 59, "INVENTORY_PAGE.TAXES"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(101, _c1, ctx_r0.form.controls["taxes"].invalid && ctx_r0.form.controls["taxes"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["taxes"].invalid && ctx_r0.form.controls["taxes"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(37, 61, "INVENTORY_PAGE.RETAIL_PRICE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(39, 63, "INVENTORY_PAGE.RETAIL_PRICE"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(103, _c1, ctx_r0.form.controls["retailPrice"].invalid && ctx_r0.form.controls["retailPrice"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["retailPrice"].invalid && ctx_r0.form.controls["retailPrice"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(43, 65, "INVENTORY_PAGE.RETAIL_PRICE_CURRENCY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["retailPriceCurrency"].invalid && ctx_r0.form.controls["retailPriceCurrency"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(49, 67, "INVENTORY_PAGE.UNIT_COST"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(51, 69, "INVENTORY_PAGE.UNIT_COST"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(105, _c1, ctx_r0.form.controls["unitCost"].invalid && ctx_r0.form.controls["unitCost"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["unitCost"].invalid && ctx_r0.form.controls["unitCost"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(55, 71, "INVENTORY_PAGE.UNIT_COST_CURRENCY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls["unitCostCurrency"].invalid && ctx_r0.form.controls["unitCostCurrency"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(62, 73, "INVENTORY_PAGE.ENABLED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(66, 75, "INVENTORY_PAGE.IS_SUBSCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(70, 77, "INVENTORY_PAGE.IS_PURCHASE_AUTOMATICALLY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(75, 79, "INVENTORY_PAGE.CAN_BE_SOLD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(79, 81, "INVENTORY_PAGE.CAN_BE_PURCHASED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(83, 83, "INVENTORY_PAGE.CAN_BE_CHARGED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(88, 85, "INVENTORY_PAGE.CAN_BE_RENTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(92, 87, "INVENTORY_PAGE.TRACK_INVENTORY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(96, 89, "INVENTORY_PAGE.IS_EQUIPMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(101, 91, "INVENTORY_PAGE.NOTES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(103, 93, "INVENTORY_PAGE.NOTES"));
  }
}
let InventoryVariantFormComponent = /*#__PURE__*/(() => {
  class InventoryVariantFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translationService, fb, toastrService, productVariantService, productVariantPriceService, productVariantSettingService, location, route, store, inventoryStore, dialogService) {
      super(translationService);
      this.fb = fb;
      this.toastrService = toastrService;
      this.productVariantService = productVariantService;
      this.productVariantPriceService = productVariantPriceService;
      this.productVariantSettingService = productVariantSettingService;
      this.location = location;
      this.route = route;
      this.store = store;
      this.inventoryStore = inventoryStore;
      this.dialogService = dialogService;
      this.billingInvoicingPolicies = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .BillingInvoicingPolicyEnum */ .F);
      this.loading = true;
      this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
      this.newImageUploadedEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
    }
    ngOnInit() {
      var _this = this;
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .takeUntil */ .Q)(this.ngDestroy$)).subscribe(organization => {
        if (organization) {
          this.organization = organization;
          this.defaultCurrency = organization.currency;
        }
      });
      this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .takeUntil */ .Q)(this.ngDestroy$)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* (params) {
          if (!params.itemVariantId) return;
          _this.productVariantService.getProductVariant(params.itemVariantId).then(result => {
            if (result) {
              _this.itemVariant = result;
              _this._initializeForm();
            }
            if (result && result.image) {
              _this.image = result.image;
            }
            _this.loading = false;
          });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    ngOnDestroy() {
      this.ngDestroy$.next();
      this.ngDestroy$.complete();
    }
    _initializeForm() {
      this.form = this.fb.group({
        internationalReference: [this.itemVariant ? this.itemVariant.internalReference : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required]],
        invoicingPolicy: [this.itemVariant ? this.itemVariant.billingInvoicingPolicy : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .BillingInvoicingPolicyEnum */ .F.QUANTITY_ORDERED, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required]],
        quantity: [this.itemVariant ? this.itemVariant.quantity : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.min(0)]],
        taxes: [this.itemVariant ? this.itemVariant.taxes : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.min(0)]],
        retailPrice: [this.itemVariant ? this.itemVariant.price.retailPrice : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.min(0)]],
        retailPriceCurrency: [this.itemVariant ? this.itemVariant.price.retailPriceCurrency : this.defaultCurrency, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required],
        unitCost: [this.itemVariant ? this.itemVariant.price.unitCost : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.min(0)]],
        unitCostCurrency: [this.itemVariant ? this.itemVariant.price.unitCostCurrency : this.defaultCurrency, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required],
        enabled: [this.itemVariant ? this.itemVariant.enabled : true, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required],
        isSubscription: [this.itemVariant ? this.itemVariant.setting.isSubscription : false],
        isPurchaseAutomatically: [this.itemVariant ? this.itemVariant.setting.isPurchaseAutomatically : false],
        canBeSold: [this.itemVariant ? this.itemVariant.setting.canBeSold : true],
        canBePurchased: [this.itemVariant ? this.itemVariant.setting.canBePurchased : true],
        canBeCharged: [this.itemVariant ? this.itemVariant.setting.canBeCharged : true],
        canBeRented: [this.itemVariant ? this.itemVariant.setting.canBeRented : false],
        trackInventory: [this.itemVariant ? this.itemVariant.setting.trackInventory : false],
        isEquipment: [this.itemVariant ? this.itemVariant.setting.isEquipment : false],
        notes: [this.itemVariant ? this.itemVariant.notes : '']
      });
    }
    onCancel() {
      this.location.back();
    }
    onSaveRequest() {
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      const formValue = this.form.value;
      const productVariantRequest = {
        itemVariant: {
          id: this.itemVariant.id,
          internalReference: formValue['internationalReference'],
          billingInvoicingPolicy: formValue['invoicingPolicy'],
          quantity: formValue['quantity'],
          taxes: formValue['taxes'],
          enabled: formValue['enabled'],
          notes: formValue['notes'],
          image: this.image,
          organizationId,
          tenantId
        },
        productVariantPrice: {
          id: this.itemVariant.price.id,
          retailPrice: formValue['retailPrice'],
          retailPriceCurrency: formValue['retailPriceCurrency'],
          unitCost: formValue['unitCost'],
          unitCostCurrency: formValue['unitCostCurrency'],
          organizationId,
          tenantId
        },
        productVariantSetting: {
          id: this.itemVariant.setting.id,
          isSubscription: formValue['isSubscription'],
          isPurchaseAutomatically: formValue['isPurchaseAutomatically'],
          canBeSold: formValue['canBeSold'],
          canBePurchased: formValue['canBePurchased'],
          canBeCharged: formValue['canBeCharged'],
          canBeRented: formValue['canBeRented'],
          trackInventory: formValue['trackInventory'],
          isEquipment: formValue['isEquipment'],
          organizationId,
          tenantId
        }
      };
      this.saveVariant(productVariantRequest);
    }
    saveVariant(productVariantRequest) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        try {
          yield _this2.productVariantSettingService.updateProductVariantSetting(productVariantRequest.productVariantSetting);
          yield _this2.productVariantPriceService.updateProductVariantPrice(productVariantRequest.productVariantPrice);
          yield _this2.productVariantService.updateProductVariant(productVariantRequest.itemVariant);
          _this2.toastrService.success('INVENTORY_PAGE.PRODUCT_VARIANT_SAVED');
          _this2.location.back();
        } catch {
          _this2.toastrService.success('TOASTR.MESSAGE.SOMETHING_BAD_HAPPENED');
        }
      })();
    }
    onVariantImageSelect() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        const dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .SelectAssetComponent */ .a, {
          context: {
            newImageUploadedEvent: _this3.newImageUploadedEvent$,
            galleryInput: _this3.inventoryStore.gallery,
            settings: {
              uploadImageEnabled: false,
              deleteImageEnabled: false,
              selectMultiple: false
            }
          }
        });
        let selectedImage = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(dialog.onClose);
        if (selectedImage) {
          _this3.image = selectedImage;
        }
      })();
    }
    onDeleteImageClick() {
      this.productVariantService.deleteFeaturedImage(this.itemVariant.id).then(res => {
        this.image = null;
        this.toastrService.success('INVENTORY_PAGE.IMAGE_DELETED');
      }).catch(err => {
        this.toastrService.danger('INVENTORY_PAGE.ERROR');
      });
    }
    static {
      this.ɵfac = function InventoryVariantFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InventoryVariantFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ProductVariantService */ .M), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ProductVariantPriceService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ProductVariantSettingService */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .Location */ .aZ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_15__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .InventoryStore */ .y), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbDialogService */ .S0W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InventoryVariantFormComponent,
        selectors: [["ngx-inventory-variant-form"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 28,
        vars: 23,
        consts: [[1, "main"], [1, "d-flex"], [3, "click", "haveLink"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "row"], [1, "col-md-3", "col-sm-12"], [1, "main-product-variant-container"], [1, "product-variant-container"], [1, "product-variant-photo", 3, "mouseenter", "mouseleave", "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle", 4, "ngIf"], [1, "image-overlay", 3, "ngStyle"], [3, "fontSize", "placeholder", 4, "ngIf"], ["alt", "Product Item Photo", 3, "src", 4, "ngIf"], ["nbButton", "", "ghost", "", "status", "danger", "nbTooltipPlacement", "top", "nbTooltipStatus", "danger", 3, "click", "nbTooltip", "disabled"], ["icon", "trash-2-outline"], [1, "col-md-9", "col-sm-12"], [3, "formGroup", 4, "ngIf"], [1, "text-left"], ["outline", "", "status", "basic", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [3, "fontSize", "placeholder"], ["alt", "Product Item Photo", 3, "src"], [3, "formGroup"], [1, "form-group"], [1, "col-sm-6", "mb-3"], ["for", "internationalReferenceInput", 1, "label"], ["fullWidth", "", "id", "internationalReferenceInput", "type", "text", "nbInput", "", "formControlName", "internationalReference", 3, "placeholder", "ngClass"], [4, "ngIf"], ["for", "invoicingPolicyInput", 1, "label"], ["id", "invoicingPolicyInput", "fullWidth", "", "formControlName", "invoicingPolicy", 3, "placeholder", "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "quantityInput", 1, "label"], ["fullWidth", "", "id", "quantityInput", "type", "number", "formControlName", "quantity", "nbInput", "", 3, "min", "placeholder", "ngClass"], ["for", "taxesInput", 1, "label"], ["fullWidth", "", "id", "taxesInput", "type", "number", "formControlName", "taxes", "nbInput", "", 3, "min", "placeholder", "ngClass"], [1, "col-sm-8", "mb-3"], ["for", "retailPriceInput", 1, "label"], ["fullWidth", "", "id", "retailPriceInput", "type", "number", "formControlName", "retailPrice", "nbInput", "", 3, "min", "placeholder", "ngClass"], [1, "col-sm-4", "mb-3"], ["formControlName", "retailPriceCurrency", 3, "placeholder"], ["for", "unitCost", 1, "label"], ["fullWidth", "", "id", "unitCost", "type", "number", "formControlName", "unitCost", "nbInput", "", 3, "min", "placeholder", "ngClass"], ["formControlName", "unitCostCurrency", 3, "placeholder"], [1, "row", "mb-3"], [1, "col-sm-4", "flex-column"], ["formControlName", "enabled"], ["formControlName", "isSubscription"], ["formControlName", "isPurchaseAutomatically"], ["formControlName", "canBeSold"], ["formControlName", "canBePurchased"], ["formControlName", "canBeCharged"], ["formControlName", "canBeRented"], ["formControlName", "trackInventory"], ["formControlName", "isEquipment"], [1, "col-sm-12", "mb-3"], ["for", "notes", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "notes", "id", "notes", 3, "placeholder"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [3, "value"]],
        template: function InventoryVariantFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "ngx-back-navigation", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InventoryVariantFormComponent_Template_ngx_back_navigation_click_2_listener() {
              return ctx.onCancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("mouseenter", function InventoryVariantFormComponent_Template_div_mouseenter_11_listener() {
              return ctx.hoverState = true;
            })("mouseleave", function InventoryVariantFormComponent_Template_div_mouseleave_11_listener() {
              return ctx.hoverState = false;
            })("click", function InventoryVariantFormComponent_Template_div_click_11_listener() {
              return ctx.onVariantImageSelect();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, InventoryVariantFormComponent__svg_svg_12_Template, 7, 3, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, InventoryVariantFormComponent_ga_no_image_14_Template, 1, 2, "ga-no-image", 11)(15, InventoryVariantFormComponent_img_15_Template, 1, 1, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InventoryVariantFormComponent_Template_button_click_16_listener() {
              return ctx.onDeleteImageClick();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(18, "nb-icon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(20, InventoryVariantFormComponent_form_20_Template, 105, 107, "form", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "nb-card-footer", 17)(22, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InventoryVariantFormComponent_Template_button_click_22_listener() {
              return ctx.onCancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InventoryVariantFormComponent_Template_button_click_25_listener() {
              return ctx.onSaveRequest();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("haveLink", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 13, ctx.itemVariant ? "INVENTORY_PAGE.EDIT_VARIANT" : "INVENTORY_PAGE.ADD_VARIANT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.image && ctx.image.fullUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(21, _c0, ctx.hoverState ? "0.2" : "0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.image && !(ctx.image == null ? null : ctx.image.fullUrl));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.image && ctx.image.fullUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 15, "INVENTORY_PAGE.DELETE_IMAGE"))("disabled", !ctx.image);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 17, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form && ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 19, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_19__/* .CurrencyComponent */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_21__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_22__/* .ImgDirective */ .z, _inventory_table_components_no_image_no_image_component__WEBPACK_IMPORTED_MODULE_23__/* .NoImageComponent */ ._, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.product-variant-container[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n\n.product-variant-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 15rem;\n  background-color: white;\n  overflow: hidden;\n  position: relative;\n  border-radius: var(--border-radius);\n}\n.product-variant-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n.product-variant-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 15rem;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n.product-variant-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n.product-variant-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n.product-variant-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  max-width: 100%;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n  height: calc(100vh - 12rem);\n  margin: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%], \n[_nghost-%COMP%]   textarea[_ngcontent-%COMP%], \n[_nghost-%COMP%]     .ng-select .ng-select-container, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button {\n  background-color: var(--gauzy-card-1);\n}\n\n.main-product-variant-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-product-variant-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}"]
      });
    }
  }
  return InventoryVariantFormComponent;
})();

/***/ }),

/***/ 97664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SelectProductComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45715);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64913);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _inventory_table_components_image_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45121);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56383);
/* harmony import */ var _inventory_table_components_selected_row_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38327);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71181);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3456);
























function SelectProductComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r0.smartTableSource);
  }
}
let SelectProductComponent = class SelectProductComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(dialogRef, store, translateService, http) {
    super(translateService);
    this.dialogRef = dialogRef;
    this.store = store;
    this.translateService = translateService;
    this.http = http;
    this.products = [];
    this.loading = true;
    this.selectedLanguage = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .LanguagesEnum */ .TR.ENGLISH;
    this.selectedRows = [];
    this.tableData = [];
    this.PRODUCTS_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .API_PREFIX */ .m4}/products/local/${this.selectedLanguage}?`;
  }
  ngOnInit() {
    this.loadSettings();
    this.loadSmartTable();
    this.selectedLanguage = this.store.preferredLanguage;
    this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(organization => {
      if (organization) {
        this.organization = organization;
        this.loadSettings();
      }
    });
    this.pagination$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.loadSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  translateProp(elem, prop) {
    let translations = elem.translations;
    if (!translations) return '-';
    return translations.find(tr => tr.languageCode == this.store.preferredLanguage)[prop];
  }
  loadSettings() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
      _this.loading = true;
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.organization || {
        id: ''
      };
      const data = 'data=' + JSON.stringify({
        relations: ['productType', 'productCategory', 'featuredImage', 'variants'],
        findInput: {
          organizationId,
          tenantId
        }
      });
      const {
        activePage,
        itemsPerPage
      } = _this.getPagination();
      _this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_9__/* .ServerDataSource */ .Nr(_this.http, {
        endPoint: _this.PRODUCTS_URL + data,
        dataKey: 'items',
        totalKey: 'total',
        perPage: 'per_page',
        pagerPageKey: 'page'
      });
      _this.smartTableSource.setPaging(activePage, itemsPerPage, false);
      yield _this.smartTableSource.getElements();
      _this.setPagination({
        ..._this.getPagination(),
        totalItems: _this.smartTableSource.count()
      });
      _this.loading = false;
    })();
  }
  loadSmartTable() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
      const pagination = _this2.getPagination();
      _this2.settingsSmartTable = {
        actions: false,
        selectedRowIndex: -1,
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : _this2.minItemPerPage
        },
        columns: {
          selected: {
            title: _this2.getTranslation('INVENTORY_PAGE.SELECTED'),
            type: 'custom',
            isFilterable: false,
            valuePrepareFunction: (_, cell) => {
              // ToDo - We need to uncomment below and fix issue.
              // row.selected = !!this.selectedRows.find(p => p.id == row.id);
            },
            renderComponent: _inventory_table_components_selected_row_component__WEBPACK_IMPORTED_MODULE_10__/* .SelectedRowComponent */ .t,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          image: {
            title: _this2.getTranslation('INVENTORY_PAGE.IMAGE'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _inventory_table_components_image_row_component__WEBPACK_IMPORTED_MODULE_11__/* .ImageRowComponent */ .j,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          name: {
            title: _this2.getTranslation('INVENTORY_PAGE.NAME'),
            type: 'string'
          },
          type: {
            title: _this2.getTranslation('INVENTORY_PAGE.TYPE'),
            type: 'string'
          },
          category: {
            title: _this2.getTranslation('INVENTORY_PAGE.CATEGORY'),
            type: 'string'
          }
        }
      };
    })();
  }
  onUserRowSelect(event) {
    if (event.isSelected && !this.selectedRows.find(p => p.id == event.data.id)) {
      this.selectedRows.push(event.data);
    }
  }
  static {
    this.ɵfac = function SelectProductComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_15__/* .HttpClient */ .Qq));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: SelectProductComponent,
      selectors: [["ngx-select-product"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 15,
      vars: 9,
      consts: [[1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "content"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [4, "ngIf"], ["status", "success", "nbButton", "", 1, "action", 3, "click"], [3, "source"]],
      template: function SelectProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 0)(2, "span", 1)(3, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function SelectProductComponent_Template_i_click_3_listener() {
            return ctx.dialogRef.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h5", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 4)(8, "div", 5)(9, "angular2-smart-table", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function SelectProductComponent_Template_angular2_smart_table_userRowSelect_9_listener($event) {
            return ctx.onUserRowSelect($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, SelectProductComponent_ng_container_10_Template, 2, 1, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "nb-card-footer")(12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function SelectProductComponent_Template_button_click_12_listener() {
            return ctx.dialogRef.close(ctx.selectedRows);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, "INVENTORY_PAGE.ADD_PRODUCTS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.settingsSmartTable)("source", ctx.smartTableSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.smartTableSource);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 7, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbButtonComponent */ .YP2, angular2_smart_table__WEBPACK_IMPORTED_MODULE_9__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_17__/* .PaginationV2Component */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-3) !important;\n  border: none;\n  height: 2rem !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-3) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem 0.5rem 1rem 1rem;\n  display: flex;\n  flex-direction: column;\n  overflow: unset;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  width: 845px;\n}\n\n[_nghost-%COMP%]     input[type=checkbox] {\n  width: 15px !important;\n}\n\n[_nghost-%COMP%]     .angular2-smart-action-multiple-select {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n[_nghost-%COMP%]     td.angular2-smart-action-multiple-select {\n  display: flex;\n  height: 79px;\n  align-items: center;\n}"]
    });
  }
};
SelectProductComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__/* .HttpClient */ .Qq])], SelectProductComponent);


/***/ }),

/***/ 98669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ProductCategoriesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(64411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36950);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(94579);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64913);
/* harmony import */ var _inventory_table_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45121);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96403);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(49517);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(3456);


























function ProductCategoriesComponent_ng_template_11_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function ProductCategoriesComponent_ng_template_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 11)(1, "angular2-smart-table", 12, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function ProductCategoriesComponent_ng_template_11_ng_template_0_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectProductCategory($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, ProductCategoriesComponent_ng_template_11_ng_template_0_ng_container_4_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function ProductCategoriesComponent_ng_template_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("scroll", function ProductCategoriesComponent_ng_template_11_ng_template_1_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    })("onSelectedItem", function ProductCategoriesComponent_ng_template_11_ng_template_1_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectProductType($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.productCategories);
  }
}
function ProductCategoriesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProductCategoriesComponent_ng_template_11_ng_template_0_Template, 5, 3, "ng-template", 10)(1, ProductCategoriesComponent_ng_template_11_ng_template_1_Template, 1, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const gridLayout_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === ctx_r1.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r4);
  }
}
function ProductCategoriesComponent_ng_template_12_ng_template_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductCategoriesComponent_ng_template_12_ng_template_0_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onAdd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function ProductCategoriesComponent_ng_template_12_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProductCategoriesComponent_ng_template_12_ng_template_0_button_0_Template, 4, 3, "button", 18);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.showAddCard);
  }
}
function ProductCategoriesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProductCategoriesComponent_ng_template_12_ng_template_0_Template, 1, 1, "ng-template", 17);
  }
}
function ProductCategoriesComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 21)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductCategoriesComponent_ng_template_14_ng_template_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEdit(selectedItem_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProductCategoriesComponent_ng_template_14_ng_template_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.delete(selectedItem_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r7 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r7 && ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "BUTTONS.DELETE"));
  }
}
function ProductCategoriesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProductCategoriesComponent_ng_template_14_ng_template_0_Template, 8, 8, "ng-template", 17);
  }
}
let ProductCategoriesComponent = class ProductCategoriesComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(translateService, dialogService, productCategoryService, toastrService, store, http) {
    super(translateService);
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.productCategoryService = productCategoryService;
    this.toastrService = toastrService;
    this.store = store;
    this.http = http;
    this.loading = false;
    this.disableButton = true;
    this.productCategories = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    this.categories$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
    this.setView();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this.categories$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.getTranslatedProductCategories()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.categories$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    const storeOrganization$ = this.store.selectedOrganization$;
    const preferredLanguage$ = this.store.preferredLanguage$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .combineLatest */ .z)([storeOrganization$, preferredLanguage$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(([organization, language]) => !!organization && !!language), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(([organization]) => this.organization = organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.categories$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.productCategories = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .ComponentEnum */ .L.PRODUCT_CATEGORY;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.productCategories = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.categories$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadSmartTableSettings() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      const pagination = _this.getPagination();
      _this.settingsSmartTable = {
        actions: false,
        editable: true,
        selectedRowIndex: -1,
        noDataMessage: _this.getTranslation('SM_TABLE.NO_DATA.PRODUCT_CATEGORY'),
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        columns: {
          imageUrl: {
            title: _this.getTranslation('INVENTORY_PAGE.IMAGE'),
            width: '10%',
            isFilterable: false,
            type: 'custom',
            renderComponent: _inventory_table_components__WEBPACK_IMPORTED_MODULE_12__/* .ImageRowComponent */ .j,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          name: {
            title: _this.getTranslation('INVENTORY_PAGE.NAME'),
            type: 'string',
            width: '40%'
          },
          description: {
            title: _this.getTranslation('INVENTORY_PAGE.DESCRIPTION'),
            type: 'string',
            isFilterable: false
          }
        }
      };
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  onAdd() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (!_this2.organization) {
        return;
      }
      try {
        const dialog = _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .ProductCategoryMutationComponent */ .M);
        const productCategory = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(dialog.onClose);
        if (productCategory) {
          _this2.toastrService.success('INVENTORY_PAGE.PRODUCT_CATEGORY_SAVED', {
            name: productCategory.name
          });
          _this2._refresh$.next(true);
          _this2.categories$.next(true);
        }
      } catch (error) {
        console.log('Error while creating product categories', error);
      }
    })();
  }
  onEdit(selectedItem) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this3.selectProductCategory({
          isSelected: true,
          data: selectedItem
        });
      }
      if (!_this3.organization) {
        return;
      }
      try {
        const editProductCategory = _this3.selectedProductCategory ? yield _this3.productCategoryService.getById(_this3.selectedProductCategory.id) : null;
        const dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .ProductCategoryMutationComponent */ .M, {
          context: {
            productCategory: editProductCategory
          }
        });
        const productCategory = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(dialog.onClose);
        if (productCategory) {
          let productCategoryTranslation = productCategory.translations[0];
          _this3.toastrService.success('INVENTORY_PAGE.PRODUCT_CATEGORY_SAVED', {
            name: productCategoryTranslation?.name
          });
          _this3._refresh$.next(true);
          _this3.categories$.next(true);
        }
      } catch (error) {
        console.log('Error while updating product categories', error);
      }
    })();
  }
  delete(selectedItem) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this4.selectProductCategory({
          isSelected: true,
          data: selectedItem
        });
      }
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(_this4.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .DeleteConfirmationComponent */ .u).onClose);
      if (result) {
        if (_this4.selectedProductCategory) {
          const {
            id,
            name
          } = _this4.selectedProductCategory;
          yield _this4.productCategoryService.delete(id).then(() => {
            _this4.toastrService.success('INVENTORY_PAGE.PRODUCT_CATEGORY_DELETED', {
              name
            });
          }).finally(() => {
            _this4._refresh$.next(true);
            _this4.categories$.next(true);
          });
        }
      }
    })();
  }
  selectProductCategory({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedProductCategory = isSelected ? data : null;
  }
  /**
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    try {
      this.loading = true;
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ServerDataSource */ .N(this.http, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_17__/* .API_PREFIX */ .m4}/product-categories/pagination`,
        relations: ['translations'],
        where: {
          ...{
            organizationId,
            tenantId
          },
          ...this.filters.where
        },
        resultMap: item => {
          return Object.assign({}, item);
        },
        finalize: () => {
          if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            this.productCategories.push(...this.smartTableSource.getData());
          }
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          this.loading = false;
        }
      });
    } catch (error) {
      this.loading = false;
      this.toastrService.danger(error);
    }
  }
  /**
   * GET product categories smart table source
   */
  getTranslatedProductCategories() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (!_this5.organization) {
        return;
      }
      try {
        _this5.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this5.getPagination();
        _this5.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this5.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          yield _this5.smartTableSource.getElements();
        }
      } catch (error) {
        _this5.toastrService.danger(error);
      }
    })();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectProductCategory({
      isSelected: false,
      data: null
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ProductCategoriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ProductCategoryService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_23__/* .HttpClient */ .Qq));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ProductCategoriesComponent,
      selectors: [["ngx-product-categories"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 16,
      vars: 10,
      consts: [["visibleButton", ""], ["actionButtons", ""], ["gridLayout", ""], ["productCategoriesTable", ""], [3, "nbSpinner", "nbSpinnerStatus", "nbSpinnerSize"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [1, "gauzy-button-container"], [3, "buttonTemplate", "componentName", "buttonTemplateVisible", "isDisable"], ["ngxPermissionsOnly", "ORG_PRODUCT_CATEGORIES_VIEW"], [3, "ngIf", "ngIfElse"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "scroll", "onSelectedItem", "totalItems", "settings", "source"], ["ngxPermissionsOnly", "ORG_PRODUCT_CATEGORIES_EDIT"], ["nbButton", "", "status", "success", "class", "action", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function ProductCategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "div", 6)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "ngx-gauzy-button-action", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, ProductCategoriesComponent_ng_template_11_Template, 3, 2, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, ProductCategoriesComponent_ng_template_12_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(14, ProductCategoriesComponent_ng_template_14_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const visibleButton_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(13);
          const actionButtons_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading)("nbSpinnerStatus", "primary")("nbSpinnerSize", "large");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 8, "INVENTORY_PAGE.PRODUCT_CATEGORIES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r9)("componentName", ctx.viewComponentName)("buttonTemplateVisible", visibleButton_r8)("isDisable", ctx.disableButton);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_25__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_26__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_27__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_28__/* .CardGridComponent */ .c, angular2_smart_table__WEBPACK_IMPORTED_MODULE_29__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_31__/* .PaginationV2Component */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[_ngcontent-%COMP%] {\n  background-color: #0088fe;\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: rgb(37, 184, 105);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.primary[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%], \n.action.primary[_ngcontent-%COMP%]   .appearance-filled.status-basic[nbButtonToggle][_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n[_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0 1px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}"]
    });
  }
};
ProductCategoriesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_32__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ProductCategoryService */ .F, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .Store */ .il, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__/* .HttpClient */ .Qq])], ProductCategoriesComponent);


/***/ }),

/***/ 98672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ InventoryStore)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);




let InventoryStore = /*#__PURE__*/(() => {
  class InventoryStore {
    constructor(translateService) {
      this.translateService = translateService;
      this.productTypesLoaded = false;
      this.productCategoriesLoaded = false;
      this._activeProduct = this.inventoryItemBlank;
      this._variantCreateInputs = [];
      this._deleteOptions = [];
      this._deletedOptionGroups = [];
      this._optionGroups = [];
      this._productCategories = [];
      this._productTypes = [];
      this._activeTab = null;
      this.activeProduct$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(this.activeProduct);
      this.variantCreateInputs$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(this.variantCreateInputs);
      this.optionGroups$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(this._optionGroups);
      this.deleteOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(this.deleteOptions);
      this.deletedOptionGroups$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(this.deletedOptionGroups);
      this.activeTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(this.activeTab);
      this.warehouseProductsCountUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
    }
    get activeProduct() {
      return this._activeProduct;
    }
    get gallery() {
      return this._activeProduct.gallery;
    }
    get featuredImage() {
      return this._activeProduct.featuredImage;
    }
    get storedVariants() {
      return this._activeProduct.variants;
    }
    get variantCreateInputs() {
      return this._variantCreateInputs;
    }
    get createOptionCombinations() {
      return this._variantCreateInputs.filter(variant => !variant.isStored).map(variant => ({
        options: variant.options
      }));
    }
    get deleteOptions() {
      return this._deleteOptions;
    }
    get deletedOptionGroups() {
      return this._deletedOptionGroups;
    }
    get optionGroups() {
      return this._optionGroups;
    }
    get createOptionGroups() {
      return this._optionGroups.filter(optionGroup => !optionGroup.id);
    }
    get updateOptionGroups() {
      return this._optionGroups.filter(optionGroup => optionGroup.id);
    }
    get activeTab() {
      return this._activeTab;
    }
    get productTypes() {
      return this._productTypes;
    }
    get productCategories() {
      return this._productCategories;
    }
    set activeProduct(product) {
      this._activeProduct = {
        ...this.activeProduct,
        ...product
      };
      this.activeProduct$.next(this._activeProduct);
    }
    set variantCreateInputs(variantCreateInputs) {
      this._variantCreateInputs = variantCreateInputs;
      this.variantCreateInputs$.next(this._variantCreateInputs);
    }
    set optionGroups(optionGroups) {
      this._optionGroups = optionGroups;
      this.optionGroups$.next(this._optionGroups);
    }
    set activeTab(tab) {
      this._activeTab = tab;
      this.activeTab$.next(this._activeTab);
    }
    set productCategories(productCategoriesInput) {
      this._productCategories = productCategoriesInput;
      this.productTypesLoaded = true;
    }
    set productTypes(productTypesInput) {
      this._productTypes = productTypesInput;
      this.productCategoriesLoaded = true;
    }
    updateGallery(gallery) {
      this.activeProduct.gallery = gallery;
      this.activeProduct$.next(this.activeProduct);
    }
    addGalleryImages(images) {
      this.activeProduct.gallery.push(...images);
      this.activeProduct$.next(this.activeProduct);
    }
    deleteGalleryImage(image) {
      this.activeProduct.gallery = this.activeProduct.gallery.filter(img => img.id !== image.id);
      if (this.activeProduct.featuredImage && this.activeProduct.featuredImage.id == image.id) {
        this.activeProduct.featuredImage = null;
      }
      this.activeProduct$.next(this.activeProduct);
    }
    initVariantCreateInputs() {
      this._variantCreateInputs = this.activeProduct.variants.map(variant => {
        return {
          options: variant.options.map(option => option.name),
          optionsFull: variant.options,
          isStored: true,
          id: variant.id,
          productId: this.activeProduct.id
        };
      });
      this.variantCreateInputs$.next(this._variantCreateInputs);
    }
    addVariantCreateInput(variantCreateInput) {
      this._variantCreateInputs.push(variantCreateInput);
      this.variantCreateInputs$.next(this.variantCreateInputs);
    }
    updateVariantInputsOnDeletedOption(deletedOption) {
      let variantsUsingOption = this.variantCreateInputs.filter(variant => variant.options.find(option => option == deletedOption.name));
      variantsUsingOption.forEach(variant => {
        variant.options = variant.options.filter(option => option != deletedOption.name);
      });
      this._variantCreateInputs = this.variantCreateInputs.filter(variantCreateInput => variantCreateInput.options.length);
      this.variantCreateInputs$.next(this._variantCreateInputs);
    }
    deleteVariant(variantDeleted) {
      this.activeProduct.variants = this.activeProduct.variants.filter(variant => variant.id != variantDeleted.id);
      this.activeProduct$.next(this.activeProduct);
    }
    updateFeaturedImage(image) {
      this.activeProduct.featuredImage = image;
      this.activeProduct$.next(this.activeProduct);
    }
    isFeaturedImage(image) {
      if (!this.activeProduct.featuredImage) return false;
      return this.activeProduct.featuredImage.id == image.id;
    }
    clearCurrentProduct() {
      this.resetCreateVariants();
      this.activeProduct = this.inventoryItemBlank;
      this.activeProduct$.next(this.activeProduct);
    }
    addDeletedOption(productOption) {
      this._deleteOptions.push(productOption);
    }
    addDeletedOptionGroup(optionGroup) {
      this._deletedOptionGroups.push(optionGroup);
    }
    resetDeletedOptions() {
      this._deleteOptions = [];
      this.deleteOptions$.next(this._deleteOptions);
    }
    resetCreateVariants() {
      this.variantCreateInputs = [];
      this.variantCreateInputs$.next(this.variantCreateInputs);
    }
    get inventoryItemBlank() {
      return {
        tags: [],
        name: '',
        code: '',
        imageUrl: '',
        productTypeId: null,
        productCategoryId: null,
        enabled: true,
        description: '',
        languageCode: this.translateService.currentLang,
        variants: [],
        options: [],
        optionGroups: [],
        featuredImage: null,
        gallery: [],
        id: null
      };
    }
    static {
      this.ɵfac = function InventoryStore_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InventoryStore)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: InventoryStore,
        factory: InventoryStore.ɵfac
      });
    }
  }
  return InventoryStore;
})();

/***/ })

}]);