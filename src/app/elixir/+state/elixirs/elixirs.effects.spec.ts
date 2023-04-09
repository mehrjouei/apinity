import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ElixirsActions from './elixirs.actions';
import { ElixirsEffects } from './elixirs.effects';

describe('ElixirsEffects', () => {
  let actions: Observable<Action>;
  let effects: ElixirsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ElixirsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ElixirsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ElixirsActions.initElixirs() });

      const expected = hot('-a-|', {
        a: ElixirsActions.loadElixirsSuccess({ elixirs: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
