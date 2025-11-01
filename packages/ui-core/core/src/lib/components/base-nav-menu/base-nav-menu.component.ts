import { Directive, OnDestroy, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, startWith, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FeatureEnum, IOrganization, PermissionsEnum } from '@gauzy/contracts';
import { distinctUntilChange } from '@gauzy/ui-core/common';
import { TranslationBaseComponent } from '@gauzy/ui-core/i18n';
import {
	FavoriteStoreService,
	NavMenuBuilderService,
	NavMenuSectionItem,
	SidebarMenuService,
	Store
} from '../../services';

@UntilDestroy()
@Directive({
	selector: '[gaBaseNavMenu]',
	standalone: false
})
export class BaseNavMenuComponent extends TranslationBaseComponent implements OnInit, OnDestroy {
	private _favoriteItems: NavMenuSectionItem[] = [];

	constructor(
		protected readonly _navMenuBuilderService: NavMenuBuilderService,
		protected readonly _store: Store,
		protected readonly _sidebarMenuService: SidebarMenuService,
		protected readonly _translateService: TranslateService,
		protected readonly _favoriteStoreService: FavoriteStoreService
	) {
		super(_translateService);
	}

	ngOnInit(): void {
		this.defineBaseNavMenus();
	}

	ngAfterViewInit() {
		const merge$ = combineLatest([
			this._favoriteStoreService.favoriteItems$,
			this._translateService.onLangChange.pipe(startWith(null)),
			this._store.selectedOrganization$.pipe(
				filter((organization: IOrganization) => !!organization),
				distinctUntilChange()
			),
			this._store.featureOrganizations$,
			this._store.featureTenant$,
			this._store.userRolePermissions$
		]).pipe(
			tap(([favorites]) => {
				this._favoriteItems = favorites;
				this.defineBaseNavMenus();
			}),
			untilDestroyed(this)
		);
		merge$.subscribe();
	}

	/**
	 * Defines the base navigation menus.
	 */
	private defineBaseNavMenus() {
		this._navMenuBuilderService.defineNavMenuSections([
			...this._getMainMenu(),
			...this._getAccordionMenu(),
			...this._getSettingsMenu()
		]);
	}

