import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
  providers: [RestaurantService]
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    var a = this;
    a.route.paramMap
      .switchMap((params: ParamMap) => a.restaurantService.getRestaurant(+params.get('id')))
      .subscribe(restaurant => a.restaurant = restaurant);
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
