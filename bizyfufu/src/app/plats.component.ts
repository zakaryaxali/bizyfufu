import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plat } from './plat';
import { PlatService } from './plat.service';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';
import { MapService } from './map.service';

@Component({
  selector: 'my-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css'],
  providers: [PlatService, RestaurantService, MapService]
})
export class PlatsComponent implements OnInit {
  plats: Plat[];
  nbPlats: number = 0;
  selectedPlat: Plat;
  selectedPlatRestaurant: Restaurant;
  voirRestaurant: boolean;
  //1 avenue de daumesnil
  lat: number = 48.8492876;
  lng: number = 2.3712717;
  //12 rue du faubourg saint antoine
  lat1: number = 0;//48.8527412;
  lng1: number = 0;//2.370816999999988;
  zoom: number = 14;
  selectedPlatRestaurantLat = 0;
  selectedPlatRestaurantLng = 0;

  constructor(
    private platService: PlatService,
    private restaurantService: RestaurantService,
    private mapService: MapService,
    private router: Router,
  ) { }

  getPlats(): void {
    var a = this;
    this.platService.getPlats().then(plats => {
      a.plats = plats
      a.nbPlats = plats.length;
    });
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
      this.lat1 = this.selectedPlatRestaurantLat;
      this.lng1 = this.selectedPlatRestaurantLng;
    }
    else{
      this.lat1 = 0;
      this.lng1 = 0;
    }
  }

  onSelect(plat: Plat): void {
    this.getRestaurantAssocieAuPlat(plat);
    this.selectedPlat = plat;
  }

  getRestaurantAssocieAuPlat(plat: Plat): void {
    var a = this;
    this.restaurantService.getRestaurant(plat.id_restaurant)
      .then(restaurant => {
        a.selectedPlatRestaurant = restaurant;
        // afficher l'adresse du plat sur la carte
        a.afficherRestaurantSurCarte(a.selectedPlatRestaurant.address);
      });
  }

  afficherRestaurantSurCarte(address: string): void {
    var a = this;
    var temp = a.mapService.getGeocoding(address).subscribe(x => {
      console.log(x);
      a.recupererCoordonneesRestaurant(x);
    });
  }

  recupererCoordonneesRestaurant(x): void {
    this.selectedPlatRestaurantLat = x.lat();
    this.selectedPlatRestaurantLng = x.lng();
  }

  add(name: string): void {
    var a = this;
    name = name.trim();
    if (!name) { return; }
    this.platService.create(name)
      .then(plat => {
        a.plats.push(plat);
        a.selectedPlat = null;
      });
  }
  delete(plat: Plat): void {
    var a = this;
    this.platService
        .delete(plat.id)
        .then(() => {
          a.plats = a.plats.filter(h => h !== plat);
          if (a.selectedPlat === plat) { a.selectedPlat = null; }
        });
  }
}
