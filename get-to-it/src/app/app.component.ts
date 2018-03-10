import { LocationManager } from './location-manager/location-manager';
import { BoardComponent } from './board/board.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
