import { Element } from '@angular/compiler';
import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule } from '@apinity/ui-components/button';
import { CardModule } from '@apinity/ui-components/card';
import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;
  let cdr: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModule, ButtonModule, RouterTestingModule],
      declarations: [ListItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cdr = fixture.componentRef.injector.get(ChangeDetectorRef);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the elixir effect', () => {
    component.effect = 'Test Effect';
    cdr.detectChanges();
    const effects = fixture.debugElement.query(By.css('.details>div:nth-child(2)')).nativeElement;
    expect(effects.textContent).toBe('Test Effect');
  });

  it('should display the elixir ingredients', () => {
    component.ingredients = [{ id: "1", name: "ingredient1" }, { id: "2", name: "ingredient2" }];
    cdr.detectChanges();
    const ingredients = fixture.debugElement.query(By.css('.details>div:nth-child(6)')).nativeElement;
    expect(ingredients.textContent.trim()).toBe('ingredient1  , ingredient2');
  });
});
