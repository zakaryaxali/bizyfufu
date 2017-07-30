import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as mockRestaurants from '../assets/restaurants.json';
import * as mockPlats from '../assets/plats.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const restaurants = <any>mockRestaurants;
    const plats = <any>mockPlats;
    return {plats, restaurants};
  }
}
