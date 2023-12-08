import { OnInit, Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GamesInterface } from '../../interfaces/games.interface';
import { ResolveEnd } from '@angular/router';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';

@Component({
	selector: 'app-votes',
	templateUrl: './votes.component.html',
	styleUrl: './votes.component.css'
})
export class VotesComponent implements OnInit {

	_games: GamesInterface[] = [];

	constructor(private _gameService: GameService) { }

	ngOnInit(): void {

		this._gameService.getNomated().subscribe((response: GamesInterface[]) => {

			console.log(response);
			this._games = response;
		});
	}

	vote(id: string): void {

		this._gameService.vote(id).subscribe((response: any) => {

			console.log(response);

			if (response.ok) {

				Swal.fire('Game Of The Year', `Thanks for voting!! ${response.message}!`, 'success');
			}
			else {

				Swal.fire('Game Of The Year', `Error!! ${response.message}!`, 'error');
			}
		});
	}
}
