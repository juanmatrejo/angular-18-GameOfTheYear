import { Component, Input, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-horizontal-bar-chart',
	templateUrl: './horizontal-bar-chart.component.html',
	styleUrl: './horizontal-bar-chart.component.css'
})
export class HorizontalBarChartComponent implements OnDestroy {

	@Input() _data:any[]=[];

	data: any[] = [
		{
			"name": "Germany",
			"value": 40632,
			"extra": {
				"code": "de"
			}
		},
		{
			"name": "United States",
			"value": 50000,
			"extra": {
				"code": "us"
			}
		},
		{
			"name": "France",
			"value": 36745,
			"extra": {
				"code": "fr"
			}
		},
		{
			"name": "United Kingdom",
			"value": 36240,
			"extra": {
				"code": "uk"
			}
		},
		{
			"name": "Spain",
			"value": 33000,
			"extra": {
				"code": "es"
			}
		},
		{
			"name": "Italy",
			"value": 35800,
			"extra": {
				"code": "it"
			}
		}
	];

	// options
	showXAxis = true;
	showYAxis = true;
	gradient = true;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Games';
	showYAxisLabel = true;
	yAxisLabel = 'Votes';

	colorScheme: string[] = [
		'vivid',
		'natural',
		'cool',
		'fire',
		'solar',
		'air',
		'aqua',
		'flame',
		'ocean',
		'forest',
		'horizon',
		'neons',
		'picnic',
		'night',
		'nightLights'
	];
	_color: string = this.colorScheme[0];

	interval: any;

	constructor() {

		// Object.assign(this, { this: this.data })

		this.interval = setInterval(() => {

			// const newData = [...this.data];

			// for (let i in newData) {

			// 	console.log('tick', this.data[i].value);
			// 	this.data[i].value = Math.round(Math.random() * 999);
			// }

			// this.data = newData;

			let position: number = Math.random() * 16;
			position = Math.round(position > 14 ? 14 : position);
			// console.log(position);
			this._color = this.colorScheme[position];

		}, 1500);
	}

	onSelect(event: any) {

		// console.log(event);
	}

	ngOnDestroy(): void {

		clearInterval(this.interval);
	}
}
