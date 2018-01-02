import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Meal } from './meal';
// import { MEAL } from './mock-meals';

@Injectable()
export class MealService {
  private mealsUrl = 'api/meals';  // URL to web api

  constructor(private http: Http) { }

  getMeals(): Promise<Meal[]> {
    return this.http.get(this.mealsUrl)
               .toPromise()
               .then(response => response.json().data as Meal[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // getMeals(): Promise<Meal[]> {
  //     return Promise.resolve(PLATS);
  // }
  getMeal(id: number): Promise<Meal> {
    const url = `${this.mealsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Meal)
      .catch(this.handleError);
  }

  getMealsByIdRestaurant(id: number): Promise<Meal[]> {
    return this.getMeals().then(meals =>{
      const filterByIdRestaurant = (requete) => {
        return meals.filter((el) =>
          el.id_restaurant === requete
        );
      };
      return filterByIdRestaurant(id);
    })
  }

  filterByIdRestaurant(meal: Meal){
    return meal.id_restaurant
  }

}
