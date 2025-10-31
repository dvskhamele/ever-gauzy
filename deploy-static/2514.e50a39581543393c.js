"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2514],{

/***/ 1114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MP: () => (/* binding */ PrivacyPolicyComponent),
/* harmony export */   nf: () => (/* binding */ COOKIE_PRIVACY_POLICY_ENDPOINT),
/* harmony export */   w8: () => (/* binding */ PRIVACY_POLICY_ENDPOINT)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _providers_legal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92467);





const PRIVACY_POLICY_ENDPOINT = 'https://www.iubenda.com/api/privacy-policy/18120170';
const COOKIE_PRIVACY_POLICY_ENDPOINT = 'https://www.iubenda.com/api/privacy-policy/18120170/cookie-policy';
let PrivacyPolicyComponent = /*#__PURE__*/(() => {
  class PrivacyPolicyComponent {
    constructor(legalService, _document) {
      this.legalService = legalService;
      this._document = _document;
    }
    /**
     * Load privacy policy from iubenda
     */
    ngOnInit() {
      // Get privacy policy from iubenda
      this.getPrivacyPolicyJsonFromUrl(PRIVACY_POLICY_ENDPOINT);
      this.getCookiePolicyJsonFromUrl(COOKIE_PRIVACY_POLICY_ENDPOINT);
      // Add class to body to display privacy policy
      this._document.body.classList.add('privacy-container');
    }
    /**
     * Load privacy policy from iubenda
     *
     * @param url https://www.iubenda.com/api/privacy-policy/18120170
     */
    getPrivacyPolicyJsonFromUrl(url) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        try {
          // Get privacy policy from iubenda
          const data = yield _this.legalService.getContentFromFromUrl(PRIVACY_POLICY_ENDPOINT);
          // Add privacy policy to component
          if (data?.content) {
            _this.privacy_policy = data.content;
          }
        } catch (error) {
          console.error('Error fetching privacy policy:', error);
        }
      })();
    }
    /**
     * Load cookie policy from iubenda
     *
     * @param url https://www.iubenda.com/api/privacy-policy/18120170/cookie-policy
     */
    getCookiePolicyJsonFromUrl(url) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        try {
          // Get cookie policy from iubenda
          const data = yield _this2.legalService.getContentFromFromUrl(COOKIE_PRIVACY_POLICY_ENDPOINT);
          // Add cookie policy to component
          if (data?.content) {
            _this2.cookie_policy = data.content;
          }
        } catch (error) {
          console.error('Error fetching cookie policy:', error);
        }
      })();
    }
    /**
     * Remove class to body to hide privacy policy
     */
    ngOnDestroy() {
      this._document.body.classList.remove('privacy-container');
    }
    static {
      this.ɵfac = function PrivacyPolicyComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_providers_legal_service__WEBPACK_IMPORTED_MODULE_2__/* .LegalService */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .DOCUMENT */ .q));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PrivacyPolicyComponent,
        selectors: [["ng-component"]],
        standalone: false,
        decls: 2,
        vars: 2,
        consts: [[1, "privacy__policy", 3, "innerHtml"], [1, "cookie__policy", 3, "innerHtml"]],
        template: function PrivacyPolicyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "div", 0)(1, "div", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", ctx.privacy_policy, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", ctx.cookie_policy, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
          }
        },
        styles: ["@charset \"UTF-8\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  height: calc(100vh - 11rem);\n  overflow: auto;\n  font-family: inherit !important;\n}\n[_nghost-%COMP%]     h1 {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  padding: 10px 30px;\n  margin: -10px -30px 10px;\n}\n\n.privacy__policy[_ngcontent-%COMP%]   .legal_pp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n  .privacy-container nb-auth-block {\n  max-width: 90%;\n}\n\n  h1 {\n  color: var(--gauzy-text-color-1) !important;\n  font-size: 24px !important;\n  font-weight: 400 !important;\n}\n  h2 {\n  color: var(--gauzy-text-color-2) !important;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n}\n  h3 {\n  color: var(--gauzy-text-color-1) !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n}\n  h4 {\n  color: var(--gauzy-text-color-2) !important;\n  font-size: 13px !important;\n  font-weight: 600 !important;\n}\n  p, \n  li {\n  font-size: 12px;\n  font-weight: 400 !important;\n}\n  .iubenda_fluid_policy h2 {\n  font-size: 17px;\n  font-weight: bold;\n  line-height: 21px;\n  padding-top: 21px;\n}\n  .iubenda_fluid_policy h3 {\n  font-size: 13px;\n  line-height: 19px;\n  font-weight: bold;\n  padding-top: 24px;\n}\n  .iubenda_fluid_policy p {\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 19px;\n}\n  .iubenda_policy .simple_pp > ul > li > ul .iconed {\n  padding-left: 40px !important;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 2px;\n  background-position-y: 26px;\n  background-position: 2px 26px;\n}\n  .iubenda_policy .iconed ul li h3 {\n  padding-top: 10px;\n  color: #615e5e;\n}\n  .iubenda_policy p {\n  font-size: 13px;\n  font-weight: normal;\n  line-height: 18px;\n  margin-bottom: 9px;\n}\n  .iubenda_policy p small {\n  font-size: 11px;\n  color: #bfbfbf;\n}\n  .iubenda_policy h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n  font-weight: bold;\n  color: #59636d;\n}\n  .iubenda_policy h1 {\n  margin-bottom: 18px;\n  font-size: 30px;\n  line-height: 2;\n}\n  .iubenda_policy h1 small {\n  font-size: 18px;\n}\n  .iubenda_policy h2 {\n  font-size: 24px;\n  margin-bottom: 18px;\n  line-height: 1.5;\n}\n  .iubenda_policy h2 small {\n  font-size: 14px;\n}\n  .iubenda_policy h3, \n  h4, \n  h5, \n  h6 {\n  margin-bottom: 9px;\n}\n  .iubenda_policy h3 {\n  font-size: 18px;\n}\n  .iubenda_policy h3 small {\n  font-size: 14px;\n}\n  .iubenda_policy h4 {\n  font-size: 16px;\n}\n  .iubenda_policy h4 small {\n  font-weight: bold;\n  font-size: 13px;\n}\n  .iubenda_policy h5 {\n  font-size: 13px;\n  padding-top: 19px;\n}\n  .iubenda_policy h6 {\n  font-size: 13px;\n  color: #bfbfbf;\n  text-transform: uppercase;\n}\n  .iubenda_policy ul ul {\n  margin: 0;\n}\n  .iubenda_policy ul.styled {\n  list-style: disc;\n  padding-top: 5px;\n}\n  .iubenda_policy ul.styled li {\n  list-style: disc;\n  line-height: 19px;\n  font-size: 13px;\n  margin-left: 30px;\n  margin-top: 2px;\n}\n  .iubenda_policy ol {\n  list-style: decimal;\n}\n  .iubenda_policy ul.unstyled {\n  list-style: none;\n  margin-left: 0;\n}\n  .iubenda_policy dl {\n  margin-bottom: 18px;\n}\n  .iubenda_policy dl dt, \n  dl dd {\n  line-height: 18px;\n}\n  .iubenda_policy dl dt {\n  font-weight: bold;\n}\n  .iubenda_policy dl dd {\n  margin-left: 9px;\n}\n  .iubenda_policy hr {\n  margin: 0 0 19px;\n  border: 0;\n  border-bottom: 1px solid #eee;\n}\n  .iubenda_policy strong {\n  font-style: inherit;\n  font-weight: bold;\n}\n  .iubenda_policy em {\n  font-style: italic;\n  font-weight: inherit;\n  line-height: inherit;\n}\n  .iubenda_policy .muted {\n  color: #bfbfbf;\n}\n  .iubenda_policy blockquote {\n  margin-bottom: 18px;\n  border-left: 5px solid #eee;\n  padding-left: 15px !important;\n}\n  .iubenda_policy blockquote p {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 18px;\n  margin-bottom: 0;\n}\n  .iubenda_policy blockquote small {\n  display: block;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 18px;\n  color: #bfbfbf;\n}\n  .iubenda_policy blockquote small:before {\n  content: \"\u2014\u00A0\";\n}\n  .iubenda_policy address {\n  display: block;\n  line-height: 18px;\n  margin-bottom: 18px;\n}\n  .iubenda_policy code, \n  pre {\n  padding: 0 3px 2px;\n  font-family: Monaco, Andale Mono, Courier New, monospace;\n  font-size: 12px;\n  border-radius: 3px;\n}\n  .iubenda_policy code {\n  background-color: #fee9cc;\n  color: rgba(0, 0, 0, 0.75);\n  padding: 1px 3px;\n}\n  .iubenda_policy pre {\n  background-color: #f5f5f5;\n  display: block;\n  padding: 17px;\n  margin: 0 0 18px;\n  line-height: 18px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n  .iubenda_policy .breadcrumbs {\n  padding: 0 0 10px 0;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #f6f6f6;\n  width: 100%;\n}\n  .iubenda_policy .breadcrumbs > li {\n  float: left;\n  filter: alpha(opacity=50);\n  -khtml-opacity: 0.5;\n  -moz-opacity: 0.5;\n  opacity: 0.5;\n}\n  .iubenda_policy .breadcrumbs > li:not(:last-child):after {\n  color: #333b43;\n  padding: 0 10px;\n  content: \"\u203A\";\n}\n  .iubenda_policy .breadcrumbs + .pills, \n  .breadcrumbs + .sec_tabs {\n  margin-top: -15px;\n}\n  .iubenda_policy .cust_row {\n  display: table-row;\n  margin: 0;\n}\n  .iubenda_policy .column {\n  display: table-cell;\n  vertical-align: top;\n  padding: 30px;\n}\n  .box_primary {\n  box-shadow: var(--gauzy-shadow) 0 0 0/15% !important;\n  border: unset !important;\n  border-radius: var(--border-radius) !important;\n  background: var(--gauzy-card-4) !important;\n}\n  .box_content {\n  border-radius: 4px;\n  padding: 30px;\n}\n  .box_content .iub_content {\n  padding: 30px;\n}\n  .box_content .iub_content > hr {\n  width: 686px;\n  margin-left: -30px;\n  margin-right: -30px;\n}\n  .box_content .aside {\n  width: 191px;\n  padding: 30px;\n}\n  .box_content .aside.aside-right {\n  border-left: 1px solid #dfdfdf;\n}\n  .table > .box_content {\n  padding: 0;\n}\n  .box_10 {\n  padding: 10px;\n  border-radius: 3px;\n  margin-bottom: 15px;\n}\n  .box_10 > h4 {\n  margin-bottom: 0;\n  font-size: 13px;\n}\n  .box_10 > .w_icon, \n  .box_10.expand > .w_icon, \n  .box_10 > .w_icon.expand-click, \n  .box_10.expand > .w_icon.expand-click {\n  padding-left: 45px !important;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 10px;\n  background-position-y: 7px;\n  background-position: 10px 7px;\n}\n  .box_10 > .w_icon_16, \n  .box_10.expand > .w_icon_16, \n  .box_10 > .w_icon_16.expand-click, \n  .box_10.expand > .w_icon_16.expand-click {\n  padding-left: 40px !important;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 11px;\n  background-position-y: 11px;\n  background-position: 11px 11px;\n}\n  .box_10 > .w_icon_24, \n  .box_10.expand > .w_icon_24, \n  .box_10 > .w_icon_24.expand-click, \n  .box_10.expand > .w_icon_24.expand-click {\n  padding-left: 45px !important;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 10px;\n  background-position-y: 10px;\n  background-position: 10px 10px;\n}\n  .box_5 {\n  padding: 5px;\n  border-radius: 3px;\n  font-size: 11px;\n  margin-bottom: 15px;\n}\n  .box_5 hr {\n  padding-top: 5px;\n  margin: 0 -5px 5px -5px;\n  border: 0;\n  border-bottom: 1px solid #ac3737;\n}\n  .box_5.w_icon_16 {\n  padding-left: 30px !important;\n  background-repeat: no-repeat;\n  background-position-x: 8px;\n  background-position-y: 6px;\n  background-position: 8px 6px;\n}\n  .box_5.w_icon_16 hr {\n  width: 100%;\n  padding-left: 30px !important;\n  padding-right: 5px;\n  margin-left: -30px;\n  margin-right: -5px;\n}\n  .box_5.w_icon_16.red {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAATlBMVEUAAAD%2F%2F%2F8AAAD%2F%2F%2F8AAAAAAAD%2F%2F%2F%2F%2F%2F%2F%2FT09P%2F%2F%2F%2F9%2Ff3Y2Nj9%2Ff39%2Ff3d3d3%2F%2F%2F%2F8%2FPz39%2Ff19fX%2B%2Fv79%2Ff34%2BPj5%2Bfn8%2FPz9%2Ff3%2F%2F%2F8ZO4GEAAAAGXRSTlMAEB0gMDNAUHSAgYSRoaWwsra3weLl5fLyUJhrdwAAAF1JREFUeF6NzUcWhCAAwFAQsIPOWCD3v6gPxLYjy7%2BJKE1Ok%2FxAD%2BMbFIB6wYIxLA%2FUbEJAc8PKHmG9oAOkArq8DICdgXCuLUA7EDkBsd%2BfWALnyXmXoNImpytR0AEwdQcUE5t8VQAAAABJRU5ErkJggg%3D%3D);\n}\n  .box_thumb {\n  background: #fff;\n  box-shadow: 0 0 1px #a3a3a3, 0 1px 1px #a3a3a3;\n  padding: 6px;\n}\n  footer {\n  margin-top: 17px;\n  padding-top: 17px;\n  border-top: 1px solid #eee;\n}\n  hr {\n  padding-top: 15px;\n  margin: 0 0 15px 0;\n}\n  hr.primary {\n  border: 0;\n  border-bottom: 1px solid #dfdfdf;\n  box-shadow: 0 1px 0 #f7f7f7;\n}\n  .blue {\n  color: #fff;\n  background-color: #0073ce;\n}\n  .yellow {\n  color: #6d693d;\n  background-color: #ffd24d;\n}\n  .red {\n  color: #fff;\n  background-color: #ff5d4d;\n}\n  .red a, \n  .red a:hover:not(.btn) {\n  color: #fff;\n}\n  .red a {\n  border-bottom-color: rgba(247, 247, 247, 0.3);\n}\n  .red a:hover {\n  border-bottom-color: rgba(247, 247, 247, 0.6);\n}\n  .green {\n  color: #4d6c47;\n  background-color: #f1ffd5;\n}\n  .iubgreen {\n  color: #ffffff;\n  background-color: #1cc691;\n}\n  .azure {\n  color: #364048;\n  background-color: #d2ecfe;\n}\n  .white {\n  color: #54616b;\n  background-color: #f8f8f8;\n}\n  .black {\n  color: #fff;\n  background-color: #333333;\n}\n  .trasp {\n  color: #333b43;\n  background-color: #ffffff;\n}\n  .fade {\n  transition: opacity 0.15s linear;\n  opacity: 0;\n}\n  .fade.in {\n  opacity: 1;\n}\n  .expand-click {\n  cursor: pointer;\n  position: relative;\n}\n  .box_10.expand .expand-click {\n  margin: -10px;\n  padding: 12px 25px 13px 10px;\n}\n  .box_10.expand .expand-content {\n  margin-top: 10px;\n}\n  .box_10.expand .expand-content > *:first-child {\n  margin-top: 0;\n  padding-top: 0;\n}\n  .expand.expanded .expand-click:after, \n  .box_10.expand.expanded .expand-click:after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  top: 19px;\n  border: 5px;\n  border-color: transparent;\n  border-style: solid;\n  border-top-color: #333b43;\n}\n  .expand .expand-click, \n  .box_10.expand .expand-click, \n  .expand.expanded .expand-click, \n  .box_10.expand.expanded .expand-click {\n  border-bottom: 1px dotted #ddd;\n  margin-bottom: 10px;\n  transition: 0.2s linear all;\n}\n  .expand.collapsed .expand-click {\n  border-bottom: 0;\n  margin-bottom: -10px;\n}\n  .expand.collapsed .expand-click:after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  top: 17px;\n  border: 5px;\n  border-color: transparent;\n  border-style: solid;\n  border-right-color: #333b43;\n}\n  .all-collapsed .expand .expand-click:after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  top: 17px;\n  border: 5px;\n  border-color: transparent;\n  border-style: solid;\n  border-right-color: #333b43;\n}\n  .all-collapsed .expand .expand-click {\n  border-bottom: 0;\n  margin-bottom: -10px;\n}\n  .all-collapsed .expand-content {\n  display: none;\n}\n  .iub_container-fluid {\n  position: relative;\n  min-width: 940px;\n  padding-left: 20px !important;\n  padding-right: 20px;\n  zoom: 1;\n}\n  .iub_container-fluid:before, \n  .iub_container-fluid:after {\n  display: table;\n  content: \"\";\n  zoom: 1;\n  display: inline;\n}\n  .iub_container-fluid:after {\n  clear: both;\n}\n  .iub_container-fluid > .sidebar {\n  float: left;\n  width: 220px;\n}\n  .iub_container-fluid > .iub_content {\n  margin-left: 240px;\n}\n  .iubenda_policy a {\n  text-decoration: none;\n  font-weight: bold;\n  border-bottom: 1px solid #f6f6f6;\n  color: #333b43;\n}\n  .iubenda_policy a.unstyled {\n  border-bottom: 0;\n}\n  .iubenda_policy a:hover:not(.btn) {\n  color: #121518;\n  border-bottom-color: #d6d6d6;\n  transition: 0.1s linear all;\n}\n  .iubenda_policy a:focus {\n  outline: none;\n}\n  .iubenda_policy a.no_border, \n  a.no_border:hover {\n  border-bottom-width: 0;\n}\n  .iubenda_policy .pull-right {\n  float: right;\n}\n  .pull-left {\n  float: left;\n}\n  .hide {\n  display: none;\n}\n  .show {\n  display: block;\n}\n  .link_on_dark a {\n  border-bottom-color: rgba(247, 247, 247, 0.3);\n}\n  .link_on_dark a:hover {\n  border-bottom-color: rgba(247, 247, 247, 0.6);\n}\n  [class*=policyicon_] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAGFBMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz9%2BjSc3AAAAB3RSTlMAEEBQgMzQxeXuPgAAADJJREFUGFdjYMAJWEPhIAAPh70cDgoGK6cI5B8Yp6S8TACJk4gkA5RAcBKR9BQLoAUOAATNYYOCulUNAAAAAElFTkSuQmCC);\n}\n  .policyicon_pdt_68 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz%2F10LmwAAAAEHRSTlMAECAwQFBgcICQoLDA0ODwVOCoyAAAAKVJREFUeF51jlmWwyAMBGXEboT6%2FqedIZAAJqnfer3QJKpGOrkKakW5noIrAlFA5V0EKL%2B8Iqw1d%2B%2FojflTx4JlNUJGnVe1tOBUfRMZYmjDCDKRINFBglCLnXiltnTClfAtEgACxvHJldHF4xYL3gLq1l1Mgfk5AZtQx%2FYfdroL4TySXFeRWTAQc0%2Fhe0FHbRiicsJGZG3iNgUPiimgYBUHlQP94g9%2BZg8xOTGEFAAAAABJRU5ErkJggg%3D%3D);\n}\n  .policyicon_purpose_5 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAElBMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz%2BtTDCxAAAABXRSTlMAECBAgLf%2B2%2BsAAABGSURBVBhXY2AAA5ZQBwY4YA0NIJfjCjYHygkNDUTmBGPhgOyFc1iB6pE4wSAOUAGCIxoaiOCYhgYjOKqhQThkyODAAR4OAI98N9LK6tL3AAAAAElFTkSuQmCC);\n}\n  .policyicon_purpose_7 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz%2F10LmwAAAAEHRSTlMAECAwQFBgcICQoLDA0ODwVOCoyAAAAINJREFUeF6V0UsOxCAIBmB8tVoZ4f6nnUqaoFUW%2FVeEj0hUMOKM9kE7CBcxr93SuGcCf%2FRZniCmXGVUwZV2M78DgYRXQDaAP0OzIJIB4C%2FaQo%2BTCyK9ISFizimAPyuNACjlKXW6SMF30B9I9YFndRieuZCCHKU0QIU1LDEhrvDrQG6EP%2FDZElAL0vLHAAAAAElFTkSuQmCC);\n}\n  .policyicon_purpose_9 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAACC0lEQVQ4y7XSO2gWVhQH8BPxDRG%2BEhurMcSI4GsoPqjkZ6BLwcFFHUQJKqbEwRciDqZDF90cpIsILtZHh0KTIdQMgkTRiIshBoWgTRpbsVaxgqRf4uM4JCHfRzpIwXun8%2Bf%2BuHDOifj%2FxwoD2qek7Qat%2FG9Qr1%2FblLRNv%2FqyqKHCjIgIqw3oGE9mmtlQERGhw4DVERFmNFREhG91uq6gxUspnVdlky5dNqlyXkovtSi4rtPe8JeUaq1yWLN9tkVoklJThK1a7HXISrVSehpSGrXb5woWqFZljZNSOmmtBRapUe0Lu4xKOQZSr0633dejS7chKQ25p0%2BvHn3u6Bt7OQFSeuWG3pI6DbvpZ5dc8WwimwTPbYswx49Sei89sDNCpaoI6%2FyqWA5OmxUR4StF6Z0hX5puvyH%2FOmeeudrLwXfjg1prUCo6FuGyty444W89CpYZKQU%2FmF3ywwvVthtxwpwImz1yzjSdpWBYq2nWuzbWoQgX%2FaPOAd%2Br1O55hDOl4LHdDRXqnPVWehLhlPSNgiURFlof4adJMGC7eRERarRKr32t2qBn9lhlg%2BVq7fDbJDhasp%2BfueW9brOscdULv7vntlselnZpadlKH5fSRYvN16ytdJgT4KBGGzVqtNFmv4yndzWrt8WjqSCNGFZUNOxN2Xq8K6%2FD47Et%2FKg7ajAc9edHgz8ciU9%2BPgBKt4%2FTzlslzAAAAABJRU5ErkJggg%3D%3D);\n}\n  .policyicon_purpose_10, \n  .policyicon_purpose_15 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz%2F10LmwAAAAEHRSTlMAECAwQFBgcICQoLDA0ODwVOCoyAAAAKVJREFUeF51jlmWwyAMBGXEboT6%2FqedIZAAJqnfer3QJKpGOrkKakW5noIrAlFA5V0EKL%2B8Iqw1d%2B%2FojflTx4JlNUJGnVe1tOBUfRMZYmjDCDKRINFBglCLnXiltnTClfAtEgACxvHJldHF4xYL3gLq1l1Mgfk5AZtQx%2FYfdroL4TySXFeRWTAQc0%2Fhe0FHbRiicsJGZG3iNgUPiimgYBUHlQP94g9%2BZg8xOTGEFAAAAABJRU5ErkJggg%3D%3D);\n}\n  .policyicon_purpose_13 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAJ1BMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz9PhkGkAAAADHRSTlMAECBAUHCQoLDA4PB7ua%2BoAAAAa0lEQVR42p3QQQ6AIAxE0aEIFdr7n1eMxIAOMfEt%2B9sF4IOkYt5YSTKO1Qd6p%2BQP6Zqrvyjd7zdiLJggO5VReajwhR%2FBnDIoDwrhQcAfkhd%2FtQO0KDqf1A0kmEZgDjk2AZPzPoJo6wFEYOsHFFISOn%2BKxfoAAAAASUVORK5CYII%3D);\n}\n  .policyicon_purpose_14 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz%2Fjai5RAAAAD3RSTlMAECAwUGBwgJCgsMDQ4PASl6hyAAAAfklEQVR42pXRUQ6EMAgE0MEWW21l7n9btanJWnE3%2Bz4hhCHgq5jKooKD6FJS7OVQebIIROOphlY3dqrsLABidJgg0ZWw0bWBL%2F5vvO%2FIdGVM%2Fh0TMNMx47DwYcVJKgdV0MgwUwSXfA%2F0QY2dKW7CxutHA1lbHMFTavE9qsBvOztlFTRVyS%2BYAAAAAElFTkSuQmCC);\n}\n  .policyicon_purpose_16 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAM1BMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz%2F10LmwAAAAEHRSTlMAECAwQFBgcICQoLDA0ODwVOCoyAAAAJFJREFUeF6V0NsOAyEIRVE6I4rFwvn%2Fr63N3CR10nQnPK2IUdpbpKmsorJQqOKTl2xeRhDsycMgA7QDGkmfq9cI%2FvNEhGcAO8CowAbAGTEwX1XDKvYNnJM7f78clVqfydOlgwRIG6S1TwDdQEnD3cv1iWw4f54VQ1qfUO5QDDGYVLNCmOQ5O2Ea8R2kP8FWobvefhoT%2FSVCMbAAAAAASUVORK5CYII%3D);\n}\n  .icon_ribbon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAW0lEQVR42u3OwQkAIQxE0XSWVrazlJpdQdGDC0pQEf7A3ELmibsPV1V9pDM%2FAQAAAAAAAAAAAAAAEAXY1%2BcUwCQnITYD6niL2ASo4z3EaoDKf8qNBQHxArgK8ALKMXCw%2Bim7vwAAAABJRU5ErkJggg%3D%3D);\n}\n  .icon_owner {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz%2Fjai5RAAAAD3RSTlMAECAwQGBwgJCgsMDQ4PC8YWy5AAAAiElEQVR42o2QwRKFIAhFIcwyRP7%2Fb3uNlkBv0dkw3jODd4AbPHhNC7xAafqjYBRZOzUa0cHmc9IbiZsefIFtiuQ68RS7FUkNnwTWmRewLE9ewSPh73dfCgJbzxkiRxcrDGJhWVxa5MqYr1HzcLSPRo2ojcoZAcyV2F1MzaPoxIqcP4gGkP5BcAIxQBCQ7o5t3AAAAABJRU5ErkJggg%3D%3D);\n}\n  .icon_general {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAGFBMVEUAAAA%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz8%2FPz9%2BjSc3AAAAB3RSTlMAEEBQgMzQxeXuPgAAADJJREFUGFdjYMAJWEPhIAAPh70cDgoGK6cI5B8Yp6S8TACJk4gkA5RAcBKR9BQLoAUOAATNYYOCulUNAAAAAElFTkSuQmCC);\n}\n  .icon_temple_24 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABwklEQVR42s3Wu0vDUBjGYS%2BLsbZSSaWgguAFHFztYEmFbp0E%2FwOrgotQFyetOKiTLqKCWCenbl20S8FFERydBLt1KV7QwUGR4094hQymjYpi4SGH9zvf%2BUgCoQ3GmF%2F1dwNq%2FRzHaUwkEn24lP73rEaL%2FwEcZmEcJexiDyfKrG8P0OG9OIDBrCvPKMuh98sDaApiAmWYj8fiqg%2FjSrWy9gbrDlDzEHIwLi9YRieiWMOrakIPvZ4DKHYhjTsYD%2Be48Kqrdwpdnw1I4RAFbCKHHWxhX%2BtjHGFb2ZbynHoKOiNV7x3YrnWLrmFFWqvm6vH7DmK4ho0l5NGGCialoiyvPbZ6Yn4GOHhCFBsoIQSDOTHKStoTVY%2FjZ0Act7CxiiICqGJaqsqK2mOrJ%2F6VARGs6ZA2ZTNyq6yoPZF%2FNWC0xiOaEq9HNOpnQBIG3djFGcLKFsQoO8UOepQl%2FQyIIKtP9BjSylcwghhWlKWR0N4sIp4D1NCKDgR0DSIEGxbCYikLibvH8voWNWMdD6jiEXe4waOye1GdGntc9Qcso8nrDtoxgEFdIcp81INed7CIBWQw%2F00ZnbH42YAXef4RnfNn%2FyreALybXwSLU3v7AAAAAElFTkSuQmCC);\n}\n  .icon_box_24 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABv0lEQVR42t3Vz0uTcRzAcUMyWhmWdAgqkKDMiBHt0A%2FYsploddwpO1gk0l%2BQEEQU0iUPgd0LIpCOCh2KkG4GTaI6mqAmWhG0CQ5jfXsdntN4bJPRxS%2B84IFnz%2Ff97Nl4Pg0hhP9qkwT%2BtTKZTCN7uM0qeTrZuc4ltQVs0EqK%2B3xmigc8Z5E39HOI7TUFfHAbJxngNQtM0kdzg5VOp7c4TvKYeeZ4wmXaYgNONHGcW7zjA6Mkqzy%2BZq4zzgxj5DhcGUgxwzSZ9TasEtvFCL%2F4WBm4SKDAPXrZV%2BPGWznFVSYIhMpAliILhEieO5ynMWbjDgZ4xjxlAn%2FiAt0skeMG44TIT8boo51zDPOeEqFSXKAnCrRHd5fgNMN8IrDCFLOUCVB74CsdZBlkL03s5xG%2FCcAGA73M0cIViswyQisn%2BFZPoIdljkWP6AIvKDFIiuV6Al2s8JIciSh0hqNk%2BVHvNwiRNd5ylwNRqKvewNnYv1z0O%2FCQ7xsIFCsDCS4xyhKhwiprhCqmGaIz%2Fm0qxBGu8YoCoYpFntLNwbS3ba3zYDdJhshTohwpMEE%2FbeyoMg%2BqTrQWbvKFSSxDJn5tsqH%2FF0QW2NxzTlYFAAAAAElFTkSuQmCC);\n}\n  .icon_tools_24 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABdklEQVR42rXVzyuDcRzA8WU3ctOag0RiO5mEg8MKcaJc%2FAlcdxppKPlZdpeTE0dqxZWaaEnh7DShlYuJbG0f78Nz%2BPj2zfM89Wz1qmff5%2FPdu%2B27tpCINNTfJzySyeQGhkPGg7UljBtrEbxDMOkaYCiKJ8QtgR0cGWt9EMe8l8AIBAOWwCGKxtqMCux5CSRQxyW61QtNo4yCEVhWgRzCboFm5CF4xTVuUYUgZQTOVeAZHV4OeRSfEMMFWoxAVt2%2FQtQ14Gzsx43anEWr5Vx61Eza9Qz%2B%2BXw71S09M6hm1v0GVtXmWCMCa2pz3BpgXc1kAg2w1oW0mjnGRJCBOYjhLshAO96MQCroM3hQMzUMBfkOZvEDUU78BFbUxl5LYBdiqPgJbKmNCUtg2xL48PpTMYVvFFDEPdqCDDwi51xHIVi0%2FAGJoew18IJ957oJFWx6CHx5DSygjgPkUULM8i2qGoFTP4ecgaCEMcshh5FFDYIzRGyBhvoF3n%2ByMxzF1ykAAAAASUVORK5CYII%3D);\n}\n  .icon_paper_24 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABYklEQVR42t3VP0vDQBjH8Tq4SKXiWFwcRHARVyspgq9AOjkoLoKTcymk%2BjKKYDcnO6iLKPgHRJ11aVGkgt2M2IiWlobzKzyB4zBwBGvBwIdc7rnjR8ITLqGU6qm%2FC8hms%2Bo39TWgg0fUUJX7PV7RlVo1Qtsm4Ckhl%2BM4A%2BGY%2BQJ8TCYiLmp1m4AHWbyGa%2BxiFEtQMneIY80RTtCyCahJwDpOsYc0FtHGDS5wbjjDp03AM6aRRhIpTGAbH5jBEJIm208UwMcbmuIFHam34KEZ0tYGNgEeXFEUW9jAKvLYRFHjCs8moIEMZpHRxnNwzJrx3Oj%2Fj2a%2BQbT4b%2BDBjcmz6iK9M6LF76I6UnHY%2Fgc%2BythB2YK%2B1tcC%2Ful54COPMeT0tsMBxsW%2B0dY52VPAe1RAgAoGw7OA8QoUbvVzgPEU7qS2HJ4b33tRQfBTQBcl4wBZgMIlhrX5EVxJbd7YU0JXD%2BipLw8sG8DBrCLzAAAAAElFTkSuQmCC);\n}\n  .icon_man_24 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABLUlEQVR42t3VsUrDUBSAYaWtSwSp6NAH6CbOVSHZ9QEEBx9AEPc6OAh9Bp0KDg6igqs4tktXFQQnKQiKiNRAp%2BT4C2cImqbXc3Fp4VsazvlpuUmmRORfTUig6BNFURnbeISoB2yhlDPiHvhegF18Qn74wA5KPoE13EFGuEXDFGBwBoeQMQ5QsQSqOHUInGDOEljElUPgEguWwDzOHQJnqFoCszh2CBwhsAQq2EdSsDxFE2XrMV3HS0HgFRs%2B90ENNwWBa9TMgTAMp%2FWR8J6z%2FA2bXo8K%2FRXLuB9xFy%2BZAwwHWMUF4pxArNdWnE%2BRLm2ghS76SMecoj66aOls8CvAl3XsoYNnDCF%2FNNTZju6qZwO93L%2FBLkYvGxggVeIpVYNsoI0nJBBPie5qT8ZL%2FwsLLryq%2FnnTDAAAAABJRU5ErkJggg%3D%3D);\n}\n  .icon_keyhole_24 {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABIUlEQVR42rXUP0vCQRjA8bIoiAppLmwQEmehSX5RLTb2Huw9RGODLvUCXG0Kp16ALhENNRjRXLRlIeafJOyevkNu14M89%2FPgMx133%2BF4bkZEpkrdHK8oipIoowuHK2QxGxzgkk1cYgD3R9BEAQlzgMOruMA3xOMZuZDAEToQxRkWrYEHOIiiibQ1IBMEOtixBn4mCLSRtwbqIKIGbrFhDRzgA6I4xpw1kMA5ep6LHa6RCh20ddx4Aq%2FYj2OSF1D3BJ6QjCOQwosn8IbtOAK7%2BPQEvlAcf3ghj1zE4J9HrmApJDCPkvLZ3WMtJLCCmjLNLWRCAmk8KkPWxyHMgQLaSmCIk5BJPkVfCYxQxbI10MBQCTjcYcsaeMcIomhhTwtM1S9g12NLa1YPRQAAAABJRU5ErkJggg%3D%3D);\n}\n  .iub_base_container {\n  border-radius: 3px;\n  background: #ffffff;\n  color: #6b6b6b;\n  position: relative;\n}\n  .iub_base_container > .close {\n  background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAMAAAAmopZHAAAAw1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4eHh1dXUAAAAAAAAAAAAAAAAAAABfX18AAAAAAAAAAAAAAAAAAAAAAAA2NjYAAAAAAAArKyvJycne3t7X19eFhYWxsbGVlZWsrKzr6%2BvLy8vJycnv7%2B%2Fp6enS0tLi4uL09PTv7%2B%2F8%2FPz7%2B%2Fv4%2BPj39%2FcAAABPT09fX19vb2%2F%2F%2F%2F9S%2BfXQAAAAPHRSTlMAAgMEBQYHCgsMDQ4PEhMWGRobHB8gIiMkJScoKSs0NT1DRUpMWF5gjpOYmaGjpr%2FIys3S1dnZ7vP09vfFQC13AAAA9ElEQVR42oXQZ6%2BCMBiG4aeCAoqiuPceuPes8P7%2FX6Xn5RgBTbw%2BNO3dpG2KH0RcM5JJQ4uLUE2UnSM9HZ1y4r0TM50z%2FTs7ZuyVSysKWJX8DZHeUsg2zUfpU4qY6gBE8xLtl6YAtAnP79Ij8uSdFxMNsHY8lVK67nPgxc4CisQ8yTxiRaBGPvcvu%2BSrAY1vvQHUv51TByqHz3sPFcCef75zbgOpwZUiroMUoFSX0b6sKgDMzjqc1x2Tvznb2wTzppf1P1q1u7PTq55mXVuFT7Va48X%2BRnTbL8YtizMTRqHdH45Gw367YAgEKHoml8%2FnMroC9gCKfVabzD1q%2BwAAAABJRU5ErkJggg%3D%3D) no-repeat;\n  border: none;\n  display: block;\n  position: absolute;\n  z-index: 110;\n  top: -10px;\n  right: -9px;\n  height: 24px;\n  width: 23px;\n}\n  .iubenda_policy a {\n  font-weight: normal;\n  border-bottom: 1px solid #f0f0f0;\n}\n  .iub_content {\n  position: relative;\n  padding: 10px 30px;\n  margin: 0 auto;\n  border-radius: 3px 3px 0 0;\n}\n  #wbars {\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n  #wbars .horizontal {\n  display: none;\n}\n  .iub_header {\n  border-bottom: 1px dotted #dfdfdf;\n  padding-bottom: 25px;\n  position: relative;\n}\n  .iub_header p {\n  margin: 0;\n  padding: 0;\n}\n  .iub_header img {\n  display: block;\n  position: absolute;\n  top: 5px;\n  right: 0;\n}\n  h1, \n  h2, \n  h3 {\n  color: #3f3f3f;\n  margin: 0;\n}\n  h1 + p, \n  h2 + p, \n  h3 + p {\n  padding-top: 5px;\n}\n  h1 {\n  font-size: 19px;\n  font-weight: normal;\n  line-height: 23px;\n  margin-bottom: 5px;\n}\n  h2 {\n  font-size: 17px;\n  font-weight: bold;\n  line-height: 21px;\n  padding-top: 21px;\n}\n  h3 {\n  font-size: 13px;\n  line-height: 19px;\n  font-weight: bold;\n  padding-top: 24px;\n}\n  h3 + p {\n  padding-top: 0;\n}\n  .iconed ul li h3 {\n  padding-top: 10px;\n  color: #615e5e;\n}\n  h4 {\n  font-size: 13px;\n  font-weight: bold;\n  padding-top: 19px;\n  margin-bottom: 0;\n}\n  h4:first-child {\n  padding-top: 0;\n}\n  ul.for_boxes, \n  ul.for_boxes > li, \n  ul.unstyled, \n  ul.unstyled > li {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n  ul.for_boxes {\n  zoom: 1;\n}\n  ul.for_boxes:before, \n  ul.for_boxes:after {\n  display: table;\n  content: \"\";\n  zoom: 1;\n  display: inline;\n}\n  ul.for_boxes:after {\n  clear: both;\n}\n  .half_col {\n  float: left;\n  width: 50%;\n  zoom: 1;\n}\n  .half_col:before, \n  .half_col:after {\n  display: table;\n  content: \"\";\n  zoom: 1;\n  display: inline;\n}\n  .half_col:after {\n  clear: both;\n}\n  .half_col:nth-child(2n+1) > * {\n  margin-right: 15px;\n}\n  .half_col:nth-child(2n) > * {\n  margin-left: 15px;\n}\n  .half_col + .one_line_col, \n  .half_col + .iub_footer {\n  border-top: 1px dotted #dfdfdf;\n}\n  .one_line_col {\n  zoom: 1;\n  float: left;\n  width: 100%;\n  border-bottom: 1px dotted #dfdfdf;\n}\n  .one_line_col:before, \n  .one_line_col:after {\n  display: table;\n  content: \"\";\n  zoom: 1;\n  display: inline;\n}\n  .one_line_col:after {\n  clear: both;\n}\n  .one_line_col > ul.for_boxes > li {\n  float: left;\n  width: 50%;\n}\n  .one_line_col > ul.for_boxes > li:nth-child(2n+1) {\n  clear: left;\n}\n  .one_line_col > ul.for_boxes > li:nth-child(2n+1) > div {\n  margin-right: 15px;\n}\n  .one_line_col > ul.for_boxes > li:nth-child(2n) {\n  clear: right;\n}\n  .one_line_col > ul.for_boxes > li:nth-child(2n) > div {\n  margin-left: 15px;\n}\n  .one_line_col.wide {\n  width: 100%;\n}\n  .one_line_col.wide > ul.for_boxes > li {\n  clear: both;\n  width: 100%;\n}\n  .one_line_col.wide > ul.for_boxes > li:nth-child(2n+1) > div {\n  margin-right: 0;\n}\n  .one_line_col.wide > ul.for_boxes > li:nth-child(2n) > div {\n  margin-left: 0;\n}\n  ul.normal_list {\n  list-style: disc;\n  display: block;\n  padding-top: 11px;\n}\n  ul.normal_list li {\n  list-style: disc;\n  float: none;\n  line-height: 19px;\n  margin: 5px 25px;\n}\n  .simple_pp > ul > li {\n  padding-bottom: 21px;\n}\n  .simple_pp > ul > li > ul .iconed {\n  padding-left: 40px !important;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 2px;\n  background-position-y: 26px;\n  background-position: 2px 26px;\n}\n  .simple_pp .for_boxes > .one_line_col > ul.for_boxes {\n  margin-top: 0;\n}\n  .legal_pp .one_line_col {\n  float: none;\n  border-top: 0;\n  padding-bottom: 21px;\n}\n  .legal_pp .one_line_col > ul.for_boxes {\n  margin-top: 21px;\n}\n  .legal_pp .one_line_col > ul.for_boxes > li:nth-child(2n+1) {\n  clear: left;\n  float: left;\n}\n  .legal_pp .one_line_col > ul.for_boxes > li:nth-child(2n) {\n  float: right;\n  clear: right;\n}\n  .legal_pp .definitions {\n  margin-top: 21px;\n}\n  .legal_pp .definitions .expand-click.w_icon_24 {\n  margin-top: -11px;\n  padding: 14px 10px 12px 45px;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 5px;\n  background-position-y: 0;\n  background-position: 5px 0;\n}\n  .legal_pp .definitions .expand-content {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n  .wrap p {\n  display: inline-block;\n}\n  .iub_footer {\n  clear: both;\n  position: relative;\n  font-size: 11px;\n}\n  .iub_footer p {\n  font-size: 11px;\n  padding: 0;\n}\n  .iub_content .iub_footer {\n  padding: 24px 0;\n}\n  .iub_content .iub_footer p:last-of-type {\n  margin: 10px 0;\n  clear: both;\n}\n  .iub_content .iub_footer .show_comp_link {\n  display: block;\n  float: right;\n}\n  .iub_container > .iub_footer {\n  min-height: 21px;\n  background-color: #f6f6f6;\n  color: #717171;\n  padding: 30px;\n  box-shadow: 0 -1px 6px #cfcfcf;\n  border-radius: 0 0 3px 3px;\n}\n  .iub_container > .iub_footer > .btn {\n  position: absolute;\n  top: 25px;\n  right: 30px;\n}\n  .iub_container > .iub_footer .btn {\n  padding: 0px 24px;\n  line-height: 29px;\n}\n  .iub_container > .iub_footer .button-stack {\n  margin: -4px 0;\n}\n  .iub_container > .iub_footer .button-stack .btn + .btn {\n  margin-left: 5px;\n}\n  .iub_container > .iub_footer img {\n  margin: -4px 3px 0;\n  vertical-align: middle;\n  width: 70px;\n  height: 25px;\n}\n  .wide {\n  width: 150px;\n}\n  .iubenda_fixed_policy .iub_base_container {\n  max-width: 800px;\n}\n  .iubenda_fixed_policy .iub_container {\n  margin-left: auto;\n  margin-right: auto;\n  zoom: 1;\n}\n  .iubenda_fixed_policy .iub_container:before, \n  .iubenda_fixed_policy .iub_container:after {\n  display: table;\n  content: \"\";\n  zoom: 1;\n  display: inline;\n}\n  .iubenda_fixed_policy .iub_container:after {\n  clear: both;\n}\n  .iubenda_fluid_policy #wbars {\n  overflow-y: auto;\n  box-shadow: none;\n  height: auto;\n}\n  .iubenda_fluid_policy .iub_container {\n  margin-bottom: 30px;\n}\n  .iubenda_fluid_policy .half_col:nth-child(2n+1) > * {\n  margin-right: 0;\n}\n  .iubenda_fluid_policy .half_col:nth-child(2n) > * {\n  margin-left: 0;\n}\n  .iubenda_fluid_policy .one_line_col, \n  .iubenda_fluid_policy .half_col {\n  width: 100%;\n}\n  .iubenda_fluid_policy .one_line_col > ul.for_boxes > li, \n  .iubenda_fluid_policy .half_col > ul.for_boxes > li {\n  clear: both;\n  width: 100%;\n}\n  .iubenda_fluid_policy .one_line_col > ul.for_boxes > li:nth-child(2n+1) > div, \n  .iubenda_fluid_policy .half_col > ul.for_boxes > li:nth-child(2n+1) > div {\n  margin-right: 0;\n}\n  .iubenda_fluid_policy .one_line_col > ul.for_boxes > li:nth-child(2n) > div, \n  .iubenda_fluid_policy .half_col > ul.for_boxes > li:nth-child(2n) > div {\n  margin-left: 0;\n}\n  .iubenda_embed_policy .iub_base_container {\n  background: none;\n}\n  .iubenda_embed_policy .iub_container > .iub_footer {\n  box-shadow: none;\n  border-radius: none;\n}\n  .iubenda_embed_policy .expand-click {\n  cursor: default;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .iub_base_container {\n  color: #666;\n}\n  .iubenda_vip_policy.iubenda_terms_policy h2 {\n  font-size: 24px;\n  padding-top: 50px;\n}\n  .iubenda_vip_policy.iubenda_terms_policy h3 {\n  color: #444;\n  font-size: 20px;\n  padding-top: 45px;\n}\n  .iubenda_vip_policy.iubenda_terms_policy h4 {\n  font-size: 16px;\n  padding-top: 40px;\n  color: #555;\n}\n  .iubenda_vip_policy.iubenda_terms_policy h5 {\n  font-size: 14px;\n  padding-top: 35px;\n  margin-bottom: 0;\n  color: #666;\n}\n  .iubenda_vip_policy.iubenda_terms_policy h6 {\n  font-size: 12px;\n  color: #505050;\n  text-transform: uppercase;\n  padding-top: 32px;\n  margin-bottom: 0;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .definitions {\n  margin-top: 60px !important;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .definitions .expand-content {\n  padding: 25px 15px !important;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .definitions .expand-content h4 {\n  font-size: 15px !important;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .definitions:before {\n  content: \"\";\n  border-top: 1px dotted rgba(0, 0, 0, 0.1);\n  display: block;\n  margin: 0 -10px;\n  position: relative;\n  top: -45px;\n}\n  .iubenda_vip_policy.iubenda_fixed_policy .iub_container {\n  max-width: 660px;\n  padding-top: 80px;\n}\n  .iubenda_vip_policy .iub_base_container {\n  color: #6b6b6b;\n}\n  .iubenda_vip_policy p {\n  font-size: 14px;\n  line-height: 1.6;\n}\n  .iubenda_vip_policy .allcaps, \n  .iubenda_vip_policy p.allcaps, \n  .iubenda_vip_policy ul.allcaps li {\n  font-variant: small-caps !important;\n  font-weight: bold !important;\n  font-size: 16px !important;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif !important;\n}\n  .iubenda_vip_policy ul li {\n  font-size: 14px;\n  line-height: 1.6;\n}\n  .iubenda_vip_policy h1 {\n  font-size: 30px;\n  color: #141414;\n  line-height: 1.6;\n  margin-bottom: 60px;\n}\n  .iubenda_vip_policy h2 {\n  font-size: 18px;\n  color: #141414;\n  line-height: 1.6;\n  padding-top: 50px;\n  padding-bottom: 15px;\n}\n  .iubenda_vip_policy h3 {\n  color: #141414;\n  font-size: 16px;\n  line-height: 1.6;\n  margin-bottom: 10px;\n}\n  .iubenda_vip_policy .legal_pp .one_line_col {\n  padding-bottom: 50px;\n}\n  .iubenda_vip_policy .half_col:nth-child(2n+1) > * {\n  margin-right: 0;\n}\n  .iubenda_vip_policy .half_col:nth-child(2n) > * {\n  margin-left: 0;\n}\n  .iubenda_vip_policy .one_line_col, \n  .iubenda_vip_policy .half_col {\n  width: 100%;\n}\n  .iubenda_vip_policy .one_line_col > ul.for_boxes > li, \n  .iubenda_vip_policy .half_col > ul.for_boxes > li {\n  clear: both;\n  width: 100%;\n}\n  .iubenda_vip_policy .one_line_col > ul.for_boxes > li:nth-child(2n+1) > div, \n  .iubenda_vip_policy .half_col > ul.for_boxes > li:nth-child(2n+1) > div {\n  margin-right: 0;\n}\n  .iubenda_vip_policy .one_line_col > ul.for_boxes > li:nth-child(2n) > div, \n  .iubenda_vip_policy .half_col > ul.for_boxes > li:nth-child(2n) > div {\n  margin-left: 0;\n}\n  .iubenda_vip_policy .definitions, \n  .iubenda_vip_policy .iub_footer, \n  .iubenda_vip_policy .for_boxes {\n  color: #59636d;\n}\n  .iubenda_vip_policy .definitions h3, \n  .iubenda_vip_policy .iub_footer h3, \n  .iubenda_vip_policy .for_boxes h3, \n  .iubenda_vip_policy .definitions p, \n  .iubenda_vip_policy .iub_footer p, \n  .iubenda_vip_policy .for_boxes p, \n  .iubenda_vip_policy .definitions li, \n  .iubenda_vip_policy .iub_footer li, \n  .iubenda_vip_policy .for_boxes li {\n  font-size: 13px;\n}\n  .iubenda_vip_policy .w_icon_24 {\n  background-image: none;\n}\n  .iubenda_vip_policy .box_10.expand .expand-click.w_icon_24 {\n  padding-left: 10px !important;\n}\n  .iubenda_vip_policy .box_primary {\n  box-shadow: var(--gauzy-shadow) 0 0 0/15% !important;\n  border: unset !important;\n  border-radius: var(--border-radius) !important;\n  background: var(--gauzy-card-4) !important;\n}\n  .iubenda_vip_policy .tc-deactivated h1 {\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n  .iubenda_vip_policy .legal_pp .one_line_col {\n  padding-bottom: 21px;\n}"]
      });
    }
  }
  return PrivacyPolicyComponent;
})();

