import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PlatSearchService } from './plat-search.service';
import { Plat } from './plat';

@Component({
  selector: 'plat-search',
  templateUrl: './plat-search.component.html',
  styleUrls: [ './plat-search.component.css' ],
  providers: [PlatSearchService]
})
export class PlatSearchComponent implements OnInit {
  plats: Observable<Plat[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private platSearchService: PlatSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.plats = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.platSearchService.search(term)
        // or the observable of empty plats if there was no search term
        : Observable.of<Plat[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Plat[]>([]);
      });
  }

  gotoDetail(plat: Plat): void {
    let link = ['/detail', plat.id];
    this.router.navigate(link);
  }
}
