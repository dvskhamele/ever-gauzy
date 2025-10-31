"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4392],{

/***/ 2543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ BaseWorkspaceAuthComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38228);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20173);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84059);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _countdown_timer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79510);

var BaseWorkspaceAuthComponent_1;














/**
 * Abstract base component for workspace authentication flows when user is already connected.
 * Contains shared functionality for magic code authentication, timer management,
 * and workspace selection that is common across workspace-create, workspace-signin, and workspace-find components.
 */
let BaseWorkspaceAuthComponent = /*#__PURE__*/(() => {
  let BaseWorkspaceAuthComponent = class BaseWorkspaceAuthComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    static {
      BaseWorkspaceAuthComponent_1 = this;
    }
    /**
     * Static method to build the common email/code form using Angular's FormBuilder.
     */
    static buildEmailCodeForm(fb) {
      return fb.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.pattern(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .patterns */ .q.email)])],
        code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.maxLength(6)])]
      });
    }
    /**
     * Getter for the email form control.
     */
    get email() {
      return this.form.get('email');
    }
    /**
     * Getter for the code form control.
     */
    get code() {
      return this.form.get('code');
    }
    constructor(translateService, _fb, cdr, _errorHandlingService, _store, _workspaceAuthService, _timerService) {
      super(translateService);
      this.translateService = translateService;
      this._fb = _fb;
      this.cdr = cdr;
      this._errorHandlingService = _errorHandlingService;
      this._store = _store;
      this._workspaceAuthService = _workspaceAuthService;
      this._timerService = _timerService;
      // Timer properties
      this.countdown = 0;
      // Loading and state properties
      this.isLoading = false;
      this.isCodeSent = false;
      this.isCodeResent = false;
      // Workspace selection state
      this.workspaces = [];
      this.showWorkspaceSelection = false;
      this.confirmedEmail = null;
      this.totalWorkspaces = 0;
      /**
       * Track by function for workspace lists.
       * This method is shared across all workspace auth components.
       */
      this.trackByWorkspaceId = (_, w) => w?.user?.tenant?.id || w?.user?.id;
      this.form = BaseWorkspaceAuthComponent_1.buildEmailCodeForm(this._fb);
      this._timerService.timerState$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe(state => {
        this.countdown = state.countdown;
        this.isCodeResent = state.isResent;
        this.cdr.markForCheck();
      });
    }
    ngOnDestroy() {
      this._timerService.stopTimer();
    }
    /**
     * Sends the magic code for workspace authentication.
     * This method is shared across all workspace auth components.
     */
    sendSigninCode() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (_this.isLoading) {
          return;
        }
        // Get the email value from the form
        const email = (_this.form.get('email').value || '').trim();
        if (!email) {
          return;
        }
        try {
          _this.isLoading = true;
          yield _this._workspaceAuthService.sendSigninCode(email);
          _this.isCodeSent = true;
          _this.cdr.markForCheck();
        } catch {
          _this.isCodeSent = false;
          _this.cdr.markForCheck();
        } finally {
          _this.isLoading = false;
          _this.cdr.markForCheck();
        }
      })();
    }
    /**
     * Resend the sign-in code.
     * This method is shared across all workspace auth components.
     */
    onResendCode() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (_this2.isLoading) {
          return;
        }
        // Get the email value from the form
        const email = (_this2.form.get('email')?.value || '').trim();
        // Check if email is present
        if (!email) {
          return;
        }
        if (_this2.countdown > 0) {
          return;
        }
        try {
          _this2.isLoading = true;
          yield _this2._workspaceAuthService.sendSigninCode(email);
          _this2.isCodeResent = true;
          _this2._timerService.startTimer();
          _this2.cdr.markForCheck();
        } catch {
          _this2.isCodeResent = false;
          _this2._timerService.stopTimer();
          _this2.cdr.markForCheck();
        } finally {
          _this2.isLoading = false;
          _this2.cdr.markForCheck();
        }
      })();
    }
    /**
     * Confirms the sign-in code and processes the response.
     * This method is shared but allows for different handling logic via the abstract method.
     */
    confirmSignInCode() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        // Check if the form is invalid
        if (_this3.form.invalid) {
          return;
        }
        // Get the email and code values from the form
        const raw = _this3.form.getRawValue();
        const email = (raw.email || '').trim();
        const code = (raw.code || '').trim();
        // Check if both email and code are present
        if (!email || !code) {
          return;
        }
        try {
          _this3.isLoading = true;
          const response = yield _this3._workspaceAuthService.confirmSignInByCode(email, code);
          // Store the confirmed email for later use
          _this3.confirmedEmail = email;
          // Store workspace data
          _this3.workspaces = response?.workspaces || [];
          _this3.totalWorkspaces = response?.total_workspaces ?? _this3.workspaces.length;
          // Call the abstract method to handle component-specific logic
          _this3.handleConfirmationResponse(response);
          // Show workspace selection if there are workspaces
          if (_this3.workspaces.length > 0) {
            _this3.showWorkspaceSelection = true;
          }
          _this3.cdr.markForCheck();
        } catch (error) {
          _this3._errorHandlingService.handleError(error);
          _this3.showWorkspaceSelection = false;
          _this3.cdr.markForCheck();
        } finally {
          _this3.isLoading = false;
          _this3.cdr.markForCheck();
        }
      })();
    }
    /**
     * Handle workspace selection - sign in to existing workspace.
     * This method is shared across all workspace auth components.
     */
    signInWorkspace(workspace) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!workspace || !_this4.confirmedEmail) {
          return;
        }
        try {
          _this4.isLoading = true;
          const email = _this4.confirmedEmail;
          const token = workspace.token;
          // Sign in to the selected workspace
          yield _this4._workspaceAuthService.signInWorkspaceByToken(email, token);
          // Close the window after successful signin
          _this4.closeWindow();
          _this4.cdr.markForCheck();
        } catch (error) {
          _this4._errorHandlingService.handleError(error);
          _this4.cdr.markForCheck();
        } finally {
          _this4.isLoading = false;
          _this4.cdr.markForCheck();
        }
      })();
    }
    /**
     * Updates the store with workspace authentication data.
     * This method is shared across all workspace auth components.
     */
    updateStoreWithWorkspaceData(response) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        yield _this5._workspaceAuthService.updateStoreWithWorkspaceData(response);
      })();
    }
    /**
     * Close the current window/tab or redirect to main app.
     * This method is shared across all workspace auth components.
     */
    closeWindow() {
      window.location.href = '/';
    }
    static {
      this.ɵfac = function BaseWorkspaceAuthComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BaseWorkspaceAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .WorkspaceAuthService */ .J), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_countdown_timer_service__WEBPACK_IMPORTED_MODULE_10__/* .CountdownTimerService */ .Q));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineDirective"] */ .FsC({
        type: BaseWorkspaceAuthComponent,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3]
      });
    }
  };
  return BaseWorkspaceAuthComponent;
})();
BaseWorkspaceAuthComponent = BaseWorkspaceAuthComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .WorkspaceAuthService */ .J, _countdown_timer_service__WEBPACK_IMPORTED_MODULE_10__/* .CountdownTimerService */ .Q])], BaseWorkspaceAuthComponent);


