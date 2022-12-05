import { TestBed } from '@angular/core/testing';

import { TourDescriptionUtilService } from './tour-description-util.service';

describe('TourDescriptionUtilService', () => {
  let service: TourDescriptionUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourDescriptionUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
