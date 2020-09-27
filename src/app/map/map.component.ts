//import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  ngAfterViewInit(): void {
  }


  private initMap(): void {
    this.map = L.map('map', {
      center: [ 18.7847035, -96.9468105 ],
      zoom: 16
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
  
    tiles.addTo(this.map);
  }

}