/***/ }),

/***/ 3065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77371);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46334);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29212);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67961);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .async */ .b) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__/* .isScheduler */ .m)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .c(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__/* .isValidDate */ .v)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 20173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ WorkspaceAuthService)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40868);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41598);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36042);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54263);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _tenant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55818);
/* harmony import */ var _organizations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22688);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57044);
/* harmony import */ var _workspace_sync_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);




















/**
 * Service to handle workspace authentication flows and user onboarding.
 * Centralizes complex authentication logic that was previously duplicated across components.
 */
let WorkspaceAuthService = /*#__PURE__*/(() => {
  let WorkspaceAuthService = class WorkspaceAuthService {
    constructor(_authService, _errorHandlingService, _store, _tenantService, _organizationsService, _usersService, _workspaceSyncService) {
      this._authService = _authService;
      this._errorHandlingService = _errorHandlingService;
      this._store = _store;
      this._tenantService = _tenantService;
      this._organizationsService = _organizationsService;
      this._usersService = _usersService;
      this._workspaceSyncService = _workspaceSyncService;
    }
    /**
     * Get new access token using refresh token stored in _store
     */
    getAccessTokenFromRefreshToken() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        try {
          const {
            refresh_token
          } = _this._store;
          if (refresh_token) {
            const {
              token
            } = yield _this._authService.refreshToken(refresh_token);
            if (token) {
              _this._store.token = token;
            }
          }
        } catch (error) {
          _this._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Handle complete user onboarding flow for workspace creation.
     * Flow: signup → signin (get token) → create tenant → refresh token → create organization
     *
     * @param organization Organization creation input data
     * @param userRegistrationData User registration data (firstName, lastName, password, confirmPassword)
     * @param confirmedEmail The confirmed email from magic code flow
     * @returns Promise<void>
     */
    onboardUser(organization, userRegistrationData, confirmedEmail) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        if (!confirmedEmail) {
          throw new Error('No confirmed email found');
        }
        const {
          firstName,
          lastName,
          password,
          confirmPassword
        } = userRegistrationData;
        // Step 0: Clear the store to avoid conflicts with existing user data
        _this2._store.clear();
        // Step 1: Create a new user without tenant using the register service
        const newUser = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(_this2._authService.register({
          user: {
            firstName: firstName,
            lastName: lastName,
            email: confirmedEmail
          },
          password: password,
          confirmPassword: confirmPassword
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
          _this2._errorHandlingService.handleError(error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ .$)(() => error);
        })));
        if (!newUser) {
          throw new Error('Failed to create new user');
        }
        // Step 2: Login as the new user to get auth token
        const authResponse = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(_this2._authService.login({
          email: confirmedEmail,
          password: password
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
          _this2._errorHandlingService.handleError(error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ .$)(() => error);
        })));
        if (!authResponse || !authResponse.token) {
          throw new Error('Failed to authenticate new user');
        }
        // Update store with new user authentication
        _this2._store.userId = authResponse.user.id;
        _this2._store.user = authResponse.user;
        _this2._store.token = authResponse.token;
        _this2._store.refresh_token = authResponse.refresh_token;
        // Step 3: Create tenant using the tenant service (this will onboard the user)
        const tenant = yield _this2._tenantService.create({
          name: organization.name
        });
        if (!tenant) {
          throw new Error('Failed to create tenant');
        }
        // Step 4: Get updated user info (now has tenant and role)
        const user = yield _this2._usersService.getMe(['tenant']);
        _this2._store.user = user;
        // Step 5: Get new access token with updated permissions
        yield _this2.getAccessTokenFromRefreshToken();
        // Step 6: Create organization using the organizations service (now user has permissions)
        const createdOrganization = yield _this2._organizationsService.create({
          ...organization,
          tenant,
          isDefault: true
        });
        if (!createdOrganization) {
          throw new Error('Failed to create organization');
        }
        // Step 7: Update store with new user and workspace data
        _this2._store.userId = user.id;
        _this2._store.user = user;
        _this2._store.organizationId = createdOrganization.id;
        _this2._store.tenantId = tenant.id;
        // Step 8: Update workspace states
        yield _this2.updateWorkspaceStates(tenant.id);
        // Step 9: Broadcast workspace creation to other tabs
        if (_this2._workspaceSyncService.isSupported()) {
          _this2._workspaceSyncService.broadcastWorkspaceCreated({
            tenantId: tenant.id,
            organizationId: createdOrganization.id,
            workspaceName: createdOrganization.name
          });
        }
      })();
    }
    /**
     * Updates workspace states after successful authentication or creation.
     *
     * @param selectedTenantId The ID of the tenant to mark as selected
     */
    updateWorkspaceStates(selectedTenantId) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(_this3._authService.getUserWorkspaces(false).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(({
          workspaces
        }) => {
          const mappedWorkspaces = workspaces.map(workspace => ({
            id: workspace.user.tenant.id,
            name: workspace.user.tenant.name,
            imgUrl: workspace.user.tenant.logo || '/assets/images/default.svg',
            isOnline: true,
            isSelected: workspace.user.tenant.id === selectedTenantId
          }));
          // Update store with workspaces
          _this3._store.setWorkspaces(mappedWorkspaces, selectedTenantId);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(() => {
          _this3._store.setWorkspacesLoading(false, 'Failed to load workspaces');
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)({
            workspaces: [],
            total_workspaces: 0
          });
        })));
      })();
    }
    /**
     * Updates the store with workspace authentication data.
     * This is a centralized method for consistent store updates across components.
     *
     * @param response The authentication response containing user and token data
     * @returns Promise<void> to wait for complete store update
     */
    updateStoreWithWorkspaceData(response) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        _this4._store.clear();
        const {
          user,
          token: authToken,
          refresh_token
        } = response;
        // Update store with user data
        _this4._store.userId = user.id;
        _this4._store.user = user;
        _this4._store.token = authToken;
        _this4._store.refresh_token = refresh_token;
        _this4._store.organizationId = user.employee?.organizationId;
        _this4._store.tenantId = user.tenantId;
        // Update workspace states and wait for completion
        yield _this4.updateWorkspaceStates(user.tenantId);
      })();
    }
    /**
     * Handles workspace sign-in using token.
     * Centralizes the workspace sign-in logic that was duplicated across components.
     *
     * @param email The confirmed email
     * @param token The workspace token
     * @returns Promise<void> - resolves when store is fully updated
     * @throws Error if signin fails
     */
    signInWorkspaceByToken(email, token) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(_this5._authService.signinWorkspaceByToken({
          email,
          token
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
          _this5._errorHandlingService.handleError(error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ .$)(() => error);
        })));
        // Ensure we have a valid response
        if (!response) {
          throw new Error('No response received from signin');
        }
        // Wait for complete store update before resolving
        yield _this5.updateStoreWithWorkspaceData(response);
        // Broadcast workspace signin to other tabs
        if (_this5._workspaceSyncService.isSupported()) {
          _this5._workspaceSyncService.broadcastWorkspaceSignin({
            tenantId: response.user.tenantId,
            organizationId: response.user.employee?.organizationId
          });
        }
      })();
    }
    /**
     * Sends magic code for workspace authentication.
     * Centralizes the code sending logic that was duplicated across components.
     *
     * @param email The email to send the code to
     * @returns Promise<unknown>
     */
    sendSigninCode(email) {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(_this6._authService.sendSigninCode({
          email
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
          _this6._errorHandlingService.handleError(error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ .$)(() => error);
        })));
      })();
    }
    /**
     * Confirms the sign-in code and returns workspace information.
     * Centralizes the code confirmation logic that was duplicated across components.
     *
     * @param email The email address
     * @param code The verification code
     * @returns Promise<IUserSigninWorkspaceResponse>
     */
    confirmSignInByCode(email, code) {
      var _this7 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(_this7._authService.confirmSignInByCode({
          email,
          code
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => {
          _this7._errorHandlingService.handleError(error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .throwError */ .$)(() => error);
        })));
      })();
    }
    static {
      this.ɵfac = function WorkspaceAuthService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WorkspaceAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_auth__WEBPACK_IMPORTED_MODULE_7__/* .AuthService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_notification__WEBPACK_IMPORTED_MODULE_8__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_store__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_tenant__WEBPACK_IMPORTED_MODULE_10__/* .TenantService */ .I), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_organizations__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationsService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_users__WEBPACK_IMPORTED_MODULE_12__/* .UsersService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_workspace_sync_service__WEBPACK_IMPORTED_MODULE_13__/* .WorkspaceSyncService */ .K));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: WorkspaceAuthService,
        factory: WorkspaceAuthService.ɵfac,
        providedIn: 'root'
      });
    }
  };
  WorkspaceAuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_auth__WEBPACK_IMPORTED_MODULE_7__/* .AuthService */ .u, _notification__WEBPACK_IMPORTED_MODULE_8__/* .ErrorHandlingService */ .X, _store__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il, _tenant__WEBPACK_IMPORTED_MODULE_10__/* .TenantService */ .I, _organizations__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationsService */ .k, _users__WEBPACK_IMPORTED_MODULE_12__/* .UsersService */ .g, _workspace_sync_service__WEBPACK_IMPORTED_MODULE_13__/* .WorkspaceSyncService */ .K])], WorkspaceAuthService);
  return WorkspaceAuthService;
})();


