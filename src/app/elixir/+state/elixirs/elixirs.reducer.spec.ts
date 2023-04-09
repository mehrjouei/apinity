import { Action } from '@ngrx/store';
import { ElixirsEntity } from 'src/app/interfaces/elixir.models';

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
  });

  describe('valid Elixirs actions', () => {
    it('loadElixirsSuccess should return the list of known Elixirs', () => {
      const elixirs = [
        createElixirsEntity('PRODUCT-AAA'),
        createElixirsEntity('PRODUCT-zzz'),
      ];
      const action = ElixirsActions.loadElixirsSuccess({ elixirs });

      const result: ElixirsState = elixirsReducer(initialElixirsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
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
