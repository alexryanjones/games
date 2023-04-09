import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game, AppState } from '../types';
import { selectGames } from '../store/games.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  games$: Observable<Game[]>;
  currentIndex = 0;

  constructor(private store: Store<AppState>) {
    this.games$ = store.select(selectGames);
  }

  ngOnInit(): void {}

  incrementIndex() {
    this.currentIndex++;
  }

  decrementIndex() {
    this.currentIndex--;
  }
}