/***/ }),

/***/ 26370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ WorkspaceSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);






const _c0 = a0 => ({
  count: a0
});
const _c1 = a0 => ({
  name: a0
});
function WorkspaceSelectionComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WorkspaceSelectionComponent_div_16_Template_div_click_0_listener() {
      const workspace_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onWorkspaceSelect(workspace_r2));
    })("keydown.enter", function WorkspaceSelectionComponent_div_16_Template_div_keydown_enter_0_listener() {
      const workspace_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onWorkspaceSelect(workspace_r2));
    })("keydown.space", function WorkspaceSelectionComponent_div_16_Template_div_keydown_space_0_listener($event) {
      const workspace_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      ctx_r2.onWorkspaceSelect(workspace_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 11)(2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("error", function WorkspaceSelectionComponent_div_16_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.setDefaultLogo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 13)(5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const workspace_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", "Open workspace " + ((workspace_r2.user == null ? null : workspace_r2.user.tenant == null ? null : workspace_r2.user.tenant.name) || ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", (workspace_r2.user == null ? null : workspace_r2.user.tenant == null ? null : workspace_r2.user.tenant.logo) || "/assets/images/logos/logo_Gauzy.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("alt", (workspace_r2.user == null ? null : workspace_r2.user.tenant == null ? null : workspace_r2.user.tenant.name) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(3, 6, "workspaces.workspaceLogoAlt", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(9, _c1, workspace_r2.user == null ? null : workspace_r2.user.tenant == null ? null : workspace_r2.user.tenant.name)) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(workspace_r2.user == null ? null : workspace_r2.user.tenant == null ? null : workspace_r2.user.tenant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(workspace_r2.user == null ? null : workspace_r2.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-hidden", true);
  }
}
function WorkspaceSelectionComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WorkspaceSelectionComponent_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onCreateWorkspace());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, ctx_r2.createButtonText), " ");
  }
}
/**
 * Shared workspace selection component.
 * Used by workspace-signin and workspace-find components to display available workspaces.
 */
