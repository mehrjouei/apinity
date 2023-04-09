import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'apinity-elixir-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent {
  @Input() loading = false;
  @Output() valueChange = new EventEmitter<string>();
  searchForm = this.fb.group({
    name: ['', Validators.required]
  })

  submitted = false;

  constructor(private fb: FormBuilder) { }

  submit() {
    this.valueChange.emit(this.searchForm.value.name as string);
    this.submitted = true;
  }

  remove() {
    this.searchForm.reset();
    this.submit();
    this.submitted = false;
  }
}
