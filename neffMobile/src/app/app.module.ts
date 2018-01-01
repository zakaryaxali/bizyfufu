import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecommandationComponent } from './recommandation/recommandation.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { SurveyComponent } from './survey/survey.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { SearchComponent } from './search/search.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './utils/in-memory-data.service';
import { HeaderComponent } from './header/header.component';

//Material Design
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: []
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecommandationComponent,
    ContactComponent,
    SurveyComponent,
    MealDetailComponent,
    RestaurantDetailComponent,
    SearchComponent,
    ProfileComponent,
    HeaderComponent,
    PersonProfileComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
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
