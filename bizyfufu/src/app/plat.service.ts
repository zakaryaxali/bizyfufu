import { Injectable } from '@angular/core';

import { Plat } from './plat';
import { PLATS } from './mock-plats';

@Injectable()
export class PlatService {
  getPlats(): Promise<Plat[]> {
      return Promise.resolve(PLATS);
  }
}
