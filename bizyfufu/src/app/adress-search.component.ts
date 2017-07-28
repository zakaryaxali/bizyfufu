import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
declare var google: any;


@Component({
  selector: 'adress-search',
  templateUrl: './adress-search.component.html',
  styleUrls: ['./adress-search.component.css']
})
export class AdressSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // var input = document.getElementById('searchInput');
    // var autocomplete = new google.maps.places.Autocomplete(input);

    function init() {
      var input = document.getElementById('locationTextField');
      var autocomplete = new google.maps.places.Autocomplete(input);
    }
    google.maps.event.addDomListener(window, 'load', init);
  }

  recommanderPlats(adress: string): void {
    let link = ['/plats'];
    this.router.navigate(link);
  }
}
