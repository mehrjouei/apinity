import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { ElixirsEntity } from '../../../interfaces/elixir.models';

import * as ElixirsActions from './elixirs.actions';

export const ELIXIRS_FEATURE_KEY = 'elixirs';

export interface ElixirsState extends EntityState<ElixirsEntity> {
  selectedId?: string | number; // which Elixirs record has been selected
  loaded: boolean; // has the Elixirs list been loaded
  error?: string | null; // last known error (if any)
}

export interface ElixirsPartialState {
  readonly [ELIXIRS_FEATURE_KEY]: ElixirsState;
}

export const elixirsAdapter: EntityAdapter<ElixirsEntity> =
  createEntityAdapter<ElixirsEntity>();

export const initialElixirsState: ElixirsState = elixirsAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const reducer = createReducer(
  initialElixirsState,
  on(ElixirsActions.initElixirs, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ElixirsActions.loadElixirsSuccess, (state, { elixirs }) =>
    elixirsAdapter.setAll(elixirs, { ...state, loaded: true })
  ),
  on(ElixirsActions.loadElixirsFailure, (state, { error }) => ({
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
