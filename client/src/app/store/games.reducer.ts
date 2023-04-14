import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { Game } from '../types';
import { UpdateGamesAction } from './games.actions';

export const gamesReducer: ActionReducer<Game[], Action> = createReducer(
  [] as Game[],
  on(UpdateGamesAction, (state, { games }) => {
    return games;
  })
);
