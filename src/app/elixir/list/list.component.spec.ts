import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { ElixirsFacade } from '../+state/elixirs/elixirs.facade';
import { of } from 'rxjs';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ButtonModule } from '@apinity/ui-components/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let mockElixirFacade: jest.Mocked<any>;

  beforeEach(async () => {
    mockElixirFacade = {
      init: jest.fn(),
      allElixirs$: of([]),
      loaded$: of(false),
    };

    await TestBed.configureTestingModule({
      imports: [ButtonModule, FormsModule, ReactiveFormsModule],
      declarations: [ListComponent, SearchBoxComponent],
      providers: [
        { provide: ElixirsFacade, useValue: mockElixirFacade }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init the elixirFacade on search', () => {
    const name = 'Test Elixir';
    component.search(name);
    expect(mockElixirFacade.init).toHaveBeenCalledWith(name);
  });

  it('should set loading to true when searching with a name', () => {
    const name = 'Test Elixir';
    component.search(name);
    expect(component.loading).toBe(true);
  });

  it('should not set loading to true when searching without a name', () => {
    component.search();
    expect(component.loading).toBe(false);
  });

});
