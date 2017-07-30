import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';



@Component({
  selector: 'my-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantService]
})
export class RestaurantsComponent implements OnInit {
  title = 'We have found 156 sexy meals in your area';
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
  ) { }

  getRestaurants(): void {
      this.restaurantService.getRestaurants().then(restaurants => this.restaurants = restaurants);
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  gotoDetail(): void {
    this.router.navigate(['/restaurantDetail', this.selectedRestaurant.id]);
  }

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
  }
}
