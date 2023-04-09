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
