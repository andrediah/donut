import { TestBed } from '@angular/core/testing';

import { DonutApiService } from './donut-api.service';

describe('DonutApiService', () => {
  let service: DonutApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
