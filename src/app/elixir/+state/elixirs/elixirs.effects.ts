import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { ElixirService } from '../../../services/elixir.service';
import * as ElixirsActions from './elixirs.actions';
import * as ElixirsFeature from './elixirs.reducer';

@Injectable()
export class ElixirsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ElixirsActions.initElixirs),
      switchMap((props) =>
        this.elixirService.getElixirs(props?.name).pipe(
          map((elixirs) => ElixirsActions.loadElixirsSuccess({ elixirs })),
          catchError((error) => {
            return of(ElixirsActions.loadElixirsFailure({ error }));
          })
        )
      )
    )
  );

  loadById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ElixirsActions.loadElixir),
      switchMap((props) =>
        this.elixirService.getElixirById(props?.id).pipe(
          map((elixir) => ElixirsActions.loadElixirSuccess({ elixir })),
          catchError((error) => {
            return of(ElixirsActions.loadElixirFailure({ error }));
          })
        )
      )
    )
  );

  constructor(private elixirService: ElixirService) { }
}
