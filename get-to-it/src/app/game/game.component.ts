import { CardDeck } from '../../classes/card_deck';
import { BoardComponent } from '../board/board.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  title = 'Get to It!!';
  cardDeck:CardDeck;
  @ViewChild(BoardComponent) board: BoardComponent;

  ngOnInit() 
  {
    console.log("Game component init");
  }
}
