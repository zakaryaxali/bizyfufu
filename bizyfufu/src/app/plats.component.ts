import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plat } from './plat';
import { PlatService } from './plat.service';



@Component({
  selector: 'my-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css'],
  providers: [PlatService]
})
export class PlatsComponent implements OnInit {
  title = 'We have found 156 sexy meals in your area';
  plats: Plat[];
  selectedPlat: Plat;

  constructor(
    private platService: PlatService,
    private router: Router,
  ) { }

  getPlats(): void {
      this.platService.getPlats().then(plats => this.plats = plats);
  }

  ngOnInit(): void {
    this.getPlats();
  }

  gotoDetail(): void {
    this.router.navigate(['/platDetail', this.selectedPlat.id]);
  }

  onSelect(plat: Plat): void {
    this.selectedPlat = plat;
  }
}
