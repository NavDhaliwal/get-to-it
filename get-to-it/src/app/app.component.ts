import { LocationManager } from './location-manager/location-manager';
import { BoardComponent } from './board/board.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pageStatus: string = 'default';
  roomname:string = '';
  roomValidated:boolean=false;
  playerValidated:boolean=false;
  maxRoomLen:number=4;
  playerTag:string;
  ngOnInit() 
  {
  }
  joinRoom()
  {
  	this.pageStatus='join';
  }
  createRoom()
  {
  	//loading screen
  	this.pageStatus='create1';
  }
  setDefaultPage()
  {
  	this.pageStatus='default';
  	this.roomname='';
  	this.playerTag='';
  	this.roomValidated=false;
  	this.playerValidated=false;
  }
  validateRoomName()
  {
  	if(this.roomname.length===this.maxRoomLen)
  	{
  		//validate backend
  		this.roomValidated=true;
  	}
  	else
  	{
  		this.roomValidated=false;
  	}
  }
  validatePlayerTag()
  {
  	if(this.playerTag.length>0)
  	{
  		//check in backend for valid names
  		this.playerValidated=true;
  	}
  	else
  	{
  		this.playerValidated=false;
  	}
  }
  startGame()
  {
  	//route to the game page
  }
  createCustomMap()
  {
  }
  showAllMaps()
  {}
}
