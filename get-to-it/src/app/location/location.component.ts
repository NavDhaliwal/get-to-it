import { Component, OnInit } from '@angular/core';

export class Location {

    locationName:string;
    locationType:string;
    locationIcon:string;

  constructor(location_Name, location_Type, location_Icon)
  { 
      this.locationIcon=location_Icon;
      this.locationName=location_Name;
      this.locationType=location_Type;
  }


}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

	locationVar:Location;
	posX:number;
	posY:number;

  constructor() 
  { 
  }

  ngOnInit() {
  }

}
