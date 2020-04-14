// tslint:disable: variable-name
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '@store/index';
import { selectFactionsFilters, selectFactionsOrdered } from '@store/faction/faction.selectors';

export interface Filters {
  onlyPlayable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FactionsService {

  public factions$ = this.store.pipe(
    select(selectFactionsOrdered)
  );
  public filters$ = this.store.pipe(
    select(selectFactionsFilters)
  );

  constructor(private store: Store<State>) {}
}
