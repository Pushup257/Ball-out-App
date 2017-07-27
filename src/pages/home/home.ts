import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';//sdsdsdsdsdsd
import { NavController } from 'ionic-angular';
import { JoinPage } from '../join/join';
import { AlumniPage } from '../alumni/alumni';

import { KeyboardManagerProvider } from "../../providers/keyboard-manager/keyboard-manager";

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps'; 



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  typing: boolean = false;
  searchQuery: string = '';
  items: string[];


  constructor(public navCtrl: NavController,private googleMaps: GoogleMaps ,private platform: Platform, private keyboard : KeyboardManagerProvider) { 
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
       this.loadMap();
       this.initializeItems();
    });
  }
  // Load map only after view is initialized
  // ngAfterViewInit() {
 
  //     this.loadMap();

  // }
ionViewDidLoad(){
  this.loadMap()
}

loadMap() {
  console.log("loading map");
 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');
 // create LatLng object
 let pos: LatLng = new LatLng(34.019409, -118.287422);

 let map: GoogleMap = this.googleMaps.create(element,{
    camera:{
      'target': pos,
      'zoom':15
    }
 });

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
     // Now you can add elements to the map like the marker
      // create new marker
      let markerOptions: MarkerOptions = {
        position: pos,
        title: 'Park #1'
      };

      map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
          console.log("marker")
           marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => { 
             this.navCtrl.push(JoinPage)
            });
        });
        }
    );

    }


  initializeItems() {
    this.items = [
      'Alumni Park',
      'Rose Garden',
      'McCarthy Quad',
      'Exposition Park',
      'Jesse Brewer Jr park',
    ];
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    if(val == ''){
      this.typing = false;
      console.log("empty");
    } else {
          this.typing = true;
          console.log("not empty");
          console.log(ev);
    }

    // Reset items back to all of the items
    this.initializeItems();


    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  goToAlumni(){
      this.navCtrl.push(AlumniPage);
      
      
    }
  closeKB(){
    console.log('close kb');
    this.keyboard.closeKB();
  }
}

