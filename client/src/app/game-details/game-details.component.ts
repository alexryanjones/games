import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../types';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  @Input() game!: Game;

  constructor() {
    this.game = {} as Game;
  }

  ngOnInit(): void {}
}