/***/ }),

/***/ 23667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ CommonLegalModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let CommonLegalModule = /*#__PURE__*/(() => {
  class CommonLegalModule {
    static {
      this.ɵfac = function CommonLegalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CommonLegalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: CommonLegalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({});
    }
  }
  return CommonLegalModule;
})();

/***/ }),

/***/ 24360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 24766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70077);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72463);


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

/***/ 29226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
  const _super = instance => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map

/***/ }),

/***/ 40223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ createPageLegalRoutes)
/* harmony export */ });
/* harmony import */ var _components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46687);
/* harmony import */ var _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1114);


/**
 * Creates page legal routes for the application
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createPageLegalRoutes = _pageRouteRegistryService => [{
  path: '',
  children: [{
    path: '',
    redirectTo: 'terms',
    pathMatch: 'full'
  }, {
    path: 'terms',
    component: _components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__/* .TermsAndConditionsComponent */ .U,
    data: {
      selectors: {
        organization: false,
        date: false,
        employee: false,
        project: false,
        team: false
      }
    }
  }, {
    path: 'privacy',
    component: _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__/* .PrivacyPolicyComponent */ .MP,
    data: {
      selectors: {
        organization: false,
        date: false,
        employee: false,
        project: false,
        team: false
      }
    }
  }]
}];

