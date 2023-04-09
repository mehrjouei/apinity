import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ELIXIRS_FEATURE_KEY,
  ElixirsState,
} from './elixirs.reducer';

export const selectElixirsState =
  createFeatureSelector<ElixirsState>(ELIXIRS_FEATURE_KEY);


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
  (state: ElixirsState) => state.elixirs
);

export const selectSelectedElixir = createSelector(
  selectElixirsState,
  (state: ElixirsState) => state.selected
);


