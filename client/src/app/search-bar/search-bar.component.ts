import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from '../api-service';
import { Game } from '../types';
import { UpdateGamesAction } from '../store/games.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(private apiService: ApiService, private store: Store) {}

  ngOnInit(): void {}

  onSubmit(event: any): void {
    event.preventDefault();
    const query = event.target['search-bar'].value;
    this.apiService.searchGames(query).subscribe((games: Game[]) => {
      console.log('from search', games);
      this.store.dispatch(UpdateGamesAction({ games }));
    });
  }
}
