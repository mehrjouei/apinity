import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as ElixirsActions from './elixirs.actions';
import * as ElixirsFeature from './elixirs.reducer';
import * as ElixirsSelectors from './elixirs.selectors';

@Injectable()
export class ElixirsFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ElixirsSelectors.selectElixirsLoaded));
  allElixirs$ = this.store.pipe(select(ElixirsSelectors.selectAllElixirs));
  selectedElixirs$ = this.store.pipe(select(ElixirsSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init(name?:string) {
    this.store.dispatch(ElixirsActions.initElixirs({name}));
  }
}
