import { ElixirsEntity } from 'src/app/interfaces/elixir.models';
import {
  elixirsAdapter,
  ElixirsPartialState,
  initialElixirsState,
} from './elixirs.reducer';
import * as ElixirsSelectors from './elixirs.selectors';

describe('Elixirs Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getElixirsId = (it: ElixirsEntity) => it.id;
  const createElixirsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ElixirsEntity);

  let state: ElixirsPartialState;

  beforeEach(() => {
    state = {
      elixirs: elixirsAdapter.setAll(
        [
          createElixirsEntity('PRODUCT-AAA'),
          createElixirsEntity('PRODUCT-BBB'),
          createElixirsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialElixirsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Elixirs Selectors', () => {
    it('selectAllElixirs() should return the list of Elixirs', () => {
      const results = ElixirsSelectors.selectAllElixirs(state);
      const selId = getElixirsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ElixirsSelectors.selectEntity(state) as ElixirsEntity;
      const selId = getElixirsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectElixirsLoaded() should return the current "loaded" status', () => {
      const result = ElixirsSelectors.selectElixirsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectElixirsError() should return the current "error" state', () => {
      const result = ElixirsSelectors.selectElixirsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
