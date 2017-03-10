import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';


@Component({
	selector   : 'map',
	templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

	mapData: number[]=[];
	mapToData: string[]=[];

	constructor() {
	}

	ngOnInit() {
		const source = Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

		// .map() - apply a function every emitted output.
		//
		// Pay attention: when retrieving values from an http-call, it is actually *one* value,
		// containing an array with the emitted object(s) by the server.
		// First unwrap this using .map(result => result.json()).
		// If you further need to apply projections/functions on each individual array result, then
		// apply a chained .map() function with another array.map() function inside. Like
		// .map(results => results.map(result => { ... }).
		// The code below only applies when the values are emitted on a one-by-one basis!
		source.map(val => val = val * 10)
			.subscribe(result => this.mapData.push(result));

		// .mapTo() - map the emission to a constant value
		source.mapTo('Hello World')
			.subscribe(result => this.mapToData.push(result));
	}
}
