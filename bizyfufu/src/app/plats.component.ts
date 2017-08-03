import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plat } from './plat';
import { PlatService } from './plat.service';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';
import { MapService } from './map.service';


import { Observable }     from 'rxjs/Observable';



@Component({
  selector: 'my-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css'],
  providers: [PlatService, RestaurantService, MapService]
})
export class PlatsComponent implements OnInit {
  title = 'We have found 156 sexy meals in your area';
  plats: Plat[];
  selectedPlat: Plat;
  selectedPlatRestaurant: Restaurant;
  voirRestaurant: boolean;
  //1 avenue de daumesnil
  lat: number = 48.8492876;
  lng: number = 2.3712717;
  //12 rue du faubourg saint antoine
  lat1: number = 0//48.8527412;
  lng1: number = 0//2.370816999999988;
  zoom: number = 14;
  geocoding: string = "";

  constructor(
    private platService: PlatService,
    private restaurantService: RestaurantService,
    private mapService: MapService,
    private router: Router,
  ) { }

  getPlats(): void {
      this.platService.getPlats().then(plats => this.plats = plats);
  }

  ngOnInit(): void {
    this.getPlats();
    this.voirRestaurant = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/platDetail', this.selectedPlat.id]);
  }

  viewRestaurant(): void {
    this.voirRestaurant = !this.voirRestaurant;
    //Ajout d'un marker à la carte
    if(this.voirRestaurant===true){
      this.lat1 = 48.8527412;
      this.lng1 = 2.370816999999988;
    }
    else{
      this.lat1 = 0;
      this.lng1 = 0;
    }
  }

  onSelect(plat: Plat): void {
    this.selectedPlat = plat;
    this.getRestaurantAssocieAuPlat(this.selectedPlat);
  }

  getRestaurantAssocieAuPlat(plat: Plat): void {
    this.restaurantService.getRestaurant(plat.id_restaurant)
      .then(restaurant =>
        {

          this.selectedPlatRestaurant = restaurant;
          // afficher l'adresse du plat sur la carte
          this.afficherRestaurantSurCarte(this.selectedPlatRestaurant.address);
        }

      );
  }

  afficherRestaurantSurCarte(address: string): void {
    this.mapService.getGeocoding(address).subscribe(function (x) {
      this.geocoding = x.toString();
      console.log(x.toString());
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.platService.create(name)
      .then(plat => {
        this.plats.push(plat);
        this.selectedPlat = null;
      });
  }
  delete(plat: Plat): void {
    this.platService
        .delete(plat.id)
        .then(() => {
          this.plats = this.plats.filter(h => h !== plat);
          if (this.selectedPlat === plat) { this.selectedPlat = null; }
        });
  }
}
