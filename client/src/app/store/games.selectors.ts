import { createSelector } from '@ngrx/store';
import { AppState, Game } from '../types';

export const selectGames = createSelector(
  (state: AppState) => state.games,
  (games: Game[]) => games
);
