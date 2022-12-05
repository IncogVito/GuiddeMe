import { TestBed } from '@angular/core/testing';

import { TourMapperService } from './tour-mapper.service';

describe('TourMapperService', () => {
  let service: TourMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
