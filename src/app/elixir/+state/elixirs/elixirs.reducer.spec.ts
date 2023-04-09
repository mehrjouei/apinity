import { Action } from '@ngrx/store';
import { ElixirsEntity } from '../../../interfaces/elixir.models';

import * as ElixirsActions from './elixirs.actions';
import {
  ElixirsState,
  initialElixirsState,
  elixirsReducer,
} from './elixirs.reducer';

describe('Elixirs Reducer', () => {
  const createElixirsEntity = (id: string, name = ''): ElixirsEntity => ({
    id,
    name: name || `name-${id}`,
  } as ElixirsEntity);

  describe('valid Elixirs actions', () => {
    it('loadElixirsSuccess should return the list of known Elixirs', () => {
      const elixirs = [
        createElixirsEntity('PRODUCT-AAA'),
        createElixirsEntity('PRODUCT-zzz'),
      ];
      const action = ElixirsActions.loadElixirsSuccess({ elixirs });

      const result: ElixirsState = elixirsReducer(initialElixirsState, action);

      expect(result.loaded).toBe(true);
      expect(result.elixirs?.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = elixirsReducer(initialElixirsState, action);

      expect(result).toBe(initialElixirsState);
    });
  });
});
