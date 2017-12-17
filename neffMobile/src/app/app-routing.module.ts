import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecommandationComponent } from './recommandation/recommandation.component';
import { ContactComponent } from './contact/contact.component';
import { SurveyComponent } from './survey/survey.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'mealDetail/:id', component: MealDetailComponent },
  { path: 'recommandation',     component: RecommandationComponent },
  { path: 'restaurantDetail/:id', component: RestaurantDetailComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'contact',     component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
