import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';
// import { USER } from './mock-user';

@Injectable()
export class UserService {
  private id = 0;
  private latitude = 0;
  private longitude = 0;

  getId(){
    return this.id;
  }

  getLatitude(){
    return this.latitude;
  }

  getLongitude(){
    return this.longitude;
  }

  setLatitude(latitude: number){
    this.latitude = latitude;
  }

  setLongitude(longitude: number){
    this.longitude = longitude;
  }

}