let WorkspaceSelectionComponent = /*#__PURE__*/(() => {
  class WorkspaceSelectionComponent {
    constructor() {
      this.workspaces = [];
      this.totalWorkspaces = 0;
      this.showCreateButton = false;
      this.welcomeTitle = 'WORKSPACES.SELECTION.WELCOME_BACK';
      this.descriptionText = 'WORKSPACES.FIND.RESULTS_STEP.DESCRIPTION';
      this.selectWorkspaceText = 'WORKSPACES.SELECTION.SELECT_WORKSPACE_FOR';
      this.createButtonText = 'WORKSPACES.CREATE.CREATE_NEW_WORKSPACE';
      this.workspaceSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.createWorkspace = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      /**
       * Track by function for workspace lists
       */
      this.trackByWorkspaceId = (_, w) => w?.user?.tenant?.id || w?.user?.id;
    }
    /**
     * Handle workspace selection
     */
    onWorkspaceSelect(workspace) {
      this.workspaceSelected.emit(workspace);
    }
    /**
     * Handle create new workspace button click
     */
    onCreateWorkspace() {
      this.createWorkspace.emit();
    }
    setDefaultLogo(event) {
      const el = event.target;
      if (el && el.src !== '/assets/images/logos/logo_Gauzy.png') {
        el.src = '/assets/images/logos/logo_Gauzy.png';
      }
    }
    static {
      this.ɵfac = function WorkspaceSelectionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WorkspaceSelectionComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WorkspaceSelectionComponent,
        selectors: [["ga-workspace-selection"]],
        inputs: {
          workspaces: "workspaces",
          confirmedEmail: "confirmedEmail",
          totalWorkspaces: "totalWorkspaces",
          showCreateButton: "showCreateButton",
          welcomeTitle: "welcomeTitle",
          descriptionText: "descriptionText",
          selectWorkspaceText: "selectWorkspaceText",
          createButtonText: "createButtonText"
        },
        outputs: {
          workspaceSelected: "workspaceSelected",
          createWorkspace: "createWorkspace"
        },
        standalone: false,
        decls: 18,
        vars: 16,
        consts: [[1, "workspace-selection-content"], [1, "headings"], [1, "headings-inner"], [1, "title"], [1, "sub-title"], [1, "workspace-list"], [1, "email"], [1, "workspace-items"], ["class", "workspace-item", "role", "button", "tabindex", "0", 3, "click", "keydown.enter", "keydown.space", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "create-new-workspace", 4, "ngIf"], ["role", "button", "tabindex", "0", 1, "workspace-item", 3, "click", "keydown.enter", "keydown.space"], [1, "workspace-image"], ["loading", "lazy", "decoding", "async", 3, "error", "src"], [1, "workspace-info"], [1, "workspace-name"], [1, "workspace-email"], ["icon", "arrow-forward-outline"], [1, "create-new-workspace"], ["nbButton", "", "outline", "", "status", "primary", 3, "click"], ["icon", "plus-outline"]],
        template: function WorkspaceSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 5)(10, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(16, WorkspaceSelectionComponent_div_16_Template, 10, 11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(17, WorkspaceSelectionComponent_div_17_Template, 5, 3, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 7, ctx.welcomeTitle));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(8, 9, ctx.descriptionText, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(14, _c0, ctx.totalWorkspaces)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 12, ctx.selectWorkspaceText), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.confirmedEmail);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.workspaces)("ngForTrackBy", ctx.trackByWorkspaceId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showCreateButton);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu, _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: [".workspace-selection-content[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--text-basic-color);\n  line-height: 1.2;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-hint-color);\n  line-height: 1.4;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--text-basic-color);\n  text-align: center;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%]   .workspace-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  background-color: var(--background-basic-color-1);\n  border: 1px solid var(--border-basic-color-3);\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%]   .workspace-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--background-basic-color-2);\n  border-color: var(--border-basic-color-4);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%]   .workspace-item[_ngcontent-%COMP%]   .workspace-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 1rem;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  background-color: var(--background-basic-color-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%]   .workspace-item[_ngcontent-%COMP%]   .workspace-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%]   .workspace-item[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%]   .workspace-item[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   .workspace-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-basic-color);\n  margin-bottom: 0.25rem;\n  line-height: 1.2;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%]   .workspace-item[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   .workspace-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-hint-color);\n  line-height: 1.2;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%]   .workspace-item[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  color: var(--text-hint-color);\n  font-size: 1.25rem;\n  transition: color 0.2s ease;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .workspace-items[_ngcontent-%COMP%]   .workspace-item[_ngcontent-%COMP%]:hover   nb-icon[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .create-new-workspace[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.5rem;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .create-new-workspace[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  font-weight: 500;\n}\n.workspace-selection-content[_ngcontent-%COMP%]   .workspace-list[_ngcontent-%COMP%]   .create-new-workspace[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}"],
        changeDetection: 0
      });
    }
  }
  return WorkspaceSelectionComponent;
})();

