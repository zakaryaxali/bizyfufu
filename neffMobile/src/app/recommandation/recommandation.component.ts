import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommandation',
  templateUrl: './recommandation.component.html',
  styleUrls: ['./recommandation.component.css']
})
export class RecommandationComponent implements OnInit {

    constructor(
      private router: Router
    ) {}

  ngOnInit() {
  }


  mealOrder(): void {
    this.router.navigate(['/mealDetail/2162131']);
  }


}