/***/ }),

/***/ 42057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ timeoutProvider)
/* harmony export */ });
const timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const {
      delegate
    } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const {
      delegate
    } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=timeoutProvider.js.map

/***/ }),

/***/ 43745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ LegalModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6828);
/* harmony import */ var _legal_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86971);
/* harmony import */ var _common_legal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let LegalModule = /*#__PURE__*/(() => {
  class LegalModule {
    static {
      this.ɵfac = function LegalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LegalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: LegalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__/* .ROUTES */ .bw,
          useFactory: service => (0,_legal_routes__WEBPACK_IMPORTED_MODULE_2__/* .createLegalRoutes */ .Q)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_common_legal_module__WEBPACK_IMPORTED_MODULE_4__/* .CommonLegalModule */ .X]
      });
    }
  }
  return LegalModule;
})();

/***/ }),

/***/ 43754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A2: () => (/* binding */ errorNotification),
/* harmony export */   M7: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   ro: () => (/* binding */ nextNotification)
/* harmony export */ });
/* unused harmony export createNotification */
const COMPLETE_NOTIFICATION = /*#__PURE__*/(() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}
//# sourceMappingURL=NotificationFactories.js.map

/***/ }),

/***/ 46687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ TERM_AND_POLICY_ENDPOINT),
/* harmony export */   U: () => (/* binding */ TermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _providers_legal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92467);