/***/ }),

/***/ 28553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ WorkspaceSharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







/**
 * Shared module for workspace action components.
 * Contains reusable UI components that are used across workspace-create, workspace-signin, and workspace-find.
 */
let WorkspaceSharedModule = /*#__PURE__*/(() => {
  class WorkspaceSharedModule {
    static {
      this.ɵfac = function WorkspaceSharedModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WorkspaceSharedModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: WorkspaceSharedModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G, _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_6__/* .ThemeModule */ .O]
      });
    }
  }
  return WorkspaceSharedModule;
})();

/***/ }),

/***/ 42536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46334);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3065);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .E) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .O)(period, period, scheduler);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 49710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ WorkspaceHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85662);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);






function WorkspaceHeaderComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WorkspaceHeaderComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function WorkspaceHeaderComponent_div_3_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r1.title));
  }
}
function WorkspaceHeaderComponent_div_3_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r1.subtitle));
  }
}
function WorkspaceHeaderComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, WorkspaceHeaderComponent_div_3_h2_2_Template, 3, 3, "h2", 8)(3, WorkspaceHeaderComponent_div_3_p_3_Template, 3, 3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.subtitle);
  }
}
/**
 * Shared header component for workspace action pages.
 * Contains the logo and close button that appears in all workspace action templates.
 */
let WorkspaceHeaderComponent = /*#__PURE__*/(() => {
  class WorkspaceHeaderComponent {
    constructor() {
      this.showCloseButton = true;
      this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    /**
     * Handle close button click
     */
    onClose() {
      this.close.emit();
    }
    static {
      this.ɵfac = function WorkspaceHeaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WorkspaceHeaderComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WorkspaceHeaderComponent,
        selectors: [["ga-workspace-header"]],
        inputs: {
          title: "title",
          subtitle: "subtitle",
          showCloseButton: "showCloseButton"
        },
        outputs: {
          close: "close"
        },
        standalone: false,
        decls: 4,
        vars: 3,
        consts: [[1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], ["nbButton", "", "ghost", "", "size", "small", "type", "button", "class", "close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], ["class", "headings", 4, "ngIf"], ["nbButton", "", "ghost", "", "size", "small", "type", "button", "aria-label", "Close", 1, "close-button", 3, "click"], ["icon", "close-outline"], [1, "headings"], [1, "headings-inner"], ["id", "title", "class", "title", 4, "ngIf"], ["class", "sub-title", 4, "ngIf"], ["id", "title", 1, "title"], [1, "sub-title"]],
        template: function WorkspaceHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-gauzy-logo", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, WorkspaceHeaderComponent_button_2_Template, 2, 0, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, WorkspaceHeaderComponent_div_3_Template, 4, 2, "div", 3);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showCloseButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.title || ctx.subtitle);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu, _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_3__/* .GauzyLogoComponent */ .p, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: [".svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.svg-wrapper[_ngcontent-%COMP%]   .ever-logo-svg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n}\n.svg-wrapper[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: var(--text-hint-color);\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n}\n.svg-wrapper[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--background-basic-color-2);\n  color: var(--text-basic-color);\n}\n.svg-wrapper[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--text-basic-color);\n  outline-offset: 2px;\n  background-color: var(--background-basic-color-2);\n  color: var(--text-basic-color);\n}\n.svg-wrapper[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.headings[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--text-basic-color);\n  line-height: 1.2;\n}\n.headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-hint-color);\n  line-height: 1.4;\n}"],
        changeDetection: 0
      });
    }
  }
  return WorkspaceHeaderComponent;
})();

/***/ }),

