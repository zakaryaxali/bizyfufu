import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Plat } from './plat';
import { PlatService } from './plat.service';

@Component({
  selector: 'plat-detail',
  templateUrl: './plat-detail.component.html',
  styleUrls: ['./plat-detail.component.css']
})
export class PlatDetailComponent implements OnInit {

  constructor(
    private platService: PlatService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.platService.getPlat(+params.get('id')))
      .subscribe(plat => this.plat = plat);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.platService.update(this.plat)
      .then(() => this.goBack());
  }

  @Input() plat: Plat;
}
