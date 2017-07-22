import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlatsComponent } from './plats.component';
import { PlatDetailComponent } from './plat-detail.component';
import { PlatService } from './plat.service';

@NgModule({
  declarations: [
    AppComponent,
    PlatsComponent,
    PlatDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
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
