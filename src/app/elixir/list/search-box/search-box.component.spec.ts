import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ButtonModule } from '@apinity/ui-components/button';
import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
      imports: [FormsModule, ReactiveFormsModule, ButtonModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value when submit is called', () => {
    const value = 'elixir';
    const spy = jest.spyOn(component.valueChange, 'emit');
    component.searchForm.setValue({ name: value });
    component.submit();
    expect(spy).toHaveBeenCalledWith(value);
  });

  it('should disable submit button when the form is invalid', () => {
    component.searchForm.setValue({ name: '' });
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTruthy();
  });

});
