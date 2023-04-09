import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ElixirsFacade } from '../+state/elixirs/elixirs.facade';

@Component({
  selector: 'apinity-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  elixirs$ = this.elixirFacade.allElixirs$;
  loaded$ = this.elixirFacade.loaded$.pipe(tap((loaded) => this.loading = !loaded));
  loading = false;

  constructor(private elixirFacade: ElixirsFacade) { }

  ngOnInit(): void {
    this.search();
  }

  search(name?: string) {
    this.elixirFacade.init(name);
    this.loading = true && !!name;
  }
}
