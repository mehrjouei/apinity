import { TestBed } from '@angular/core/testing';

import { ElixirService } from './elixir.service';

describe('ElixirService', () => {
  let service: ElixirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElixirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
