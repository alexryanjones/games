import { Component, Input } from '@angular/core';
import { Game } from '../types';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css'],
})
export class GameWindowComponent {
  @Input() game!: Game;

  constructor() {
    this.game = {} as Game;
  }
}
