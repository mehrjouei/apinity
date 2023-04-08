import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[apinity-button]',
})
export class ButtonDirective implements OnChanges {
  @Input() loading = false;
  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
      this.toggleSpinner();
  }

  private toggleSpinner() {
    const spinner = document.createElement('span');
    if (this.loading) {
      spinner.className = 'spinner';
      this.el.nativeElement.appendChild(spinner);
      this.el.nativeElement.disabled = true;
    } else if(this.el.nativeElement.getElementsByTagName('span').length){
      this.el.nativeElement.removeChild(this.el.nativeElement.getElementsByTagName('span')[0]);
      this.el.nativeElement.disabled = false;
    }
  }
}
