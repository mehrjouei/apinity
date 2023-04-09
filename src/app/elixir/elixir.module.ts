import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElixirRoutingModule } from './elixir-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromElixirs from './+state/elixirs/elixirs.reducer';
import { ElixirsEffects } from './+state/elixirs/elixirs.effects';
import { ElixirsFacade } from './+state/elixirs/elixirs.facade';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './list/search-box/search-box.component';
import { ButtonModule } from '@apinity/ui-components/button';
import { ListItemComponent } from './list/list-item/list-item.component';
import { CardModule } from '@apinity/ui-components/card';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    SearchBoxComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    ElixirRoutingModule,
    MatIconModule,
    StoreModule.forFeature(
      fromElixirs.ELIXIRS_FEATURE_KEY,
      fromElixirs.elixirsReducer
    ),
    EffectsModule.forFeature([ElixirsEffects]),
  ],
  providers: [ElixirsFacade],
})
export class ElixirModule { }
