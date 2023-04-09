import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IngredientEntity } from '../../../interfaces/elixir.models';

@Component({
  selector: 'apinity-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() id!: string;
  @Input() name!: string;
  @Input() ingredients!: IngredientEntity[];
  @Input() sideEffects!: string;
  @Input() effect!: string;

}
