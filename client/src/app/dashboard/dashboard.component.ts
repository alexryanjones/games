import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
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

  ngOnInit(): void {
    console.log(this.games$);
  }

  incrementIndex() {
    this.games$.pipe(take(1)).subscribe((games: Game[]) => {
      if (this.currentIndex < games.length - 1) {
        this.currentIndex++;
      }
    });
  }

  decrementIndex() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
