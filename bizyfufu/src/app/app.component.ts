import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <my-plats></my-plats>
  `
})
export class AppComponent {
  title = 'BizyFufu';
}
