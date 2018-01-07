import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Meal } from '../meal';
import { MealService } from '../meal.service';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css'],
  providers: [MealService, RestaurantService]
})
export class MealDetailComponent implements OnInit {
  meal: Meal;
  restaurant: Restaurant;

  constructor(
    private mealService: MealService,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    var a = this;
    this.route.paramMap
      .switchMap((params: ParamMap) => this.mealService.getMeal(+params.get('id')))
      .subscribe(meal => {
        a.meal = meal;
        // a.getRestaurant(a.meal);
      });
  }

    getRestaurant(meal: Meal): void {
      var a = this;
      this.restaurantService.getRestaurant(meal.id_restaurant).then(restaurant => {
        a.restaurant = restaurant;
      });
    }

    goBack(): void {
      this.location.back();
    }

    mealOrder(): void {
      this.router.navigate(['/summary']);
    }

}