const TERM_AND_POLICY_ENDPOINT = 'https://www.iubenda.com/api/terms-and-conditions/7927924';
let TermsAndConditionsComponent = /*#__PURE__*/(() => {
  class TermsAndConditionsComponent {
    constructor(legalService, _document) {
      this.legalService = legalService;
      this._document = _document;
    }
    ngOnInit() {
      this.getTermJsonFromUrl(TERM_AND_POLICY_ENDPOINT);
      this._document.body.classList.add('term-container');
    }
    /**
     * Load Term from iubenda
     *
     * @param url https://www.iubenda.com/api/terms-and-conditions/7927924
     */
    getTermJsonFromUrl(url) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        try {
          const data = yield _this.legalService.getContentFromFromUrl(url);
          if (data?.content) {
            _this.term_and_policy = data.content;
          }
        } catch (error) {
          console.error('Error fetching terms and conditions:', error);
        }
      })();
    }
    /**
     * Remove class to body to hide terms and conditions
     */
    ngOnDestroy() {
      this._document.body.classList.remove('term-container');
    }
    static {
      this.ɵfac = function TermsAndConditionsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TermsAndConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_providers_legal_service__WEBPACK_IMPORTED_MODULE_2__/* .LegalService */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .DOCUMENT */ .q));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TermsAndConditionsComponent,
        selectors: [["ga-terms-conditions"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[1, "term_and_condition", 3, "innerHtml"]],
        template: function TermsAndConditionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", ctx.term_and_policy, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
          }
        },
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  .term-container nb-auth-block {\n  max-width: 90%;\n}\n\n  .term_and_condition {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  height: calc(100vh - 11rem);\n  overflow: auto;\n  font-family: inherit !important;\n}\n  .term_and_condition h1 {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  padding: 10px 30px;\n  margin: -10px -30px 0;\n}\n  .term_and_condition h2 {\n  color: var(--gauzy-text-color-2);\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n  .term_and_condition h3 {\n  color: var(--gauzy-text-color-1);\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n  .term_and_condition h4 {\n  color: var(--gauzy-text-color-2);\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  line-height: 16px !important;\n  letter-spacing: 0em;\n  text-align: left;\n}\n  .term_and_condition p, \n  .term_and_condition li {\n  font-size: 12px;\n  font-weight: 400 !important;\n  line-height: 16px !important;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n  .term_and_condition p {\n  line-height: 19px;\n  margin: 0;\n  padding-top: 11px;\n}\n  .box_primary {\n  border: 1px solid #c0c1c1;\n  border-bottom-color: #a8aaab;\n  box-shadow: 0 1px 0 #ebebec;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n  .box_10 {\n  padding: 10px;\n  border-radius: 3px;\n  margin-bottom: 15px;\n}\n  .box_10 > h4 {\n  margin-bottom: 0;\n  font-size: 13px !important;\n}\n  .box_10 > .w_icon, \n  .box_10.expand > .w_icon, \n  .box_10 > .w_icon.expand-click, \n  .box_10.expand > .w_icon.expand-click {\n  padding-left: 45px;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 10px;\n  background-position-y: 7px;\n  background-position: 10px 7px;\n}\n  .box_10 > .w_icon_16, \n  .box_10.expand > .w_icon_16, \n  .box_10 > .w_icon_16.expand-click, \n  .box_10.expand > .w_icon_16.expand-click {\n  padding-left: 40px;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 11px;\n  background-position-y: 11px;\n  background-position: 11px 11px;\n}\n  .box_10 > .w_icon_24, \n  .box_10.expand > .w_icon_24, \n  .box_10 > .w_icon_24.expand-click, \n  .box_10.expand > .w_icon_24.expand-click {\n  padding-left: 45px;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 10px;\n  background-position-y: 10px;\n  background-position: 10px 10px;\n}\n  .term_and_condition footer {\n  margin-top: 17px;\n  padding-top: 17px;\n  border-top: 1px solid #eee;\n}\n  .term_and_condition hr {\n  padding-top: 15px;\n  margin: 0 0 15px 0;\n}\n  .term_and_condition hr.primary {\n  border: 0;\n  border-bottom: 1px solid #dfdfdf;\n  box-shadow: 0 1px 0 #f7f7f7;\n}\n  .box_10.expand .expand-click {\n  margin: -10px;\n  padding: 12px 25px 13px !important;\n}\n  .box_10.expand .expand-content {\n  margin-top: 10px;\n}\n  .box_10.expand .expand-content > *:first-child {\n  margin-top: 0;\n  padding-top: 0;\n}\n  .expand.expanded .expand-click:after, \n  .box_10.expand.expanded .expand-click:after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  top: 19px;\n  border: 5px;\n  border-color: transparent;\n  border-style: solid;\n  border-top-color: #333b43;\n}\n  .expand .expand-click, \n  .box_10.expand .expand-click, \n  .expand.expanded .expand-click, \n  .box_10.expand.expanded .expand-click {\n  border-bottom: 1px dotted #ddd;\n  margin-bottom: 10px;\n  transition: 0.2s linear all;\n}\n  .expand.collapsed .expand-click {\n  border-bottom: 0;\n  margin-bottom: -10px;\n}\n  .all-collapsed .expand .expand-click {\n  border-bottom: 0;\n  margin-bottom: -10px;\n}\n  .all-collapsed .expand-content {\n  display: none;\n}\n  .iub_container-fluid {\n  position: relative;\n  min-width: 940px;\n  padding-left: 20px;\n  padding-right: 20px;\n  zoom: 1;\n}\n  .iub_container-fluid:before, \n  .iub_container-fluid:after {\n  display: table;\n  content: \"\";\n  zoom: 1;\n  display: inline;\n}\n  .iub_container-fluid:after {\n  clear: both;\n}\n  .iub_container-fluid > .sidebar {\n  float: left;\n  width: 220px;\n}\n  .iub_container-fluid > .iub_content {\n  margin-left: 240px;\n}\n  .iubenda_policy a {\n  text-decoration: none;\n  font-weight: bold;\n  border-bottom: 1px solid #f6f6f6;\n  color: #333b43;\n}\n  .iubenda_policy a.unstyled {\n  border-bottom: 0;\n}\n  .iubenda_policy a:hover:not(.btn) {\n  color: #121518;\n  border-bottom-color: #d6d6d6;\n  transition: 0.1s linear all;\n}\n  .iubenda_policy a:focus {\n  outline: none;\n}\n  .iubenda_policy a.no_border, \n  a.no_border:hover {\n  border-bottom-width: 0;\n}\n  .iubenda_policy .pull-right {\n  float: right;\n}\n  .pull-left {\n  float: left;\n}\n  .hide {\n  display: none;\n}\n  .show {\n  display: block;\n}\n  .link_on_dark a {\n  border-bottom-color: rgba(247, 247, 247, 0.3);\n}\n  .link_on_dark a:hover {\n  border-bottom-color: rgba(247, 247, 247, 0.6);\n}\n  .iubenda_policy a {\n  font-weight: normal;\n  border-bottom: 1px solid #f0f0f0;\n}\n  .iub_content {\n  position: relative;\n  padding: 10px 30px;\n  margin: 0 auto;\n  border-radius: 3px 3px 0 0;\n}\n  #wbars {\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n  #wbars .horizontal {\n  display: none;\n}\n  .iub_header {\n  border-bottom: 1px dotted #dfdfdf;\n  padding-bottom: 25px;\n  position: relative;\n}\n  .iub_header p {\n  margin: 0;\n  padding: 0;\n}\n  .iub_header img {\n  display: block;\n  position: absolute;\n  top: 5px;\n  right: 0;\n}\n  .one_line_col {\n  zoom: 1;\n  float: left;\n  width: 100%;\n  border-bottom: 1px dotted #dfdfdf;\n}\n  .one_line_col:before, \n  .one_line_col:after {\n  display: table;\n  content: \"\";\n  zoom: 1;\n  display: inline;\n}\n  .one_line_col:after {\n  clear: both;\n}\n  .one_line_col > ul.for_boxes > li {\n  float: left;\n  width: 50%;\n}\n  .one_line_col > ul.for_boxes > li:nth-child(2n+1) {\n  clear: left;\n}\n  .one_line_col > ul.for_boxes > li:nth-child(2n+1) > div {\n  margin-right: 15px;\n}\n  .one_line_col > ul.for_boxes > li:nth-child(2n) {\n  clear: right;\n}\n  .one_line_col > ul.for_boxes > li:nth-child(2n) > div {\n  margin-left: 15px;\n}\n  .one_line_col.wide {\n  width: 100%;\n}\n  .one_line_col.wide > ul.for_boxes > li {\n  clear: both;\n  width: 100%;\n}\n  .one_line_col.wide > ul.for_boxes > li:nth-child(2n+1) > div {\n  margin-right: 0;\n}\n  .one_line_col.wide > ul.for_boxes > li:nth-child(2n) > div {\n  margin-left: 0;\n}\n  .legal_pp .one_line_col {\n  float: none;\n  border-top: 0;\n  padding-bottom: 21px;\n}\n  .legal_pp .one_line_col > ul.for_boxes {\n  margin-top: 21px;\n}\n  .legal_pp .one_line_col > ul.for_boxes > li:nth-child(2n+1) {\n  clear: left;\n  float: left;\n}\n  .legal_pp .one_line_col > ul.for_boxes > li:nth-child(2n) {\n  float: right;\n  clear: right;\n}\n  .legal_pp .definitions {\n  margin-top: 21px;\n}\n  .legal_pp .definitions .expand-click.w_icon_24 {\n  margin-top: -11px;\n  padding: 14px 10px 12px 45px;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  background-position-x: 5px;\n  background-position-y: 0;\n  background-position: 5px 0;\n}\n  .legal_pp .definitions .expand-content {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n  .wrap p {\n  display: inline-block;\n}\n  .iub_footer {\n  clear: both;\n  position: relative;\n  font-size: 11px;\n}\n  .iub_footer p {\n  font-size: 11px;\n  padding: 0;\n}\n  .iub_content .iub_footer {\n  padding: 24px 0;\n}\n  .iub_content .iub_footer p:last-of-type {\n  margin: 10px 0;\n  clear: both;\n}\n  .iub_content .iub_footer .show_comp_link {\n  display: block;\n  float: right;\n}\n  .iub_container > .iub_footer {\n  min-height: 21px;\n  background-color: #f6f6f6;\n  color: #717171;\n  padding: 30px;\n  box-shadow: 0 -1px 6px #cfcfcf;\n  border-radius: 0 0 3px 3px;\n}\n  .iub_container > .iub_footer > .btn {\n  position: absolute;\n  top: 25px;\n  right: 30px;\n}\n  .iub_container > .iub_footer .btn {\n  padding: 0px 24px;\n  line-height: 29px;\n}\n  .iub_container > .iub_footer .button-stack {\n  margin: -4px 0;\n}\n  .iub_container > .iub_footer .button-stack .btn + .btn {\n  margin-left: 5px;\n}\n  .iub_container > .iub_footer img {\n  margin: -4px 3px 0;\n  vertical-align: middle;\n  width: 70px;\n  height: 25px;\n}\n  .wide {\n  width: 150px;\n}\n  .iubenda_fluid_policy #wbars {\n  overflow-y: auto;\n  box-shadow: none;\n  height: auto;\n}\n  .iubenda_fluid_policy .iub_container {\n  margin-bottom: 30px;\n}\n  .iubenda_fluid_policy .half_col:nth-child(2n+1) > * {\n  margin-right: 0;\n}\n  .iubenda_fluid_policy .half_col:nth-child(2n) > * {\n  margin-left: 0;\n}\n  .iubenda_fluid_policy .one_line_col, \n  .iubenda_fluid_policy .half_col {\n  width: 100%;\n}\n  .iubenda_fluid_policy .one_line_col > ul.for_boxes > li, \n  .iubenda_fluid_policy .half_col > ul.for_boxes > li {\n  clear: both;\n  width: 100%;\n}\n  .iubenda_fluid_policy .one_line_col > ul.for_boxes > li:nth-child(2n+1) > div, \n  .iubenda_fluid_policy .half_col > ul.for_boxes > li:nth-child(2n+1) > div {\n  margin-right: 0;\n}\n  .iubenda_fluid_policy .one_line_col > ul.for_boxes > li:nth-child(2n) > div, \n  .iubenda_fluid_policy .half_col > ul.for_boxes > li:nth-child(2n) > div {\n  margin-left: 0;\n}\n  .iubenda_embed_policy .iub_base_container {\n  background: none;\n}\n  .iubenda_embed_policy .iub_container > .iub_footer {\n  box-shadow: none;\n  border-radius: none;\n}\n  .iubenda_embed_policy .expand-click {\n  cursor: default;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .iub_base_container {\n  color: #666;\n}\n  .iubenda_vip_policy.iubenda_terms_policy h2 {\n  color: var(--gauzy-text-color-1);\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding-top: 50px;\n}\n  .iubenda_vip_policy.iubenda_terms_policy h3 {\n  color: var(--gauzy-text-color-2);\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding-top: 45px;\n}\n  .iubenda_vip_policy.iubenda_terms_policy h4 {\n  font-size: 16px !important;\n  padding-top: 40px;\n  color: var(--gauzy-text-color-2);\n}\n  .iubenda_vip_policy.iubenda_terms_policy h5 {\n  font-size: 14px;\n  padding-top: 35px;\n  margin-bottom: 0;\n  color: #666;\n}\n  .iubenda_vip_policy.iubenda_terms_policy h6 {\n  font-size: 12px;\n  color: #505050;\n  text-transform: uppercase;\n  padding-top: 32px;\n  margin-bottom: 0;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .definitions {\n  margin-top: 60px !important;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .definitions .expand-content {\n  padding: 25px 15px !important;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .definitions .expand-content h4 {\n  font-size: 15px !important;\n}\n  .iubenda_vip_policy.iubenda_terms_policy .definitions:before {\n  content: \"\";\n  border-top: 1px dotted rgba(0, 0, 0, 0.1);\n  display: block;\n  margin: 0 -10px;\n  position: relative;\n  top: -45px;\n}\n  .iubenda_vip_policy.iubenda_fixed_policy .iub_container {\n  max-width: 660px;\n  padding-top: 80px;\n}\n  .iubenda_vip_policy .iub_base_container {\n  color: #6b6b6b;\n}\n  .iubenda_vip_policy p {\n  font-size: 14px;\n  line-height: 1.6;\n}\n  .iubenda_vip_policy .allcaps, \n  .iubenda_vip_policy p.allcaps, \n  .iubenda_vip_policy ul.allcaps li {\n  font-variant: small-caps !important;\n  font-weight: bold !important;\n  font-size: 16px !important;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif !important;\n}\n  .iubenda_vip_policy ul li {\n  font-size: 14px;\n  line-height: 1.6;\n}\n  .iubenda_vip_policy h1 {\n  color: var(--gauzy-text-color-1);\n  font-size: 24px !important;\n  font-weight: 400 !important;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 60px;\n}\n  .iubenda_vip_policy h2 {\n  color: var(--gauzy-text-color-2);\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  line-height: 24px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding-top: 50px;\n  padding-bottom: 15px;\n}\n  .iubenda_vip_policy h3 {\n  color: var(--gauzy-text-color-1);\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 10px;\n}\n  .iubenda_vip_policy .legal_pp .one_line_col {\n  padding-bottom: 50px;\n}\n  .iubenda_vip_policy .half_col:nth-child(2n+1) > * {\n  margin-right: 0;\n}\n  .iubenda_vip_policy .half_col:nth-child(2n) > * {\n  margin-left: 0;\n}\n  .iubenda_vip_policy .one_line_col, \n  .iubenda_vip_policy .half_col {\n  width: 100%;\n}\n  .iubenda_vip_policy .one_line_col > ul.for_boxes > li, \n  .iubenda_vip_policy .half_col > ul.for_boxes > li {\n  clear: both;\n  width: 100%;\n}\n  .iubenda_vip_policy .one_line_col > ul.for_boxes > li:nth-child(2n+1) > div, \n  .iubenda_vip_policy .half_col > ul.for_boxes > li:nth-child(2n+1) > div {\n  margin-right: 0;\n}\n  .iubenda_vip_policy .one_line_col > ul.for_boxes > li:nth-child(2n) > div, \n  .iubenda_vip_policy .half_col > ul.for_boxes > li:nth-child(2n) > div {\n  margin-left: 0;\n}\n  .iubenda_vip_policy .definitions, \n  .iubenda_vip_policy .iub_footer, \n  .iubenda_vip_policy .for_boxes {\n  color: var(--gauzy-text-color-2);\n}\n  .iubenda_vip_policy .box_primary {\n  box-shadow: var(--gauzy-shadow) 0 0 0/15% !important;\n  border: unset !important;\n  border-radius: var(--border-radius) !important;\n  background: var(--gauzy-card-4) !important;\n}\n  .iubenda_vip_policy .box_primary h3 {\n  color: var(--gauzy-text-color-1);\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  line-height: 20px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n  .iubenda_vip_policy .legal_pp .one_line_col {\n  padding-bottom: 21px;\n}"]
      });
    }
  }
  return TermsAndConditionsComponent;
})();

