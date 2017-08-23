import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Plat } from './plat';
// import { PLATS } from './mock-plats';

@Injectable()
export class PlatService {
  private platsUrl = 'api/plats';  // URL to web api

  constructor(private http: Http) { }

  getPlats(): Promise<Plat[]> {
    return this.http.get(this.platsUrl)
               .toPromise()
               .then(response => response.json().data as Plat[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // getPlats(): Promise<Plat[]> {
  //     return Promise.resolve(PLATS);
  // }
  getPlat(id: number): Promise<Plat> {
    const url = `${this.platsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Plat)
      .catch(this.handleError);
  }

  getPlatsByIdRestaurant(id: number): Promise<Plat[]> {
    return this.getPlats().then(plats =>{
      const filterByIdRestaurant = (requete) => {
        return plats.filter((el) =>
          el.id_restaurant === requete
        );
      };
      return filterByIdRestaurant(id);
    })
  }

  filterByIdRestaurant(plat: Plat){
    return plat.id_restaurant
  }



  private headers = new Headers({'Content-Type': 'application/json'});

  update(plat: Plat): Promise<Plat> {
    const url = `${this.platsUrl}/${plat.id}`;
    return this.http
      .put(url, JSON.stringify(plat), {headers: this.headers})
      .toPromise()
      .then(() => plat)
      .catch(this.handleError);
  }

  create(name: string): Promise<Plat> {
    return this.http
      .post(this.platsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Plat)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.platsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
