import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as mockRestaurants from '../assets/restaurants.json';
import * as mockPlats from '../assets/plats.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const restaurants = <any>mockRestaurants;
    const plats = <any>mockPlats;
    const user = {
        id: 0,
        latitude: 0,
        longitude: 0
    }
    return {plats, restaurants, user};
  }
}
