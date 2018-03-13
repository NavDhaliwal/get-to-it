import { LocationManager } from '../location-manager/location-manager';
import { BoardComponent } from '../board/board.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  title = 'Get to It!!';
  locationMgr: LocationManager;
  @ViewChild(BoardComponent) board: BoardComponent;

  ngOnInit() 
  {
  	this.locationMgr = new LocationManager();
  	//extract Locations to use.
  	this.locationMgr.createNewLocationEnvironment('');
  }
}
