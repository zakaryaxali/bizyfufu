import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PlatsComponent } from './plats.component';
import { PlatDetailComponent } from './plat-detail.component';
import { PlatService } from './plat.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlatsComponent,
    PlatDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
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