/***/ 55818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ TenantService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let TenantService = /*#__PURE__*/(() => {
  class TenantService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/tenant`;
    }
    /**
     * Creates a new tenant using the provided input.
     *
     * @param {ITenantCreateInput} input - The input data required to create a new tenant.
     * @returns {Promise<ITenant>} - A promise that resolves to the created tenant.
     */
    create(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.API_URL}`, input));
    }
    /**
     * Retrieves the settings for the tenant.
     *
     * @returns {Promise<ITenantSetting>} - A promise that resolves to the tenant settings.
     */
    getSettings() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/tenant-setting`));
    }
    /**
     * Saves the provided tenant settings.
     *
     * @param {ITenantSetting} request - The tenant settings to be saved.
     * @returns {Promise<ITenantSetting>} - A promise that resolves to the saved tenant settings.
     */
    saveSettings(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/tenant-setting`, request));
    }
    static {
      this.ɵfac = function TenantService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TenantService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TenantService,
        factory: TenantService.ɵfac
      });
    }
  }
  return TenantService;
})();

/***/ }),

/***/ 67961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ 79354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70480);

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

/***/ 79510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ CountdownTimerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);


/**
 * Service to handle countdown timer functionality.
 * Provides a reusable timer that can be shared across components.
 */
let CountdownTimerService = /*#__PURE__*/(() => {
  class CountdownTimerService {
    constructor() {
      this._timerState = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t({
        countdown: 0,
        isActive: false,
        isResent: false
      });
      this.DEFAULT_COUNTDOWN = 30;
      /**
       * Observable stream of timer state
       */
      this.timerState$ = this._timerState.asObservable();
    }
    /**
     * Get current timer state
     */
    get currentState() {
      return this._timerState.value;
    }
    /**
     * Get current countdown value
     */
    get countdown() {
      return this._timerState.value.countdown;
    }
    /**
     * Check if timer is currently active
     */
    get isActive() {
      return this._timerState.value.isActive;
    }
    /**
     * Check if code was resent (timer is running)
     */
    get isResent() {
      return this._timerState.value.isResent;
    }
    /**
     * Starts a countdown timer with the specified duration.
     *
     * @param duration The countdown duration in seconds (default: 30)
     */
    startTimer(duration = this.DEFAULT_COUNTDOWN) {
      if (duration <= 0) {
        this.stopTimer();
        return;
      }
      // Stop any existing interval without resetting state to avoid flicker
      if (this.timer) {
        this.timer.unsubscribe();
        this.timer = undefined;
      }
      // Update state to show timer is active and code was resent
      this._timerState.next({
        countdown: duration,
        isActive: true,
        isResent: true
      });
      // Start the interval timer
      this.timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .interval */ .Y)(1000).subscribe(() => {
        const currentState = this._timerState.value;
        if (currentState.countdown > 0) {
          this._timerState.next({
            ...currentState,
            countdown: currentState.countdown - 1
          });
        } else {
          this.stopTimer();
        }
      });
    }
    /**
     * Stops the timer and resets the state.
     */
    stopTimer() {
      // Unsubscribe from the timer if it exists
      if (this.timer) {
        this.timer.unsubscribe();
        this.timer = undefined;
      }
      // Reset timer state
      this._timerState.next({
        countdown: 0,
        isActive: false,
        isResent: false
      });
    }
    /**
     * Resets the timer to initial state without starting it.
     */
    resetTimer() {
      this.stopTimer();
    }
    /**
     * Checks if the timer can be started (not currently active).
     */
    canStart() {
      return !this.isActive;
    }
    /**
     * Cleanup method to be called when the service is destroyed.
     * This ensures no memory leaks from active subscriptions.
     */
    ngOnDestroy() {
      this.stopTimer();
    }
    static {
      this.ɵfac = function CountdownTimerService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CountdownTimerService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CountdownTimerService,
        factory: CountdownTimerService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CountdownTimerService;
})();

/***/ }),

/***/ 84059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ patterns)
/* harmony export */ });
const patterns = {
  websiteUrl: /^((?:https?:\/\/)[^./]+(?:\.[^./]+)+(?:\/.*)?)$/,
  imageUrl: /^(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i,
  host: /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/,
  passwordNoSpaceEdges: /^(?!\s).*[^\s]$/
};

/***/ }),

/***/ 88438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ EmailCodeFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);







