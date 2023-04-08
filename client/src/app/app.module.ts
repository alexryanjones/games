import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameWindowComponent } from './game-window/game-window.component';
import { GamePosterComponent } from './game-poster/game-poster.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameWindowComponent,
    GamePosterComponent,
    GameDetailsComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