	/**
	 * Retrieves the main navigation menu configuration.
	 * @returns An array of NavMenuSectionItem objects representing the main menu.
	 */
	private _getMainMenu(): NavMenuSectionItem[] {
		return [
			{
				id: 'dashboards',
				title: 'Dashboards',
				icon: 'fas fa-th',
				link: '/pages/dashboard',
				pathMatch: 'prefix',
				home: true,
				data: {
					translationKey: 'MENU.DASHBOARDS',
					featureKey: FeatureEnum.FEATURE_DASHBOARD
				}
			},
			{
				id: 'focus',
				title: 'Focus',
				icon: 'fas fa-bullseye',
				link: '/pages/dashboard',
				pathMatch: 'prefix',
				class: 'focus',
				hidden: true,
				data: {
					translationKey: 'MENU.FOCUS',
					featureKey: FeatureEnum.FEATURE_DASHBOARD
				}
			},
			{
				id: 'applications',
				title: 'Applications',
				icon: 'far fa-window-maximize',
				link: '/pages/dashboard',
				pathMatch: 'prefix',
				class: 'application',
				hidden: true,
				data: {
					translationKey: 'MENU.APPLICATIONS',
					featureKey: FeatureEnum.FEATURE_DASHBOARD
				}
			},
			{
				id: 'favorites',
				title: 'Favorites',
				icon: 'far fa-star',
				hidden: this._favoriteItems.length === 0,
				data: {
					translationKey: 'MENU.FAVORITES'
				},
				items: this._favoriteItems
			},
			{
				id: 'finance',
				title: 'Finance',
				icon: 'far fa-address-card',
				data: {
					translationKey: 'MENU.FINANCE'
				},
				items: [
					{
						id: 'finance-admission-applications',
						title: 'Admission Applications',
						icon: 'far fa-file',
						link: '/pages/finance/admissions',
						data: {
							translationKey: 'MENU.ADMISSION_APPLICATIONS',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.STUDENT_ADMISSION_VIEW],
							featureKey: FeatureEnum.FEATURE_ADMISSION_APPLICATION,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.STUDENT_ADMISSION_EDIT
							) && {
								add: '/pages/finance/admissions/add'
							})
						}
					},
					{
						id: 'finance-admission-applications-received',
						title: 'Applications Received',
						icon: 'fas fa-file-invoice',
						link: '/pages/finance/admissions/received',
						data: {
							translationKey: 'MENU.APPLICATIONS_RECEIVED',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.STUDENT_ADMISSION_VIEW],
							featureKey: FeatureEnum.FEATURE_ADMISSION_APPLICATION_RECEIVED
						}
					},
					{
						id: 'finance-billing',
						title: 'Billing',
						icon: 'far fa-file-alt',
						link: '/pages/finance/billing',
						pathMatch: 'full',
						data: {
							translationKey: 'MENU.BILLING',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.FINANCE_VIEW],
							featureKey: FeatureEnum.FEATURE_BILLING,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.FINANCE_EDIT
							) && {
								add: '/pages/finance/billing/add'
							})
						}
					},
					{
						id: 'finance-billing-recurring',
						title: 'Recurring Billing',
						icon: 'fas fa-exchange-alt fa-rotate-90',
						link: '/pages/finance/billing/recurring',
						pathMatch: 'prefix',
						data: {
							translationKey: 'MENU.RECURRING_BILLING',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.FINANCE_VIEW],
							featureKey: FeatureEnum.FEATURE_BILLING_RECURRING
						}
					},
					{
						id: 'finance-billing-received',
						title: 'Billing Received',
						icon: 'fas fa-file-invoice-dollar',
						link: '/pages/finance/billing/received',
						pathMatch: 'prefix',
						data: {
							translationKey: 'MENU.BILLING_RECEIVED',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.FINANCE_VIEW],
							featureKey: FeatureEnum.FEATURE_BILLING_RECEIVED
						}
					},
					{
						id: 'finance-income',
						title: 'Income',
						icon: 'fas fa-plus-circle',
						link: '/pages/finance/income',
						data: {
							translationKey: 'MENU.INCOME',
							permissionKeys: [PermissionsEnum.ORG_INCOMES_VIEW],
							featureKey: FeatureEnum.FEATURE_INCOME,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_INCOMES_EDIT
							) && {
								add: '/pages/finance/income?openAddDialog=true'
							})
						}
					},
					{
						id: 'finance-expenses',
						title: 'Expenses',
						icon: 'fas fa-minus-circle',
						link: '/pages/finance/expenses',
						data: {
							translationKey: 'MENU.EXPENSES',
							permissionKeys: [PermissionsEnum.ORG_EXPENSES_VIEW],
							featureKey: FeatureEnum.FEATURE_EXPENSE,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_EXPENSES_EDIT
							) && {
								add: '/pages/finance/expenses?openAddDialog=true'
							})
						}
					},
					{
						id: 'finance-expense-recurring',
						title: 'Recurring Expenses',
						icon: 'fas fa-exchange-alt fa-rotate-90',
						link: '/pages/finance/expense-recurring',
						data: {
							translationKey: 'ORGANIZATIONS_PAGE.EXPENSE_RECURRING',
							permissionKeys: [PermissionsEnum.ORG_EXPENSES_VIEW],
							featureKey: FeatureEnum.FEATURE_ORGANIZATION_RECURRING_EXPENSE,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_EXPENSES_EDIT
							) && {
								add: '/pages/finance/expense-recurring?openAddDialog=true'
							})
						}
					},
					{
						id: 'finance-payments',
						title: 'Payments',
						icon: 'fas fa-cash-register',
						link: '/pages/finance/payments',
						data: {
							translationKey: 'MENU.PAYMENTS',
							permissionKeys: [PermissionsEnum.ORG_PAYMENT_VIEW],
							featureKey: FeatureEnum.FEATURE_PAYMENT,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_PAYMENT_ADD_EDIT
							) && {
								add: '/pages/finance/payments?openAddDialog=true'
							})
						}
					}
				]
			},
			{
				id: 'admissions',
				title: 'Admissions',
				icon: 'fas fa-chart-line',
				link: '/pages/admissions',
				data: {
					translationKey: 'MENU.ADMISSIONS',
					permissionKeys: [PermissionsEnum.STUDENT_ADMISSION_VIEW]
				},
				items: [
					{
						id: 'admissions-applications',
						title: 'Applications',
						icon: 'fas fa-paper-plane',
						link: '/pages/admissions/applications',
						data: {
							translationKey: 'MENU.APPLICATIONS',
							permissionKeys: [PermissionsEnum.STUDENT_ADMISSION_VIEW],
							featureKey: FeatureEnum.FEATURE_ADMISSION_APPLICATION,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.STUDENT_ADMISSION_EDIT
							) && {
								add: '/pages/admissions/applications/register'
							})
						}
					},
					{
						id: 'admissions-acceptance',
						title: 'Acceptance Letters',
						icon: 'far fa-file',
						link: '/pages/admissions/acceptance',
						data: {
							translationKey: 'MENU.ACCEPTANCE_LETTERS',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.STUDENT_ADMISSION_VIEW],
							featureKey: FeatureEnum.FEATURE_ADMISSION_APPLICATION,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.STUDENT_ADMISSION_EDIT
							) && {
								add: '/pages/admissions/acceptance/add'
							})
						}
					},
					{
						id: 'admissions-billing',
						title: 'Billing',
						icon: 'far fa-file-alt',
						link: '/pages/admissions/billing',
						data: {
							translationKey: 'MENU.BILLING',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.FINANCE_VIEW],
							featureKey: FeatureEnum.FEATURE_BILLING,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.FINANCE_EDIT
							) && {
								add: '/pages/admissions/billing/add'
							})
						}
					},
					{
						id: 'admissions-recurring-billing',
						title: 'Recurring Billing',
						icon: 'fas fa-exchange-alt fa-rotate-90',
						link: '/pages/admissions/billing/recurring',
						data: {
							translationKey: 'MENU.RECURRING_BILLING',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.FINANCE_VIEW],
							featureKey: FeatureEnum.FEATURE_BILLING_RECURRING
						}
					},
					{
						id: 'admissions-payments',
						title: 'Payments',
						icon: 'fas fa-cash-register',
						link: '/pages/admissions/payments',
						data: {
							translationKey: 'MENU.PAYMENTS',
							permissionKeys: [PermissionsEnum.ORG_PAYMENT_VIEW],
							featureKey: FeatureEnum.FEATURE_PAYMENT,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_PAYMENT_ADD_EDIT
							) && {
								add: '/pages/admissions/payments?openAddDialog=true'
							})
						}
					},
					{
						id: 'admissions-processes',
						title: 'Admission Processes',
						icon: 'fas fa-filter',
						link: '/pages/admissions/processes',
						data: {
							translationKey: 'MENU.ADMISSION_PROCESSES',
							permissionKeys: [PermissionsEnum.VIEW_ADMISSION_PROCESSES],
							featureKey: FeatureEnum.FEATURE_ADMISSION_PROCESS,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.EDIT_ADMISSION_PROCESSES
							) && {
								add: '/pages/admissions/processes?openAddDialog=true'
							})
						}
					}
				]
			},
			{
				id: 'assignments',
				title: 'Assignments',
				icon: 'fas fa-tasks',
				link: '/pages/assignments',
				data: {
					translationKey: 'MENU.ASSIGNMENTS'
				},
				items: [
					{
						id: 'assignments-dashboard',
						title: 'Dashboard',
						icon: 'fas fa-th',
						link: '/pages/assignments/dashboard',
						data: {
							translationKey: 'MENU.DASHBOARD',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.COURSE_ASSIGNMENT_VIEW],
							featureKey: FeatureEnum.FEATURE_DASHBOARD_TASK,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.COURSE_ASSIGNMENT_ADD
							) && {
								add: '/pages/assignments/dashboard?openAddDialog=true'
							})
						}
					},
					{
						id: 'assignments-student',
						title: "Student's Assignments",
						icon: 'fas fa-user-friends',
						link: '/pages/assignments/student',
						data: {
							translationKey: 'MENU.STUDENT_ASSIGNMENTS',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.COURSE_ASSIGNMENT_VIEW],
							featureKey: FeatureEnum.FEATURE_STUDENT_ASSIGNMENT,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.COURSE_ASSIGNMENT_ADD
							) && {
								add: '/pages/assignments/student?openAddDialog=true'
							})
						}
					}
				]
			},
			{
				id: 'staff',
				title: 'Staff',
				icon: 'fas fa-briefcase',
				link: '/pages/staff',
				data: {
					translationKey: 'MENU.STAFF',
					featureKey: FeatureEnum.FEATURE_STAFF
				},
				items: [
					{
						id: 'staff-teacher',
						title: 'Teachers',
						icon: 'fas fa-user-friends',
						link: '/pages/staff/teachers',
						data: {
							translationKey: 'MENU.TEACHERS',
							permissionKeys: [PermissionsEnum.STAFF_VIEW]
						}
					},
					{
						id: 'staff-contract-template',
						title: 'Contract Template',
						icon: 'far fa-file-alt',
						link: '/pages/staff/contract-template',
						data: {
							translationKey: 'MENU.CONTRACT_TEMPLATE',
							permissionKeys: [PermissionsEnum.STAFF_CONTRACT_TEMPLATES_VIEW],
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.STAFF_CONTRACT_TEMPLATES_EDIT
							) && {
								add: '/pages/staff/contract-template?openAddDialog=true'
							})
						}
					}
				]
			},
			{
				id: 'users',
				title: 'Users',
				icon: 'fas fa-user-friends',
				data: {
					translationKey: 'MENU.USERS'
				},
				items: [
					{
						id: 'users-teachers',
						title: 'Teachers & Staff',
						icon: 'fas fa-list',
						link: '/pages/users/teachers',
						pathMatch: 'full',
						data: {
							translationKey: 'MENU.MANAGE',
							permissionKeys: [PermissionsEnum.STAFF_VIEW],
							featureKey: FeatureEnum.FEATURE_STAFF
						}
					},
					{
						id: 'users-students',
						title: 'Students',
						icon: 'fas fa-graduation-cap',
						link: '/pages/users/students',
						pathMatch: 'prefix',
						data: {
							translationKey: 'MENU.STUDENTS',
							permissionKeys: [PermissionsEnum.STUDENT_VIEW],
							featureKey: FeatureEnum.FEATURE_STUDENT
						}
					},
					{
						id: 'users-parents',
						title: 'Parents & Guardians',
						icon: 'fas fa-users',
						link: '/pages/users/parents',
						pathMatch: 'prefix',
						data: {
							translationKey: 'MENU.PARENTS',
							featureKey: FeatureEnum.FEATURE_PARENT
						}
					},
					{
						id: 'users-approvals',
						title: 'Approvals',
						icon: 'fas fa-repeat',
						link: '/pages/users/approvals',
						data: {
							translationKey: 'MENU.APPROVALS',
							permissionKeys: [PermissionsEnum.REQUEST_APPROVAL_VIEW],
							featureKey: FeatureEnum.FEATURE_USER_APPROVAL,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.REQUEST_APPROVAL_EDIT
							) && {
								add: '/pages/users/approvals?openAddDialog=true'
							})
						}
					},
					{
						id: 'users-roles',
						title: 'Teacher Levels',
						icon: 'fas fa-chart-bar',
						link: `/pages/users/teacher-level`,
						data: {
							translationKey: 'MENU.TEACHER_LEVEL',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW],
							featureKey: FeatureEnum.FEATURE_TEACHER_LEVEL
						}
					},
					{
						id: 'users-positions',
						title: 'Positions',
						icon: 'fas fa-award',
						link: `/pages/users/positions`,
						data: {
							translationKey: 'MENU.POSITIONS',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW],
							featureKey: FeatureEnum.FEATURE_USER_POSITION
						}
					},
					{
						id: 'users-leave',
						title: 'Leave',
						icon: 'far fa-times-circle',
						link: '/pages/users/leave',
						data: {
							translationKey: 'MENU.LEAVE',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.TIME_OFF_VIEW],
							featureKey: FeatureEnum.FEATURE_USER_LEAVE,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.TIME_OFF_ADD
							) && {
								add: '/pages/users/leave?openAddDialog=true'
							})
						}
					},
					{
						id: 'users-recurring-expenses',
						title: 'Recurring Expenses',
						icon: 'fas fa-exchange-alt fa-rotate-90',
						link: '/pages/users/recurring-expenses',
						data: {
							translationKey: 'MENU.RECURRING_EXPENSE',
							permissionKeys: [PermissionsEnum.EMPLOYEE_EXPENSES_VIEW],
							featureKey: FeatureEnum.FEATURE_USER_RECURRING_EXPENSE,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.EMPLOYEE_EXPENSES_EDIT
							) && {
								add: '/pages/users/recurring-expenses?openAddDialog=true'
							})
						}
					},
					{
						id: 'users-applicants',
						title: 'Applicants',
						icon: 'fas fa-user-check',
						link: '/pages/users/applicants',
						data: {
							translationKey: 'MENU.APPLICANTS',
							permissionKeys: [PermissionsEnum.STAFF_CANDIDATES_VIEW],
							featureKey: FeatureEnum.FEATURE_USER_APPLICANT,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.STAFF_CANDIDATES_EDIT
							) && {
								add: '/pages/users/applicants?openAddDialog=true'
							})
						}
					}
				]
			},
			{
				id: 'academics',
				title: 'Academics',
				icon: 'fas fa-graduation-cap',
				data: {
					translationKey: 'MENU.ACADEMICS'
				},
				items: [
					{
						id: 'academics-library',
						title: 'Library',
						icon: 'fas fa-book',
						link: '/pages/academics/library',
						data: {
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.LIBRARY_VIEW],
							translationKey: 'MENU.LIBRARY',
							featureKey: FeatureEnum.FEATURE_LIBRARY,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.LIBRARY_EDIT
							) && {
								add: '/pages/academics/library?openAddDialog=true'
							})
						}
					},
					{
						id: 'academics-inventory',
						title: 'Equipment',
						icon: 'fas fa-grip-vertical',
						link: '/pages/academics/equipment',
						pathMatch: 'prefix',
						data: {
							translationKey: 'MENU.EQUIPMENT',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW],
							featureKey: FeatureEnum.FEATURE_EQUIPMENT,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.INVENTORY_GALLERY_ADD
							) && {
								add: '/pages/academics/equipment/create'
							})
						}
					},
					{
						id: 'academics-tags',
						title: 'Tags',
						icon: 'fas fa-tag',
						link: '/pages/academics/tags',
						data: {
							translationKey: 'MENU.TAGS',
							permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.ORG_TAGS_ADD],
							featureKey: FeatureEnum.FEATURE_ACADEMICS_TAG,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_TAGS_ADD
							) && {
								add: '/pages/academics/tags?openAddDialog=true'
							})
						}
					},
					{
						id: 'academics-vendors',
						title: 'Suppliers',
						icon: 'fas fa-truck',
						link: '/pages/academics/suppliers',
						data: {
							translationKey: 'ACADEMICS_PAGE.SUPPLIERS',
							permissionKeys: [PermissionsEnum.ALL_ORG_EDIT],
							featureKey: FeatureEnum.FEATURE_SUPPLIER,
							...(this._store.hasAnyPermission(PermissionsEnum.ALL_ORG_EDIT) && {
								add: '/pages/academics/suppliers?openAddDialog=true'
							})
						}
					},
					{
						id: 'academics-courses',
						title: 'Courses',
						icon: 'fas fa-book',
						link: `/pages/academics/courses`,
						data: {
							translationKey: 'ACADEMICS_PAGE.COURSES',
							permissionKeys: [PermissionsEnum.ALL_ORG_EDIT, PermissionsEnum.COURSE_VIEW],
							featureKey: FeatureEnum.FEATURE_COURSE,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.COURSE_ADD
							) && {
								add: '/pages/academics/courses/create'
							})
						}
					},
					{
						id: 'academics-departments',
						title: 'Departments',
						icon: ' fas fa-briefcase',
						link: `/pages/academics/departments`,
						data: {
							translationKey: 'ACADEMICS_PAGE.DEPARTMENTS',
							permissionKeys: [PermissionsEnum.ALL_ORG_EDIT],
							featureKey: FeatureEnum.FEATURE_ACADEMICS_DEPARTMENT,
							...(this._store.hasAnyPermission(PermissionsEnum.ALL_ORG_EDIT) && {
								add: '/pages/academics/departments?openAddDialog=true'
							})
						}
					},
					{
						id: 'academics-classes',
						title: 'Classes',
						icon: 'fas fa-user-friends',
						link: `/pages/academics/classes`,
						data: {
							translationKey: 'ACADEMICS_PAGE.CLASSES',
							permissionKeys: [PermissionsEnum.ALL_ORG_EDIT, PermissionsEnum.CLASS_VIEW],
							featureKey: FeatureEnum.FEATURE_CLASS,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.CLASS_EDIT
							) && {
								add: '/pages/academics/classes?openAddDialog=true'
							})
						}
					},
					{
						id: 'academics-documents',
						title: 'Documents',
						icon: 'far fa-file-alt',
						link: `/pages/academics/documents`,
						data: {
							translationKey: 'ACADEMICS_PAGE.DOCUMENTS',
							permissionKeys: [PermissionsEnum.ALL_ORG_EDIT],
							featureKey: FeatureEnum.FEATURE_ACADEMICS_DOCUMENT,
							...(this._store.hasAnyPermission(PermissionsEnum.ALL_ORG_EDIT) && {
								add: '/pages/academics/documents?openAddDialog=true'
							})
						}
					},
					{
						id: 'academics-program',
						title: 'Programs',
						icon: 'fas fa-layer-group',
						link: `/pages/academics/programs`,
						data: {
							translationKey: 'ACADEMICS_PAGE.PROGRAMS',
							permissionKeys: [PermissionsEnum.ALL_ORG_EDIT],
							featureKey: FeatureEnum.FEATURE_ACADEMICS_PROGRAM,
							...(this._store.hasAnyPermission(PermissionsEnum.ALL_ORG_EDIT) && {
								add: '/pages/academics/programs?openAddDialog=true'
							})
						}
					},
					{
						id: 'academics-recurring-expenses',
						title: 'Recurring Expenses',
						icon: 'fas fa-exchange-alt fa-rotate-90',
						link: '/pages/academics/recurring-expenses',
						data: {
							translationKey: 'ACADEMICS_PAGE.RECURRING_EXPENSES',
							permissionKeys: [PermissionsEnum.ORG_EXPENSES_VIEW],
							featureKey: FeatureEnum.FEATURE_ACADEMICS_RECURRING_EXPENSE,
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_EXPENSES_EDIT
							) && {
								add: '/pages/academics/recurring-expenses?openAddDialog=true'
							})
						}
					},
					{
						id: 'academics-help',
						title: 'Help Center',
						icon: 'far fa-question-circle',
						link: '/pages/academics/help-center',
						data: {
							translationKey: 'ACADEMICS_PAGE.HELP_CENTER',
							featureKey: FeatureEnum.FEATURE_ACADEMICS_HELP_CENTER
						}
					}
				]
			},
			{
				id: 'contacts',
				title: 'Contacts',
				icon: 'far fa-address-book',
				data: {
					translationKey: 'MENU.CONTACTS',
					permissionKeys: [PermissionsEnum.ORG_CONTACT_VIEW, PermissionsEnum.ALL_ORG_VIEW],
					featureKey: FeatureEnum.FEATURE_CONTACT
				},
				items: [
					{
						id: 'contacts-visitors',
						title: 'Visitors',
						icon: 'fas fa-id-badge',
						link: `/pages/contacts/visitors`,
						data: {
							translationKey: 'CONTACTS_PAGE.VISITORS'
						}
					},
					{
						id: 'contacts-prospects',
						title: 'Prospects',
						icon: 'fas fa-id-badge',
						link: `/pages/contacts/prospects`,
						data: {
							translationKey: 'CONTACTS_PAGE.PROSPECTS',
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_CONTACT_EDIT
							) && {
								add: '/pages/contacts/prospects?openAddDialog=true'
							})
						}
					},
					{
						id: 'contacts-parents',
						title: 'Parents',
						icon: 'fas fa-id-badge',
						link: `/pages/contacts/parents`,
						data: {
							translationKey: 'CONTACTS_PAGE.PARENTS',
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_CONTACT_EDIT
							) && {
								add: '/pages/contacts/parents?openAddDialog=true'
							})
						}
					},
					{
						id: 'contacts-guardians',
						title: 'Guardians',
						icon: 'fas fa-id-badge',
						link: `/pages/contacts/guardians`,
						data: {
							translationKey: 'CONTACTS_PAGE.GUARDIANS',
							...(this._store.hasAnyPermission(
								PermissionsEnum.ALL_ORG_EDIT,
								PermissionsEnum.ORG_CONTACT_EDIT
							) && {
								add: '/pages/contacts/guardians?openAddDialog=true'
							})
						}
					}
				]
			},
			{
				id: 'goals',
				title: 'Academic Goals',
				icon: 'fab fa-font-awesome-flag',
				data: {
					translationKey: 'MENU.ACADEMIC_GOALS'
				},
				items: [
					{
						id: 'goals-manage',
						title: 'Manage',
						link: '/pages/goals',
						pathMatch: 'full',
						icon: 'fas fa-list',
						data: {
							translationKey: 'MENU.MANAGE',
							featureKey: FeatureEnum.FEATURE_GOAL
						}
					},
					{
						id: 'goals-report',
						title: 'Report',
						link: '/pages/goals/reports',
						icon: 'far fa-file-alt',
						data: {
							translationKey: 'MENU.REPORTS',
							featureKey: FeatureEnum.FEATURE_GOAL_REPORT
						}
					},
					{
						id: 'goals-settings',
						title: 'Settings',
						link: '/pages/goals/settings',
						icon: 'fas fa-cog',
						data: {
							translationKey: 'MENU.SETTINGS',
							featureKey: FeatureEnum.FEATURE_GOAL_SETTING
						}
					}
				]
			},
			{
				id: 'reports',
				title: 'Reports',
				icon: 'fas fa-chart-pie',
				link: '/pages/reports',
				data: {
					translationKey: 'MENU.REPORTS',
					featureKey: FeatureEnum.FEATURE_REPORT
				},
				items: [
					{
						id: 'reports-all',
						title: 'All Reports',
						link: '/pages/reports/all',
						icon: 'fas fa-chart-bar',
						data: {
							translationKey: 'MENU.ALL_REPORTS'
						}
					}
				]
			}
		];
	}

	/**
	 * Retrieves the accordion menu configuration based on user permissions.
	 * Each menu item includes an ID, title, icon, link, and additional data such as translation keys,
	 * permission keys, and feature keys.
	 *
	 * @returns An array of NavMenuSectionItem objects representing the accordion menu.
	 */
	private _getAccordionMenu(): NavMenuSectionItem[] {
		return [
			{
				id: 'invite-people',
				title: 'Invite Students',
				icon: 'fas fa-user-plus',
				link: '/pages/users/invites',
				menuCategory: 'accordion',
				data: {
					translationKey: 'MENU.INVITE_STUDENTS',
					permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.ORG_INVITE_VIEW],
					featureKey: FeatureEnum.FEATURE_MANAGE_INVITE
				}
			},
			{
				id: 'users',
				title: 'Users',
				icon: 'fas fa-users',
				link: '/pages/users',
				menuCategory: 'accordion',
				data: {
					translationKey: 'MENU.USERS',
					permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.ORG_USERS_VIEW],
					featureKey: FeatureEnum.FEATURE_USER
				}
			},
			{
				id: 'import-export',
				title: 'Import/Export',
				icon: 'fas fa-exchange-alt',
				link: '/pages/settings/import-export',
				menuCategory: 'accordion',
				data: {
					translationKey: 'MENU.IMPORT_EXPORT.IMPORT_EXPORT',
					permissionKeys: [
						PermissionsEnum.ALL_ORG_VIEW,
						PermissionsEnum.IMPORT_ADD,
						PermissionsEnum.EXPORT_ADD
					],
					featureKey: FeatureEnum.FEATURE_IMPORT_EXPORT
				}
			},
			{
				id: 'schools',
				title: 'Schools',
				icon: 'fas fa-school',
				link: '/pages/schools',
				menuCategory: 'accordion',
				data: {
					translationKey: 'MENU.SCHOOLS',
					permissionKeys: [PermissionsEnum.ALL_ORG_VIEW, PermissionsEnum.ORG_EXPENSES_EDIT],
					featureKey: FeatureEnum.FEATURE_ORGANIZATIONS
				}
			},
			{
				id: 'integrations',
				title: 'Integrations',
				icon: 'fas fa-swatchbook',
				link: '/pages/integrations',
				menuCategory: 'accordion',
				pathMatch: 'prefix',
				data: {
					translationKey: 'MENU.INTEGRATIONS',
					permissionKeys: [PermissionsEnum.INTEGRATION_ADD, PermissionsEnum.INTEGRATION_EDIT],
					featureKey: FeatureEnum.FEATURE_APP_INTEGRATION
				}
			}
		];
	}

	/**
	 * Retrieves the settings menu configuration.
	 *
	 * @returns An array containing a single NavMenuSectionItem for settings.
	 */
	private _getSettingsMenu(): NavMenuSectionItem[] {
		return [
			{
				id: 'settings',
				title: 'Settings',
				icon: 'fas fa-cog',
				menuCategory: 'settings',
				data: {
					translationKey: 'MENU.SETTINGS'
				},
				items: [
					{
						id: 'settings-general',
						title: 'General',
						icon: 'fas fa-pen',
						link: '/pages/settings/general',
						data: {
							translationKey: 'MENU.GENERAL',
							featureKey: FeatureEnum.FEATURE_SETTING
						}
					},
					{
						id: 'settings-features',
						title: 'Features',
						icon: 'fas fa-swatchbook',
						link: '/pages/settings/features',
						data: {
							translationKey: 'MENU.FEATURES',
							permissionKeys: [PermissionsEnum.ALL_ORG_EDIT, PermissionsEnum.ALL_ORG_VIEW]
						}
					},
					{
						id: 'settings-email-history',
						title: 'Email History',
						icon: 'fas fa-envelope-open',
						link: '/pages/settings/email-history',
						data: {
							translationKey: 'MENU.EMAIL_HISTORY',
							permissionKeys: [PermissionsEnum.VIEW_ALL_EMAILS],
							featureKey: FeatureEnum.FEATURE_EMAIL_HISTORY
						}
					},
					{
						id: 'settings-email-templates',
						title: 'Email Templates',
						icon: 'fas fa-envelope',
						link: '/pages/settings/email-templates',
						data: {
							translationKey: 'MENU.EMAIL_TEMPLATES',
							permissionKeys: [PermissionsEnum.VIEW_ALL_EMAIL_TEMPLATES],
							featureKey: FeatureEnum.FEATURE_EMAIL_TEMPLATE
						}
					},
					{
						id: 'settings-accounting-templates',
						title: 'Accounting Templates',
						icon: 'fas fa-address-card',
						link: '/pages/settings/accounting-templates',
						data: {
							translationKey: 'MENU.ACCOUNTING_TEMPLATES',
							permissionKeys: [PermissionsEnum.VIEW_ALL_ACCOUNTING_TEMPLATES]
						}
					},
					{
						id: 'settings-file-storage',
						title: 'File storage',
						icon: 'fas fa-database',
						link: '/pages/settings/file-storage',
						data: {
							translationKey: 'MENU.FILE_STORAGE',
							permissionKeys: [PermissionsEnum.FILE_STORAGE_VIEW],
							featureKey: FeatureEnum.FEATURE_FILE_STORAGE
						}
					},
					{
						id: 'settings-sms-gateways',
						title: 'SMS Gateways',
						icon: 'fas fa-at',
						link: '/pages/settings/sms-gateway',
						data: {
							translationKey: 'MENU.SMS_GATEWAYS',
							permissionKeys: [PermissionsEnum.SMS_GATEWAY_VIEW],
							featureKey: FeatureEnum.FEATURE_SMS_GATEWAY
						}
					},
					{
						id: 'settings-custom-smtp',
						title: 'Custom SMTP',
						icon: 'fas fa-at',
						link: '/pages/settings/custom-smtp',
						data: {
							translationKey: 'MENU.CUSTOM_SMTP',
							permissionKeys: [PermissionsEnum.CUSTOM_SMTP_VIEW],
							featureKey: FeatureEnum.FEATURE_SMTP
						}
					},
					{
						id: 'settings-roles-permissions',
						title: 'Roles & Permissions',
						link: '/pages/settings/roles-permissions',
						icon: 'fas fa-award',
						data: {
							translationKey: 'MENU.ROLES',
							permissionKeys: [PermissionsEnum.CHANGE_ROLES_PERMISSIONS],
							featureKey: FeatureEnum.FEATURE_ROLES_PERMISSION
						}
					},
					{
						id: 'settings-danger-zone',
						title: 'Danger Zone',
						link: '/pages/settings/danger-zone',
						icon: 'fas fa-radiation-alt',
						data: {
							translationKey: 'MENU.DANGER_ZONE',
							permissionKeys: [
								PermissionsEnum.ACCESS_DELETE_ACCOUNT,
								PermissionsEnum.ACCESS_DELETE_ALL_DATA
							]
						}
					}
				]
			}
		];
	}

	/**
	 * Maps menu sections and their sub-sections recursively.
	 *
	 * @param items The menu items to map.
	 * @returns The mapped menu sections.
	 */
	public mapMenuSections(items: NavMenuSectionItem[]): NavMenuSectionItem[] {
		return items.map((item: NavMenuSectionItem) => this.mapMenuSection(item));
	}

	/**
	 * Maps a single menu section and its sub-sections recursively.
	 *
	 * @param section The menu section to map.
	 * @returns The mapped menu section.
	 */
	public mapMenuSection(item: NavMenuSectionItem): NavMenuSectionItem {
		const section: NavMenuSectionItem = {
			...item,
			title: this.getTranslation(item.data.translationKey),
			hidden: item.hidden || this.isSectionHidden(item)
		};

		if (item.items) {
			section.children = this.mapMenuSections(item.items);
		}

		return section;
	}

	/**
	 * Checks if a menu section should be hidden based on permissions and features.
	 *
	 * @param section The menu section to check.
	 * @returns True if the section should be hidden, false otherwise.
	 */
	public isSectionHidden(section: NavMenuSectionItem): boolean {
		const { data } = section;
		let isHidden = false;

		// Check if section should be hidden based on permissions or custom hide function
		if (data.permissionKeys || data.hide) {
			// If permission keys are provided, check if any permission is granted
			const anyPermission = data.permissionKeys ? this._store.hasAnyPermission(...data.permissionKeys) : true;

			// If any permission is not granted or custom hide function returns true, hide the section
			if (!anyPermission || (data.hide && data.hide())) {
				isHidden = true;
			}
		}

		// If feature key is provided, check if the feature is enabled
		if (data.featureKey && isHidden === false) {
			isHidden = !this._store.hasFeatureEnabled(data.featureKey);
		}

		// If none of the above conditions are met, the section should not be hidden
		return isHidden;
	}

	ngOnDestroy(): void {}
}
