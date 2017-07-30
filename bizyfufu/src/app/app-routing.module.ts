import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { PlatsComponent }      from './plats.component';
import { PlatDetailComponent }  from './plat-detail.component';
import { RestaurantDetailComponent }  from './restaurant-detail.component';
import { RestaurantsComponent }  from './restaurants.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'platDetail/:id', component: PlatDetailComponent },
  { path: 'plats',     component: PlatsComponent },
  { path: 'restaurantDetail/:id', component: RestaurantDetailComponent },
  { path: 'restaurants',     component: RestaurantsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