const _c0 = (a0, a1) => ({
  "normal-text": a0,
  "minimum-text": a1
});
const _c1 = a0 => ({
  requiredLength: a0
});
const _c2 = a0 => ({
  countdown: a0
});
function EmailCodeFormComponent_nb_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmailCodeFormComponent_nb_icon_9_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onEditEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "WORKSPACES.EDIT_EMAIL"));
  }
}
function EmailCodeFormComponent_ng_container_10_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function EmailCodeFormComponent_ng_container_10_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REAL_REQUIRED"), " ");
  }
}
function EmailCodeFormComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmailCodeFormComponent_ng_container_10_p_1_Template, 3, 3, "p", 14)(2, EmailCodeFormComponent_ng_container_10_p_2_Template, 3, 3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.email == null ? null : ctx_r2.email.errors == null ? null : ctx_r2.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.email == null ? null : ctx_r2.email.errors == null ? null : ctx_r2.email.errors.pattern);
  }
}
function EmailCodeFormComponent_ng_container_11_div_17_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.CODE_REQUIRED"), " ");
  }
}
function EmailCodeFormComponent_ng_container_11_div_17_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, "LOGIN_PAGE.VALIDATION.CODE_REQUIRED_LENGTH", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(4, _c1, ctx_r2.code.errors == null ? null : ctx_r2.code.errors.minlength == null ? null : ctx_r2.code.errors.minlength.requiredLength)), " ");
  }
}
function EmailCodeFormComponent_ng_container_11_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmailCodeFormComponent_ng_container_11_div_17_p_1_Template, 3, 3, "p", 14)(2, EmailCodeFormComponent_ng_container_11_div_17_p_2_Template, 3, 6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.code.errors == null ? null : ctx_r2.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.code.errors == null ? null : ctx_r2.code.errors.minlength);
  }
}
function EmailCodeFormComponent_ng_container_11_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, "LOGIN_PAGE.LOGIN_MAGIC.REQUEST_NEW_CODE_TITLE", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(4, _c2, ctx_r2.countdown)), " ");
  }
}
function EmailCodeFormComponent_ng_container_11_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmailCodeFormComponent_ng_container_11_ng_template_20_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onResendCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.LOGIN_MAGIC.RESEND_CODE_TITLE"), " ");
  }
}
function EmailCodeFormComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 16)(2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "b", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 4)(12, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(17, EmailCodeFormComponent_ng_container_11_div_17_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(19, EmailCodeFormComponent_ng_container_11_ng_template_19_Template, 3, 6, "ng-template", 12)(20, EmailCodeFormComponent_ng_container_11_ng_template_20_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const resendButton_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(21);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(20, _c0, ((ctx_r2.email == null ? null : ctx_r2.email.value == null ? null : ctx_r2.email.value.length) || 0) < 30, ((ctx_r2.email == null ? null : ctx_r2.email.value == null ? null : ctx_r2.email.value.length) || 0) >= 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 12, ctx_r2.successSentCodeTitle), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r2.email == null ? null : ctx_r2.email.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 14, ctx_r2.successSentCodeSubTitle));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 16, "LOGIN_PAGE.LABELS.CODE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 18, "LOGIN_PAGE.PLACEHOLDERS.CODE"))("status", ctx_r2.code.dirty ? ctx_r2.code.invalid ? "danger" : "success" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", ctx_r2.code.invalid && ctx_r2.code.touched ? true : null)("autofocus", ctx_r2.isCodeSent ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.code.invalid && ctx_r2.code.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isCodeResent)("ngIfElse", resendButton_r5);
  }
}
function EmailCodeFormComponent_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", ctx_r2.forgotEmailLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "LOGIN_PAGE.FORGOT_EMAIL_TITLE"), " ");
  }
}
function EmailCodeFormComponent_ng_template_15_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 30);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx_r2.isLoading ? "spinner" : "");
  }
}
function EmailCodeFormComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 27)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, EmailCodeFormComponent_ng_template_15_ng_template_4_Template, 1, 1, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.form.invalid || ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-busy", ctx_r2.isLoading ? true : null)("aria-disabled", ctx_r2.form.invalid || ctx_r2.isLoading ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 5, ctx_r2.submitButtonText), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isLoading);
  }
}
function EmailCodeFormComponent_ng_template_16_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 30);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx_r2.isLoading ? "spinner" : "");
  }
}
function EmailCodeFormComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmailCodeFormComponent_ng_template_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onSendCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, EmailCodeFormComponent_ng_template_16_ng_template_4_Template, 1, 1, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.email.invalid || ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-busy", ctx_r2.isLoading ? true : null)("aria-disabled", ctx_r2.email.invalid || ctx_r2.isLoading ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 5, ctx_r2.sendCodeButtonText), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isLoading);
  }
}
/**
 * Shared component for email and code input form.
 * Used across workspace-create, workspace-signin, and workspace-find components.
 */