/***/ }),

/***/ 54286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29226);

const UnsubscriptionError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 60849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ captureError)
/* harmony export */ });
/* unused harmony export errorContext */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80759);

let context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      const {
        errorThrown,
        error
      } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__/* .config */ .$.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}
//# sourceMappingURL=errorContext.js.map

/***/ }),

/***/ 65762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80759);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42057);


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__/* .timeoutProvider */ .f.setTimeout(() => {
    const {
      onUnhandledError
    } = _config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .$;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}
//# sourceMappingURL=reportUnhandledError.js.map

/***/ }),

/***/ 68784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 70077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29226);

const EmptyError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ 72463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ SafeSubscriber)
/* harmony export */ });
/* unused harmony exports Subscriber, EMPTY_OBSERVER */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68784);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77064);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80759);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65762);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24360);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43754);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42057);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60849);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__/* .Subscription */ .yU {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__/* .isSubscription */ .Uv)(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__/* .nextNotification */ .ro)(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__/* .errorNotification */ .A2)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__/* .COMPLETE_NOTIFICATION */ .M7, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
class ConsumerObserver {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const {
      partialObserver
    } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const {
      partialObserver
    } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const {
      partialObserver
    } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
}
class SafeSubscriber extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__/* .isFunction */ .T)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      let context;
      if (this && _config__WEBPACK_IMPORTED_MODULE_3__/* .config */ .$.useDeprecatedNextContext) {
        context = Object.create(observerOrNext);
        context.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context),
          error: observerOrNext.error && bind(observerOrNext.error, context),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
}
function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_3__/* .config */ .$.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__/* .captureError */ .l)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__/* .reportUnhandledError */ .m)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const {
    onStoppedNotification
  } = _config__WEBPACK_IMPORTED_MODULE_3__/* .config */ .$;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__/* .timeoutProvider */ .f.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_7__/* .noop */ .l,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__/* .noop */ .l
};
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ 74917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ PageLegalModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6828);
/* harmony import */ var _page_legal_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40223);
/* harmony import */ var _common_legal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let PageLegalModule = /*#__PURE__*/(() => {
  class PageLegalModule {
    static {
      this.ɵfac = function PageLegalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PageLegalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: PageLegalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__/* .ROUTES */ .bw,
          useFactory: service => (0,_page_legal_routes__WEBPACK_IMPORTED_MODULE_2__/* .createPageLegalRoutes */ .z)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_common_legal_module__WEBPACK_IMPORTED_MODULE_4__/* .CommonLegalModule */ .X]
      });
    }
  }
  return PageLegalModule;
})();

