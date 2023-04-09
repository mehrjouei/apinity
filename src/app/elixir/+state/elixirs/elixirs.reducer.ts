import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { ElixirsEntity } from '../../../interfaces/elixir.models';

import * as ElixirsActions from './elixirs.actions';

export const ELIXIRS_FEATURE_KEY = 'elixirs';

export interface ElixirsState {
  selected?: ElixirsEntity | null; // which Elixirs record has been selected
  loaded: boolean; // has the Elixirs list been loaded
  error?: string | null; // last known error (if any)
  elixirs?: ElixirsEntity[]
}

export interface ElixirsPartialState {
  readonly [ELIXIRS_FEATURE_KEY]: ElixirsState;
}

export const initialElixirsState: ElixirsState =
{
  // set initial required properties
  loaded: false,
  elixirs: [],
  selected: null,
  error: null
}
  ;

const reducer = createReducer(
  initialElixirsState,
  on(ElixirsActions.initElixirs, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ElixirsActions.loadElixirsSuccess, (state, { elixirs }) =>
    ({ ...state, elixirs, loaded: true })
  ),
  on(ElixirsActions.loadElixirsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ElixirsActions.loadElixir, (state) => ({
    ...state,
    selected: undefined,
    loaded: false,
    error: null,
  })),
  on(ElixirsActions.loadElixirSuccess, (state, { elixir }) =>
    ({ ...state, selected: elixir, loaded: true })
  ),
  on(ElixirsActions.loadElixirFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function elixirsReducer(
  state: ElixirsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
