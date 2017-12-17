import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecommandationComponent } from './recommandation/recommandation.component';
import { ContactComponent } from './contact/contact.component';
import { SurveyComponent } from './survey/survey.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { SearchComponent } from './search/search.component';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './utils/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecommandationComponent,
    ContactComponent,
    SurveyComponent,
    MealDetailComponent,
    RestaurantDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule, // htppmodule toujours avant inmemory..
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
