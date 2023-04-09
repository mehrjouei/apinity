import { createAction, props } from '@ngrx/store';
import { ElixirsEntity } from '../../../interfaces/elixir.models';

export const initElixirs = createAction(
  '[Elixirs Page] Init',
  props<{ name?: string }>()
);

export const loadElixirsSuccess = createAction(
  '[Elixirs/API] Load Elixirs Success',
  props<{ elixirs: ElixirsEntity[] }>()
);

export const loadElixirsFailure = createAction(
  '[Elixirs/API] Load Elixirs Failure',
  props<{ error: any }>()
);

export const loadElixir = createAction(
  '[Elixirs View Page] Init',
  props<{ id: string }>()
);

export const loadElixirSuccess = createAction(
  '[Elixirs/API] Load Elixir Success',
  props<{ elixir: ElixirsEntity }>()
);

export const loadElixirFailure = createAction(
  '[Elixirs/API] Load Elixir Failure',
  props<{ error: any }>()
);
