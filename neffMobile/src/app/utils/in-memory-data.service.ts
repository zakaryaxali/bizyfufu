import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as mockRestaurants from '../../assets/data/restaurants.json';
import * as mockMeals from '../../assets/data/meals.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const restaurants = <any>mockRestaurants;
    const meals = <any>mockMeals;
    return {meals, restaurants};
  }
}
