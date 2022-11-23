import { TestBed } from '@angular/core/testing';

import { PerformanceTestService } from './performance-test.service';

describe('PerformanceTestService', () => {
  let service: PerformanceTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
