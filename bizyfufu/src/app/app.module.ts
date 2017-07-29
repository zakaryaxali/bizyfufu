import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PlatsComponent } from './plats.component';
import { PlatDetailComponent } from './plat-detail.component';
import { PlatSearchComponent } from './plat-search.component';
import { PlatService } from './plat.service';
import { AdressSearchComponent } from './adress-search.component';
import { MapComponent } from './map.component';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlatsComponent,
    PlatDetailComponent,
    PlatSearchComponent,
    AdressSearchComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule, // htppmodule toujours avant inmemory..
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCHzqK921M6cl3LWhbv8hbRpjcPzuSwYpA'
    })
  ],
  providers: [
    PlatService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
