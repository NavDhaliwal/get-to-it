import { Component, AfterContentInit  } from '@angular/core';
import * as L from "leaflet";
import { LeafIcon } from '../../classes/location-icons';
// var L = require("leaflet");

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  // template: '<div class="board" id="mapid"></div>',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements AfterContentInit {

	private locationArray=[];
  private backgroundImageDir = '../../assets/backgrounds';
  private iconImageDir = '../../assets/locationPackDefault';
  private backgroundImageName = 'pexels-photo-269646.jpg';
  constructor() { 
     
  }

  // onClickCanvas()
  // {

  // }
  // for transcluded content
  ngAfterContentInit() {

    let imgSrc = this.backgroundImageDir+'/'+this.backgroundImageName;
    let boundHeight = window.innerHeight/2;
    let boundWidth = window.innerWidth/2;

    let map = L.map('mapid', {
        crs: L.CRS.Simple,
        minZoom: -1
       });
     // let bounds = [[-1142,-1800], [1143, 1800]];
     let bounds = [[-boundHeight,-boundWidth], [boundHeight, boundWidth]];
     let image = L.imageOverlay(imgSrc, bounds).addTo(map);
     map.fitBounds(bounds);

     let churchIcon = new LeafIcon({iconUrl: this.iconImageDir+'/'+'church.svg'});

     let church_marker = L.marker([ 0, 0 ],{icon: churchIcon, draggable: true}).addTo(map);
     map.setView( [0, 0], 1);

     church_marker.on("drag", (e) => {
          var marker = e.target;
          var position = marker.getLatLng();
          map.panTo(new L.LatLng(position.lat, position.lng));
      });

  }

}
