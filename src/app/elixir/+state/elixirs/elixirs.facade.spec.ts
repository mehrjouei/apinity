import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';
import { ElixirsEntity } from 'src/app/interfaces/elixir.models';

import * as ElixirsActions from './elixirs.actions';
import { ElixirsEffects } from './elixirs.effects';
import { ElixirsFacade } from './elixirs.facade';
import {
  ELIXIRS_FEATURE_KEY,
  ElixirsState,
  initialElixirsState,
  elixirsReducer,
} from './elixirs.reducer';
import * as ElixirsSelectors from './elixirs.selectors';

interface TestSchema {
  elixirs: ElixirsState;
}

describe('ElixirsFacade', () => {
  let facade: ElixirsFacade;
  let store: Store<TestSchema>;
  const createElixirsEntity = (id: string, name = ''): ElixirsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ELIXIRS_FEATURE_KEY, elixirsReducer),
          EffectsModule.forFeature([ElixirsEffects]),
        ],
        providers: [ElixirsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ElixirsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allElixirs$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allElixirs$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadElixirsSuccess` to manually update list
     */
    it('allElixirs$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allElixirs$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ElixirsActions.loadElixirsSuccess({
          elixirs: [createElixirsEntity('AAA'), createElixirsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allElixirs$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
