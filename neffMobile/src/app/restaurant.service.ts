import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Restaurant } from './restaurant';
// import { PLATS } from './mock-restaurants';

@Injectable()
export class RestaurantService {
  private restaurantsUrl = 'api/restaurants';  // URL to web api

  constructor(private http: Http) { }

  getRestaurants(): Promise<Restaurant[]> {
    return this.http.get(this.restaurantsUrl)
               .toPromise()
               .then(response => response.json().data as Restaurant[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // getRestaurants(): Promise<Restaurant[]> {
  //     return Promise.resolve(PLATS);
  // }
  getRestaurant(id: number): Promise<Restaurant> {
    const url = `${this.restaurantsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Restaurant)
      .catch(this.handleError);
  }

}
