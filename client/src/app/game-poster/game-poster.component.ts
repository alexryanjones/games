import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../types';

@Component({
  selector: 'app-game-poster',
  templateUrl: './game-poster.component.html',
  styleUrls: ['./game-poster.component.css'],
})
export class GamePosterComponent implements OnInit {
  @Input() game!: Game;
  
  constructor() {
    this.game = {} as Game;
  }

  ngOnInit(): void {}
}
