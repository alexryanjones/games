import { createSelector } from '@ngrx/store';
import { AppState } from '../types';
import { Game } from '../types';

export const selectGames = createSelector(
  (state: AppState) => state.games,
  (games: Game[]) => games
);
