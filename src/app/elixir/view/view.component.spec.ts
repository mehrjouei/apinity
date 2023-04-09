import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ElixirsFacade } from '../+state/elixirs/elixirs.facade';
import { of } from 'rxjs';
import { ViewComponent } from './view.component';
import { By } from '@angular/platform-browser';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let mockActivatedRoute, mockElixirsFacade:any;

  beforeEach(async () => {
    mockActivatedRoute = {
      paramMap: of({
        get: jest.fn().mockReturnValue('1'), 
      }),
    };

    mockElixirsFacade = {
      loadById: jest.fn(),
      selectedElixir$: of({
        id: 1,
        name: 'Test Elixir',
        ingredients: [],
        inventors: [],
      }),
    };

    await TestBed.configureTestingModule({
      declarations: [ViewComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ElixirsFacade, useValue: mockElixirsFacade },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadById on elixirFacade with the id from route param', () => {
    expect(mockElixirsFacade.loadById).toHaveBeenCalledWith('1');
  });


  it('should display elixir name after elixir is loaded', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.text-xl')).nativeElement.textContent.trim()).toBe('Test Elixir');
  });
});
