import { Component, Input } from '@angular/core';
import { TranslationBaseComponent } from '@gauzy/ui-core/i18n';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ga-proposal-status',
    templateUrl: './proposal-status.component.html',
    styleUrls: ['./proposal-status.component.scss'],
    standalone: false
})
export class ProposalStatusComponent extends TranslationBaseComponent {
	@Input() rowData: any;
	@Input() value: string | number;

	constructor(translateService: TranslateService) {
		super(translateService);
	}
}