/***/ }),

/***/ 77064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Uv: () => (/* binding */ isSubscription),
/* harmony export */   yU: () => (/* binding */ Subscription)
/* harmony export */ });
/* unused harmony export EMPTY_SUBSCRIPTION */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68784);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54286);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99733);



class Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage
      } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const {
        initialTeardown: initialFinalizer
      } = this;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__/* .UnsubscriptionError */ .Z ? e.errors : [e];
        }
      }
      const {
        _finalizers
      } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__/* .UnsubscriptionError */ .Z) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__/* .UnsubscriptionError */ .Z(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const {
      _parentage
    } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const {
      _parentage
    } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const {
      _parentage
    } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__/* .arrRemove */ .o)(_parentage, parent);
    }
  }
  remove(teardown) {
    const {
      _finalizers
    } = this;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__/* .arrRemove */ .o)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  }
}
Subscription.EMPTY = /*#__PURE__*/(() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ 80759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ config)
/* harmony export */ });
const config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 82514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COOKIE_PRIVACY_POLICY_ENDPOINT: () => (/* reexport safe */ _lib_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__.nf),
/* harmony export */   LegalModule: () => (/* reexport safe */ _lib_legal_module__WEBPACK_IMPORTED_MODULE_2__.S),
/* harmony export */   LegalService: () => (/* reexport safe */ _lib_providers_legal_service__WEBPACK_IMPORTED_MODULE_6__.R),
/* harmony export */   PRIVACY_POLICY_ENDPOINT: () => (/* reexport safe */ _lib_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__.w8),
/* harmony export */   PageLegalModule: () => (/* reexport safe */ _lib_page_legal_module__WEBPACK_IMPORTED_MODULE_4__.B),
/* harmony export */   PrivacyPolicyComponent: () => (/* reexport safe */ _lib_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__.MP),
/* harmony export */   TERM_AND_POLICY_ENDPOINT: () => (/* reexport safe */ _lib_components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   TermsAndConditionsComponent: () => (/* reexport safe */ _lib_components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   createLegalRoutes: () => (/* reexport safe */ _lib_legal_routes__WEBPACK_IMPORTED_MODULE_3__.Q),
/* harmony export */   createPageLegalRoutes: () => (/* reexport safe */ _lib_page_legal_routes__WEBPACK_IMPORTED_MODULE_5__.z)
/* harmony export */ });
/* harmony import */ var _lib_components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46687);
/* harmony import */ var _lib_components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1114);
/* harmony import */ var _lib_legal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43745);
/* harmony import */ var _lib_legal_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86971);
/* harmony import */ var _lib_page_legal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74917);
/* harmony import */ var _lib_page_legal_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40223);
/* harmony import */ var _lib_providers_legal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92467);
/**
 * Public API Surface of @gauzy/plugin-legal-ui
 */








/***/ }),

/***/ 86971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ createLegalRoutes)
/* harmony export */ });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17523);
/* harmony import */ var _components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46687);
/* harmony import */ var _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1114);



/**
 * Creates legal routes for the application
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createLegalRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__/* .NbAuthComponent */ .sK,
  children: [{
    path: '',
    redirectTo: 'terms',
    pathMatch: 'full'
  }, {
    path: 'terms',
    component: _components_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_1__/* .TermsAndConditionsComponent */ .U
  }, {
    path: 'privacy',
    component: _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_2__/* .PrivacyPolicyComponent */ .MP
  }]
}];

/***/ }),

/***/ 92467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ LegalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45715);




let LegalService = /*#__PURE__*/(() => {
  class LegalService {
    constructor(http) {
      this.http = http;
    }
    /**
     * Load content from iubenda
     *
     * @param url https://www.iubenda.com/api/privacy-policy/18120170
     */
    getContentFromFromUrl(url) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(url));
    }
    static {
      this.ɵfac = function LegalService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LegalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: LegalService,
        factory: LegalService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return LegalService;
})();

/***/ }),

/***/ 99733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
//# sourceMappingURL=arrRemove.js.map

/***/ })

}]);