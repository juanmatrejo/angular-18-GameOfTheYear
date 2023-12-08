import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GamesInterface } from '../interfaces/games.interface';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GameService {

	private _url = `${environment.url}/gameoftheyear`;
	private _games: GamesInterface[] = [];

	constructor(private _httpClient: HttpClient) { }

	getNomated(): Observable<GamesInterface[]> {

		if (this._games.length === 0) {

			console.log(this._url);
			return this._httpClient.get<GamesInterface[]>(this._url).pipe(tap(response => this._games = response));
		}
		else {

			console.log('cache');
			return of(this._games);
		}
	}

	vote(id: string): Observable<any> {

		return this._httpClient.post(`${this._url}/${id}`, {}).pipe(catchError(err => {

			console.log(err.error);
			return of(err.error);
		}));
	}
}
