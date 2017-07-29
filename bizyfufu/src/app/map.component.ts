import { Component } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  //Parametres pour 1 avenue Daumesnil, Paris
  lat: number = 48.8492876;
  lng: number = 2.3712717;
  zoom: number = 15;
}
