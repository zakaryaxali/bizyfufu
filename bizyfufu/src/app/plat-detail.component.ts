import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Plat } from './plat';
import { PlatService } from './plat.service';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';
import { MapService } from './map.service';

@Component({
  selector: 'plat-detail',
  templateUrl: './plat-detail.component.html',
  styleUrls: ['./plat-detail.component.css'],
  providers: [PlatService, RestaurantService, MapService]
})
export class PlatDetailComponent implements OnInit {
  plat: Plat;
  restaurant: Restaurant;
  userLat: number = 48.8492876;
  userLng: number = 2.3712717;
  restaurantLat: number;
  restaurantLng: number;

  constructor(
    private mapService: MapService,
    private platService: PlatService,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    var a = this;
    this.route.paramMap
      .switchMap((params: ParamMap) => this.platService.getPlat(+params.get('id')))
      .subscribe(plat => {
        a.plat = plat;
        a.recupererRestaurant(a.plat);
      });
  }

  recupererRestaurant(plat: Plat): void {
    var a = this;
    // this.plat = plat;
    this.restaurantService.getRestaurant(plat.id_restaurant).then(restaurant => {
      a.restaurant = restaurant;
      a.recupererCoordonneesRestaurant(restaurant.address);
    });
  }

  recupererCoordonneesRestaurant(address: string): void {
    var a = this;
    var temp = a.mapService.getGeocoding(address).subscribe(x => {
      console.log(x);
      a.mapperCoordonneesRestaurant(x);
    });
  }

  mapperCoordonneesRestaurant(x): void {
    this.restaurantLat = x.lat();
    this.restaurantLng = x.lng();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    var a = this;
    this.platService.update(this.plat)
      .then(() => a.goBack());
  }

  // @Input() plat: Plat;
}
