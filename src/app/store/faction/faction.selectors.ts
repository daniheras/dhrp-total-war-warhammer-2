import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FactionState, factionAdapter } from './faction.reducer';

export const selectFactionState = createFeatureSelector<FactionState>('faction');

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = factionAdapter.getSelectors();

export const selectFactions = createSelector(
  selectFactionState,
  selectAll
);

export const selectFactionsFilters = createSelector(
  selectFactionState,
  ({ onlyPlayable }) => ({
    onlyPlayable
  })
);

export const selectFactionsBasedOnFilters = createSelector(
  selectFactions,
  selectFactionsFilters,
  (factions, filters) => {
    return factions
      .filter(faction => faction.playable === (filters.onlyPlayable || undefined));
  }
);

export const selectFactionsForRandomizr = createSelector(
  selectFactionsBasedOnFilters,
  (factions) => factions.filter(faction => faction.selected)
);
