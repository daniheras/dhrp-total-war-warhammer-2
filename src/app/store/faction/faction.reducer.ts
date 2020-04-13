import { createReducer, Action, on } from '@ngrx/store';
import { Faction, factions } from '@meta/factions';
import { Filters } from '@modules/random-picker/factions.service';
import { toggleOnlyPlayableFilter, toggleFactionSelection, initFactionsState, toggleAllFactionsSepection } from './faction.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

/*
export interface FactionState {
  factions: Faction[];
  onlyPlayable: boolean;
}

export const initialState: FactionState = {
  factions: [...factions].map(faction => ({ ...faction, selected: true })),
  onlyPlayable: true,
};
*/

export interface FactionState extends EntityState<Faction> {
  // additional entities state properties
  onlyPlayable: boolean;
}

export const factionAdapter: EntityAdapter<Faction> = createEntityAdapter<Faction>();

export const initialState: FactionState = factionAdapter.getInitialState({
  onlyPlayable: true
});

const factionReducer = createReducer(
  initialState,
  on(initFactionsState, (state) => factionAdapter.setAll([...factions].map(faction => ({ ...faction, selected: true })), state)),
  on(toggleOnlyPlayableFilter, (state) => ({ ...state, onlyPlayable: !state.onlyPlayable })),
  on(toggleFactionSelection, (state, { factionId }) => factionAdapter.updateOne({id: factionId, changes: {
    selected: !state.entities[factionId].selected
  }}, state)),
  on(toggleAllFactionsSepection, (state, { value }) => factionAdapter.setAll(
    [...factions].map(faction => ({ ...faction, selected: value })),
    state
  )),
);

export function reducer(state: FactionState | undefined, action: Action): any {
  return factionReducer(state, action);
}
