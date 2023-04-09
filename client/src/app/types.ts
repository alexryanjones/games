export type Game = {
  title: string;
  background_image: string;
  releaseDate: Date;
}

export interface AppState {
  games: Game[];
}