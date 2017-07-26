import { Component, OnInit } from '@angular/core';
declare var google: any;

import { Plat } from './plat';
import { PlatService } from './plat.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  plats: Plat[] = [];

  constructor(private platService: PlatService) { }

  ngOnInit(): void {
    this.platService.getPlats()
      .then(plats => this.plats = plats.slice(1, 5));
    // var input = document.getElementById('searchInput');
    // var autocomplete = new google.maps.places.Autocomplete(input);

    function init() {
                var input = document.getElementById('locationTextField');
                var autocomplete = new google.maps.places.Autocomplete(input);
            }

            google.maps.event.addDomListener(window, 'load', init);
  }

}