let EmailCodeFormComponent = /*#__PURE__*/(() => {
  class EmailCodeFormComponent {
    constructor() {
      this.isLoading = false;
      this.isCodeSent = false;
      this.isCodeResent = false;
      this.countdown = 0;
      this.submitButtonText = 'BUTTONS.CONTINUE';
      this.sendCodeButtonText = 'BUTTONS.SEND_CODE';
      this.showForgotEmailLink = false;
      this.forgotEmailLink = 'mailto:support@signimus.com';
      this.showEditEmailButton = true;
      this.descriptionText = 'LOGIN_PAGE.LOGIN_MAGIC.DESCRIPTION_TITLE';
      this.successSentCodeTitle = 'LOGIN_PAGE.LOGIN_MAGIC.SUCCESS_SENT_CODE_TITLE';
      this.successSentCodeSubTitle = 'LOGIN_PAGE.LOGIN_MAGIC.SUCCESS_SENT_CODE_SUB_TITLE';
      this.sendCode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.resendCode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.editEmail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      if (!this.form) {
        throw new Error('Form is required for EmailCodeFormComponent');
      }
    }
    /**
     * Getter for the email form control.
     */
    get email() {
      return this.form.get('email');
    }
    /**
     * Getter for the code form control.
     */
    get code() {
      return this.form.get('code');
    }
    /**
     * Handle send code button click
     */
    onSendCode() {
      this.sendCode.emit();
    }
    /**
     * Handle resend code link click
     */
    onResendCode() {
      this.resendCode.emit();
    }
    /**
     * Handle form submission
     */
    onSubmit() {
      this.submitForm.emit();
    }
    /**
     * Handle edit email button click
     */
    onEditEmail() {
      this.editEmail.emit();
    }
    static {
      this.ɵfac = function EmailCodeFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmailCodeFormComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmailCodeFormComponent,
        selectors: [["ga-email-code-form"]],
        inputs: {
          form: "form",
          isLoading: "isLoading",
          isCodeSent: "isCodeSent",
          isCodeResent: "isCodeResent",
          countdown: "countdown",
          submitButtonText: "submitButtonText",
          sendCodeButtonText: "sendCodeButtonText",
          showForgotEmailLink: "showForgotEmailLink",
          forgotEmailLink: "forgotEmailLink",
          showEditEmailButton: "showEditEmailButton",
          descriptionText: "descriptionText",
          successSentCodeTitle: "successSentCodeTitle",
          successSentCodeSubTitle: "successSentCodeSubTitle"
        },
        outputs: {
          sendCode: "sendCode",
          resendCode: "resendCode",
          submitForm: "submitForm",
          editEmail: "editEmail"
        },
        standalone: false,
        decls: 18,
        vars: 18,
        consts: [["formDirective", "ngForm"], ["sendCodeButtonTemplate", ""], ["resendButton", ""], [3, "ngSubmit", "formGroup"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["type", "email", "name", "input-email", "id", "input-email", "nbInput", "", "fullWidth", "", "formControlName", "email", "autocomplete", "email", 3, "placeholder", "status", "readonly", "ngClass"], ["class", "edit-email", "nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "icon", "edit-outline", "nbTooltipPosition", "top", 3, "nbTooltip", "click", 4, "ngIf"], [4, "ngIf"], [1, "submit-btn-wrapper"], ["class", "forgot-email caption-2 forgot-email-big", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], [1, "submit-inner-wrapper"], [3, "ngIf", "ngIfElse"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "icon", "edit-outline", "nbTooltipPosition", "top", 1, "edit-email", 3, "click", "nbTooltip"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "sent-code-container"], [3, "ngClass"], [1, "title"], ["for", "input-code", 1, "label"], ["name", "input-code", "id", "input-code", "nbInput", "", "fullWidth", "", "formControlName", "code", "maxlength", "6", "autocomplete", "one-time-code", "inputmode", "numeric", 3, "placeholder", "status"], ["role", "alert", "aria-live", "polite", 4, "ngIf"], [1, "new-code-wrapper"], ["role", "alert", "aria-live", "polite"], ["role", "status", "aria-live", "polite", 1, "request-new-code"], [1, "resend-code", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 1, "forgot-email", "caption-2", "forgot-email-big", 3, "href"], ["type", "submit", "nbButton", "", "size", "tiny", 1, "submit-btn", 3, "disabled"], [1, "btn-text"], [3, "ngIf"], ["icon", "loader-outline", 1, "btn-icon", 3, "ngClass"], ["type", "button", "nbButton", "", "size", "tiny", 1, "submit-btn", 3, "click", "disabled"]],
        template: function EmailCodeFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function EmailCodeFormComponent_Template_form_ngSubmit_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onSubmit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 4)(3, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, EmailCodeFormComponent_nb_icon_9_Template, 2, 3, "nb-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, EmailCodeFormComponent_ng_container_10_Template, 3, 2, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, EmailCodeFormComponent_ng_container_11_Template, 22, 23, "ng-container", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, EmailCodeFormComponent_a_13_Template, 3, 4, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(15, EmailCodeFormComponent_ng_template_15_Template, 5, 7, "ng-template", 12)(16, EmailCodeFormComponent_ng_template_16_Template, 5, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const sendCodeButtonTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 14, "LOGIN_PAGE.LABELS.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 16, "LOGIN_PAGE.PLACEHOLDERS.EMAIL"))("status", ctx.email.dirty ? ctx.email.invalid ? "danger" : "success" : "basic")("readonly", ctx.isCodeSent)("ngClass", ctx.isCodeSent ? "not-allowed" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", ctx.email.invalid && ctx.email.touched ? true : null)("autofocus", ctx.isCodeSent ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isCodeSent && ctx.showEditEmailButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.email.invalid && ctx.email.touched && !ctx.email.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isCodeSent);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showForgotEmailLink);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isCodeSent)("ngIfElse", sendCodeButtonTemplate_r7);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .MaxLengthValidator */ .tU, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipDirective */ .BmQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-control-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: var(--text-basic-color);\n}\n.form-control-group[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-control-group[_ngcontent-%COMP%]   input.not-allowed[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: var(--background-basic-color-2);\n}\n.form-control-group[_ngcontent-%COMP%]   .edit-email[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--text-hint-color);\n  transition: all 0.2s ease;\n}\n.form-control-group[_ngcontent-%COMP%]   .edit-email[_ngcontent-%COMP%]:hover {\n  color: var(--text-basic-color);\n}\n.form-control-group[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n}\n.form-control-group[_ngcontent-%COMP%]   .caption.status-danger[_ngcontent-%COMP%] {\n  color: var(--status-danger);\n}\n\n.sent-code-container[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  margin-right: -20px;\n}\n.sent-code-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.sent-code-container[_ngcontent-%COMP%]   p.normal-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.sent-code-container[_ngcontent-%COMP%]   p.minimum-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.sent-code-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.sent-code-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-hint-color);\n}\n\n.new-code-wrapper[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-align: right;\n  margin-top: 0.4rem;\n  margin-right: 0.4rem;\n}\n.new-code-wrapper[_ngcontent-%COMP%]   .resend-code[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  cursor: pointer;\n}\n.new-code-wrapper[_ngcontent-%COMP%]   .request-new-code[_ngcontent-%COMP%] {\n  color: var(--text-hint-color);\n}\n\n.submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  margin-bottom: 0;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%]:hover {\n  color: #fa754e;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email.forgot-email-big[_ngcontent-%COMP%] {\n  display: block;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 59px;\n  position: relative;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .btn-icon.spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.magic-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 0.85rem;\n}\n.magic-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--link-text-color);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .submit-btn[_ngcontent-%COMP%]   .btn-icon.spinner[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return EmailCodeFormComponent;
})();

/***/ })

}]);