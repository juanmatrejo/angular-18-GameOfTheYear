import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, CollectionReference } from '@angular/fire/firestore';
import { Observable, map, pipe } from 'rxjs';
import { GamesInterface } from '../../interfaces/games.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: ``
})
export class HomeComponent implements OnInit {

	_games: any[] = [];
	_firestore: Firestore = inject(Firestore);

	ngOnInit(): void {

		const gamesCollection: CollectionReference = collection(this._firestore, 'Games');
		const gamesData: Observable<GamesInterface[] | any[]> = collectionData(gamesCollection);

		gamesData.pipe(
			map((response: GamesInterface[]) => {

				// return response.map(({ name, votes }) => ({ name, value: votes }))

				return response.map(game => {
					return {
						name: game.name,
						value: game.votes
					}
				})
			})
		).subscribe((respone: any[]) => {

			console.log(respone);
			this._games = respone;
		});
	}
}