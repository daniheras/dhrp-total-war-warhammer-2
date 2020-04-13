import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as factionReducer from './faction/faction.reducer';
import { environment } from '../../environments/environment';

export interface State {
  faction: factionReducer.FactionState;
}

export const reducers: ActionReducerMap<State> = {
  faction: factionReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
