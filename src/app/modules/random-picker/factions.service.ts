// tslint:disable: variable-name
import { Injectable } from '@angular/core';
import { factions, Faction } from '@meta/factions';
import { Store, select } from '@ngrx/store';
import { State } from '@store/index';
import { selectFactionsFilters, selectFactionsBasedOnFilters, selectFactions, selectFactionState } from '@store/faction/faction.selectors';
import { pipe, forkJoin, of, from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

export interface Filters {
  onlyPlayable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FactionsService {

  public factions$ = this.store.pipe(
    select(selectFactions)
  );
  public filters$ = this.store.pipe(
    select(selectFactionsFilters)
  );

  constructor(private store: Store<State>) {}
}
