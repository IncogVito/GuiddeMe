import { TestBed } from '@angular/core/testing';

import { TourStopApiService } from './tour-stop-api.service';

describe('TourStopApiService', () => {
  let service: TourStopApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourStopApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
