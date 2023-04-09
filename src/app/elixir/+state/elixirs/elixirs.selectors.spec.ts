import { ElixirsEntity } from '../../../interfaces/elixir.models';
import {
  ElixirsState,
  initialElixirsState,
} from './elixirs.reducer';
import * as ElixirsSelectors from './elixirs.selectors';

describe('Elixirs Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const createElixirsEntity = (id: string, name = '') =>
  ({
    id,
    name: name || `name-${id}`,
  } as ElixirsEntity);

  let state: { elixirs: ElixirsState };

  beforeEach(() => {
    state = {
      elixirs: 
        {
          ...initialElixirsState,
          error: ERROR_MSG,
          loaded: true,
          selected: createElixirsEntity('ELIXIR-AAA'),
          elixirs: [
            createElixirsEntity('ELIXIR-AAA'),
            createElixirsEntity('ELIXIR-BBB'),
            createElixirsEntity('ELIXIR-CCC'),
          ]
        }
    };
  });

  describe('Elixirs Selectors', () => {
    it('selectAllElixirs() should return the list of Elixirs', () => {
      const results = ElixirsSelectors.selectAllElixirs(state) as ElixirsEntity[];
      expect(results.length).toBe(3);
    });

    it('selectSelectedElixir() should return the selected Entity', () => {
      const result = ElixirsSelectors.selectSelectedElixir(state) as ElixirsEntity;

      expect(result.id).toBe('ELIXIR-AAA');
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
