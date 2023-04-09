import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ELIXIRS_FEATURE_KEY,
  ElixirsState,
  elixirsAdapter,
} from './elixirs.reducer';

// Lookup the 'Elixirs' feature state managed by NgRx
export const selectElixirsState =
  createFeatureSelector<ElixirsState>(ELIXIRS_FEATURE_KEY);

const { selectAll, selectEntities } = elixirsAdapter.getSelectors();

export const selectElixirsLoaded = createSelector(
  selectElixirsState,
  (state: ElixirsState) => state.loaded
);

export const selectElixirsError = createSelector(
  selectElixirsState,
  (state: ElixirsState) => state.error
);

export const selectAllElixirs = createSelector(
  selectElixirsState,
  (state: ElixirsState) => selectAll(state)
);

export const selectElixirsEntities = createSelector(
  selectElixirsState,
  (state: ElixirsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectElixirsState,
  (state: ElixirsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectElixirsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
