import { NgModule } from '@angular/core';
import {
	NbBadgeModule,
	NbButtonModule,
	NbCardModule,
	NbDialogModule,
	NbIconModule,
	NbInputModule,
	NbListModule,
	NbRouteTabsetModule,
	NbSelectModule,
	NbSpinnerModule,
	NbTabsetModule,
	NbToggleModule,
	NbTooltipModule
} from '@nebular/theme';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { DangerZoneMutationModule, SharedModule, ComponentsModule, TagsColorInputModule, GauzyButtonActionModule, WindowLayoutModule } from '@gauzy/ui-core/shared';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { DangerZoneComponent } from './danger-zone/danger-zone.component';
import { EmailHistoryComponent } from './email-history/email-history.component';
import { EmailFiltersComponent } from './email-history/email-filters/email-filters.component';
import { EmailTemplatesModule } from '../email-templates/email-templates.module';
import { SmsGatewayComponent } from './sms-gateway/sms-gateway.component';
import { FinanceTemplatesModule } from '../finance-templates/accounting-templates.module';

@NgModule({
	imports: [
		NbBadgeModule,
		NbButtonModule,
		NbCardModule,
		NbDialogModule.forRoot(),
		NbIconModule,
		NbInputModule,
		NbListModule,
		NbRouteTabsetModule,
		NbSelectModule,
		NbSpinnerModule,
		NbTabsetModule,
		NbToggleModule,
		NbTooltipModule,
		NgSelectModule,
		NgxPermissionsModule.forChild(),
		TranslateModule.forChild(),
		SettingsRoutingModule,
		SharedModule,
		EmailTemplatesModule,
		FinanceTemplatesModule,
		DangerZoneMutationModule,
		ComponentsModule,
		TagsColorInputModule,
		GauzyButtonActionModule,
		WindowLayoutModule
	],
	declarations: [
		SettingsComponent,
		DangerZoneComponent,
		EmailHistoryComponent,
		EmailFiltersComponent,
		SmsGatewayComponent
	],
	providers: []
})
export class SettingsModule {}
