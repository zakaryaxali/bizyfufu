import { Component, Input } from '@angular/core';

import { Plat } from './plat';
@Component({
  selector: 'plat-detail',
  template: `
    <div *ngIf="plat">
      <h2>{{plat.name}} details!</h2>
      <div><label>id: </label>{{plat.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="plat.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class PlatDetailComponent {
  @Input() plat: Plat;
}
