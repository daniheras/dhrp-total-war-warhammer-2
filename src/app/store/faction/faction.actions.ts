import { createAction, props } from '@ngrx/store';

export const toggleOnlyPlayableFilter = createAction('[Faction] Toggle Only Playable');

export const toggleFactionSelection = createAction(
  '[Faction] Toggle selected',
  props<{ factionId: number }>()
);

export const toggleAllFactionsSepection = createAction(
  '[Faction] Toggle selected for all factions',
  props<{ value: boolean }>()
);

export const initFactionsState = createAction('[Faction] Init faction state');
