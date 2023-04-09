import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ElixirsFacade } from '../+state/elixirs/elixirs.facade';

@Component({
  selector: 'apinity-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit, OnDestroy {
  elixirId: string | null = null;
  elixir$ = this.elixirFacade.selectedElixir$;
  subscriptions = new Subscription();

  constructor(private elixirFacade: ElixirsFacade, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.paramMap.subscribe((params) => {
        this.elixirId = params.get('id');
        this.elixirFacade.loadById(this.elixirId as string);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
