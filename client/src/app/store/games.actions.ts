import { createAction, props } from '@ngrx/store';
import { Game } from '../types';

export const UpdateGamesAction = createAction(
  '[Games] Update',
  props<{ games: Game[] }>()
);
