import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';

import { Plat } from './plat';
import { PlatService } from './plat.service';

@Component({
  selector: 'restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
  providers: [RestaurantService, PlatService]
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;
  plats: Plat[];

  constructor(
    private restaurantService: RestaurantService,
    private platService: PlatService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    var a = this;
    a.route.paramMap
      .switchMap((params: ParamMap) => a.restaurantService.getRestaurant(+params.get('id')))
      .subscribe(restaurant => a.restaurant = restaurant);
    a.getPlats();
  }

  getPlats(): void {
    var a = this;
    a.route.paramMap
      .switchMap((params: ParamMap) => a.platService.getPlatsByIdRestaurant(+params.get('id')))
      .subscribe(plats => a.plats = plats);

  }
  // goBack(): void {
  //   this.location.back();
  // }

}
