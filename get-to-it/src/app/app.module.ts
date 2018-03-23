import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { CardComponentComponent } from './card-component/card-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'game/:id', component: GameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LocationComponent,
    GameComponent,
    HomeComponent,
    CardComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
