import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plat } from './plat';
import { PlatService } from './plat.service';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';



@Component({
  selector: 'my-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css'],
  providers: [PlatService, RestaurantService]
})
export class PlatsComponent implements OnInit {
  title = 'We have found 156 sexy meals in your area';
  plats: Plat[];
  selectedPlat: Plat;
  selectedPlatRestaurant: Restaurant;
  voirRestaurant: boolean;

  constructor(
    private platService: PlatService,
    private restaurantService: RestaurantService,
    private router: Router,
  ) { }

  getPlats(): void {
      this.platService.getPlats().then(plats => this.plats = plats);
  }

  ngOnInit(): void {
    this.getPlats();
    this.voirRestaurant = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/platDetail', this.selectedPlat.id]);
  }

  viewRestaurant(): void {
    this.voirRestaurant = !this.voirRestaurant;
  }

  onSelect(plat: Plat): void {
    this.selectedPlat = plat;
    this.getRestaurantAssocieAuPlat(this.selectedPlat);
  }

  getRestaurantAssocieAuPlat(plat: Plat): void {
    this.restaurantService.getRestaurant(plat.id_restaurant).then(restaurant => this.selectedPlatRestaurant = restaurant);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.platService.create(name)
      .then(plat => {
        this.plats.push(plat);
        this.selectedPlat = null;
      });
  }
  delete(plat: Plat): void {
    this.platService
        .delete(plat.id)
        .then(() => {
          this.plats = this.plats.filter(h => h !== plat);
          if (this.selectedPlat === plat) { this.selectedPlat = null; }
        });
  }
}
