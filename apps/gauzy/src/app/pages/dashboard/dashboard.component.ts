import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ISelectedEmployee, PermissionsEnum } from '@gauzy/contracts';
import { PageTabRegistryService, Store, PageTabsetRegistryId } from '@gauzy/ui-core/core';
import { TranslationBaseComponent } from '@gauzy/ui-core/i18n';
import { DynamicTabsComponent } from '@gauzy/ui-core/shared';

@UntilDestroy()
@Component({
    selector: 'ga-dashboard-layout',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})
export class DashboardComponent extends TranslationBaseComponent implements OnInit, OnDestroy {
	public tabsetId: PageTabsetRegistryId = this._route.snapshot.data.tabsetId; // The identifier for the tabset
	public selectedEmployee: ISelectedEmployee;

	@ViewChild('dynamicTabs', { static: true }) dynamicTabsComponent!: DynamicTabsComponent;

	constructor(
		public readonly translateService: TranslateService,
		private readonly _route: ActivatedRoute,
		private readonly _store: Store,
		private readonly _pageTabRegistryService: PageTabRegistryService
	) {
		super(translateService);
	}

	ngOnInit(): void {
		// Register the page tabs
		this.registerPageTabs();

		// Subscribe to the store employee observable
		const storeEmployee$ = this._store.selectedEmployee$.pipe(
			filter((employee: ISelectedEmployee) => !!employee),
			tap((employee: ISelectedEmployee) => (this.selectedEmployee = employee)),
			tap(() => this.registerAccountingTabs()),
			untilDestroyed(this)
		);

		// Subscribe to the store employee observable
		storeEmployee$.subscribe();
	}

	/**
	 * Registers page tabs for the dashboard module.
	 * Ensures that tabs are registered only once.
	 *
	 * @returns {void}
	 */
	registerPageTabs(): void {
		// Register the classes tab
		this._pageTabRegistryService.registerPageTab({
			tabsetId: this.tabsetId, // The identifier for the tabset
			tabId: 'classes', // The identifier for the tab
			tabsetType: 'route', // The type of tabset to use
			route: '/pages/dashboard/classes', // The route for the tab
			tabTitle: (_i18n) => _i18n.getTranslation('DASHBOARD_PAGE.CLASSES'), // The title for the tab
			tabIcon: 'book-outline', // The icon for the tab
			responsive: true, // Whether the tab is responsive
			activeLinkOptions: { exact: false }, // The options for the active link
			order: 1, // The order of the tab,
			permissions: [PermissionsEnum.ADMIN_DASHBOARD_VIEW, PermissionsEnum.CLASS_VIEW]
		});

		// Register the course management tab
		this._pageTabRegistryService.registerPageTab({
			tabsetId: this.tabsetId, // The identifier for the tabset
			tabId: 'course-management', // The identifier for the tab
			tabsetType: 'route', // The type of tabset to use
			route: '/pages/dashboard/course-management', // The route for the tab
			tabTitle: (_i18n) => _i18n.getTranslation('DASHBOARD_PAGE.COURSE_MANAGEMENT'), // The title for the tab
			tabIcon: 'book-open-outline', // The icon for the tab
			responsive: true, // Whether the tab is responsive
			activeLinkOptions: { exact: false }, // The options for the active link
			order: 2, // The order of the tab
			permissions: [PermissionsEnum.ADMIN_DASHBOARD_VIEW, PermissionsEnum.COURSE_VIEW]
		});

		// Register the attendance tab
		this._pageTabRegistryService.registerPageTab({
			tabsetId: this.tabsetId, // The identifier for the tabset
			tabId: 'attendance', // The identifier for the tab
			tabsetType: 'route', // The type of tabset to use
			route: '/pages/dashboard/attendance', // The route for the tab
			tabTitle: (_i18n) => _i18n.getTranslation('DASHBOARD_PAGE.ATTENDANCE'), // The title for the tab
			tabIcon: 'clipboard-outline', // The icon for the tab
			responsive: true, // Whether the tab is responsive
			activeLinkOptions: { exact: false }, // The options for the active link
			order: 3, // The order of the tab
			permissions: [PermissionsEnum.ADMIN_DASHBOARD_VIEW, PermissionsEnum.TEAM_DASHBOARD]
		});
	}

	/**
	 * Registers accounting tabs for the dashboard module.
	 * Ensures that tabs are registered only once.
	 */
	registerAccountingTabs(): void {
		// Remove the specified page tabs for the current tenant
		this._pageTabRegistryService.removePageTab('dashboard', 'accounting');
		this._pageTabRegistryService.removePageTab('dashboard', 'hr');

		// Check if the user has permission to view finance
		if (!this.selectedEmployee || !this.selectedEmployee.id) {
			// Register the finance tab
			this._pageTabRegistryService.registerPageTab({
				tabsetId: this.tabsetId, // The identifier for the tabset
				tabId: 'finance', // The identifier for the tab
				tabsetType: 'route', // The type of tabset to use
				route: '/pages/dashboard/finance', // The route for the tab
				tabTitle: (_i18n) => _i18n.getTranslation('DASHBOARD_PAGE.FINANCE'), // The title for the tab
				tabIcon: 'credit-card-outline', // The icon for the tab
				responsive: true, // Whether the tab is responsive
				activeLinkOptions: { exact: false }, // The options for the active link
				order: 4, // The order of the tab
				permissions: [PermissionsEnum.ADMIN_DASHBOARD_VIEW, PermissionsEnum.ACCOUNTING_DASHBOARD]
			});
		}

		// Check if the user has permission to view staff management
		if (this.selectedEmployee && this.selectedEmployee.id) {
			// Register the staff management tab
			this._pageTabRegistryService.registerPageTab({
				tabsetId: this.tabsetId, // The identifier for the tabset
				tabId: 'staff-management', // The identifier for the tab
				tabsetType: 'route', // The type of tabset to use
				route: '/pages/dashboard/staff-management', // The route for the tab
				tabTitle: (_i18n) => _i18n.getTranslation('DASHBOARD_PAGE.STAFF_MANAGEMENT'), // The title for the tab
				tabIcon: 'people-outline', // The icon for the tab
				responsive: true, // Whether the tab is responsive
				activeLinkOptions: { exact: false }, // The options for the active link
				order: 5, // The order of the tab
				permissions: [PermissionsEnum.ADMIN_DASHBOARD_VIEW, PermissionsEnum.HUMAN_RESOURCE_DASHBOARD]
			});
		}

		// Reload the dynamic tabs component
		this.dynamicTabsComponent.reload$.next(true);
	}

	/**
	 * Clears the registry when the component is destroyed.
	 */
	ngOnDestroy() {}
}
