import {  Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router }            from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { Observable }     from 'rxjs/Observable';
declare var google: any;
import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'adress-search',
  templateUrl: './adress-search.component.html',
  styleUrls: ['./adress-search.component.css']
})
export class AdressSearchComponent implements OnInit {

  user: User;
  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private router: Router,
    private userService: UserService,
    private __loader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  getUser(): void {
    var a = this;
    a.user.latitude = a.userService.getLatitude();
    a.user.longitude = a.userService.getLongitude();
  }

  ngOnInit(): void {
    this.user = new User();
    this.getUser();

    // var input = document.getElementById('searchInput');
    // var autocomplete = new google.maps.places.Autocomplete(input);

    //create search FormControl
    this.searchControl = new FormControl();

    //load Places Autocomplete
    this.__loader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      // autocomplete.addListener("place_changed", () => {
      //   this.ngZone.run(() => {
      //     //get the place result
      //     let place: google.maps.places.PlaceResult = autocomplete.getPlace();
      //
      //     //verify result
      //     if (place.geometry === undefined || place.geometry === null) {
      //       return;
      //     }
      //
      //     //set latitude, longitude and zoom
      //     // this.user.latitude = place.geometry.location.lat();
      //     // this.user.longitude = place.geometry.location.lng();
      //     // this.zoom = 12;
      //   });
      // });
    });

    // function init() {
    //   try {
    //     //at this point the variable google may be still undefined (google maps scripts still loading)
    //     //so load all the scripts, then...
    //     this.__loader.load().then(() => {
    //       var input = document.getElementById('locationTextField');
    //       var autocomplete = new google.maps.places.Autocomplete(input);
    //     });
    //   } catch (error) {
    //       console.log('error adress-search' + error);
    //   }
    // }
    // google.maps.event.addDomListener(window, 'load', init);
  }

  recommanderPlats(adress: string): void {
    this.user.latitude = 48.8492876;
    this.user.longitude = 2.3712717;
    this.userService.setLatitude(this.user.latitude);
    this.userService.setLongitude(this.user.longitude);
    let link = ['/plats'];
    this.router.navigate(link);
  }
}
