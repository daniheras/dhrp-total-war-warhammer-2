import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '@store/index';
import { selectFactionsBasedOnFilters, selectFactionsForRandomizr } from '@store/faction/faction.selectors';
import { Observable, interval, of } from 'rxjs';
import { switchMap, map, takeUntil, first, take, tap } from 'rxjs/operators';

@Component({
  selector: 'dhrp-randomizr',
  templateUrl: './randomizr.component.html',
  styleUrls: ['./randomizr.component.scss']
})
export class RandomizrComponent implements OnInit {

  factions$ = this.store.pipe(select(selectFactionsForRandomizr));
  currentFaction$: Observable<any>;
  intervalTime = 200;
  factionsToSpin = 20;
  status: 'primary' | 'success' = 'primary';

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.currentFaction$ = interval(this.intervalTime)
      .pipe(
        take(this.factionsToSpin),
        tap(time => {
          if (time === this.factionsToSpin - 1) {
            this.status = 'success';
          }
         }),
        switchMap(_ => this.factions$),
        map(factions => factions[Math.floor(Math.random() * factions.length)])
      );
  }

}
