import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NbJSThemeVariable, NbThemeService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { TranslationBaseComponent } from '@gauzy/ui-core/i18n';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

// Define the type for JSThemeVariable
type JSThemeVariable = string | NbJSThemeVariable | string[];

@Component({
	standalone: false,
	selector: 'ngx-proposal-pie-chart',
	template: `<canvas baseChart [data]="chartData" [options]="chartOptions" [type]="chartType" class="echart"></canvas>`,
	styleUrls: ['./proposal-pie-chart.component.scss']
})
export class ProposalPieChartComponent extends TranslationBaseComponent implements AfterViewInit, OnDestroy {
	public chartData: ChartData<'pie'> = {
		labels: [],
		datasets: []
	};
	
	public chartOptions: ChartConfiguration['options'] = {};
	public chartType: ChartType = 'pie';
	private subscription: Subscription;

	@Input() values: { name: string; value: number }[];

	constructor(private readonly nbThemeService: NbThemeService, translateService: TranslateService) {
		super(translateService);
	}

	ngAfterViewInit() {
		this.subscription = this.nbThemeService.getJsTheme().subscribe((config) => {
			const { warningLight, infoLight, dangerLight, successLight, primaryLight, echarts } = config.variables;

			// Set the chart data
			this.chartData = {
				labels: [
					this.getTranslation('PROPOSALS_PAGE.ACCEPTED_PROPOSALS'),
					this.getTranslation('PROPOSALS_PAGE.TOTAL_PROPOSALS')
				],
				datasets: [{
					data: this.values?.map(item => item.value) || [],
					backgroundColor: [
						this.getColorString(warningLight),
						this.getColorString(infoLight),
						this.getColorString(dangerLight),
						this.getColorString(successLight),
						this.getColorString(primaryLight)
					] as any,
					label: this.getTranslation('PROPOSALS_PAGE.PROPOSALS')
				}]
			};

			// Set the chart options
			this.chartOptions = this.getChartOptions(
				warningLight,
				infoLight,
				dangerLight,
				successLight,
				primaryLight,
				echarts
			);
		});
	}

	/**
	 * Returns the chart options based on the provided theme variables.
	 *
	 * @param warningLight
	 * @param infoLight
	 * @param dangerLight
	 * @param successLight
	 * @param primaryLight
	 * @param echarts
	 * @returns
	 */
	private getChartOptions(
		warningLight: JSThemeVariable,
		infoLight: JSThemeVariable,
		dangerLight: JSThemeVariable,
		successLight: JSThemeVariable,
		primaryLight: JSThemeVariable,
		echarts: any
	): ChartConfiguration['options'] {
		return {
			responsive: true,
			backgroundColor: echarts.bg,
			plugins: {
				legend: {
					display: true,
					position: 'left',
					labels: {
						color: echarts.textColor
					}
				},
				tooltip: {
					enabled: true,
					callbacks: {
						label: (context) => {
							return `${context.label}: ${context.parsed}`;
						}
					}
				}
			}
		};
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}

	/**
	 * Converts a theme variable to a string color value
	 * 
	 * @param color The theme variable color
	 * @returns The string representation of the color
	 */
	private getColorString(color: JSThemeVariable): string {
		// If it's already a string, return it directly
		if (typeof color === 'string') {
			return color;
		}
		
		// If it's an array, return the first element if it exists
		if (Array.isArray(color)) {
			return color.length > 0 ? color[0] : '#000000';
		}
		
		// For NbJSThemeVariable objects, try to extract a color value
		if (color && typeof color === 'object') {
			// Try common properties that might contain color values
			if ('color' in color) {
				return this.getColorString(color.color);
			}
			if ('background' in color) {
				return this.getColorString(color.background);
			}
		}
		
		// Default fallback
		return '#000000';
	}
}
