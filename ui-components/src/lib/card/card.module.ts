import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardActionsComponent } from './components/card-actions/card-actions.component';
import { CardContentComponent } from './components/card-content/card-content.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardActionsComponent,
    CardContentComponent,
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardActionsComponent,
    CardContentComponent
  ],
  imports: [CommonModule],
})
export class CardModule { }
