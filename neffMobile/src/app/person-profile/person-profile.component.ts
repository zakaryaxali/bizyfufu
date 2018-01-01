import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})
export class PersonProfileComponent implements OnInit {
  max = 4;
  min = 0;
  value = 2;
  showTicks = true;
  autoTicks = false;
  step = 1;
  constructor(
    private _renderer2: Renderer2,
    // private router: Router,
    @Inject(DOCUMENT) private _document,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    //import Flickity
    // let s = this._renderer2.createElement('script');
    // s.type = "text/javascript";
    // s.src = "https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js";
    // this._renderer2.appendChild(this._document.body, s);
  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
}

}
