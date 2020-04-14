import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as factionReducer from './faction/faction.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
  faction: factionReducer.FactionState;
}

export const reducers: ActionReducerMap<State> = {
  faction: factionReducer.reducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['faction']})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
