import { BoardComponent } from '../board/board.component';
import { Component, ViewChild } from '@angular/core';
import { DataClient } from "../../services/dataclient";
import { IDataObserver } from "../../services/IDataObserver";
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements IDataObserver{
  
  private pageStatus: string = 'default';
  private roomname:string = '';
  private roomValidated:boolean=false;
  private playerValidated:boolean=false;
  private maxRoomLen:number=4;
  private playerTag:string;
  private dataClient:DataClient = DataClient.getInstance();
  constructor(private router: Router) 
  {
  	console.log('Routing constructor');
  	this.setDefaultPage();
  	this.dataClient.subscribe(this);
  }
  ReceiveNotification<T>(Message: T)
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
  		// this.dataClient.sendMessageToServer();
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
  	this.pageStatus='';
  	//route to the game page
  	this.router.navigateByUrl('/game/'+this.roomname);
  }
  createCustomMap()
  {
  }
  showAllMaps()
  {}
}

