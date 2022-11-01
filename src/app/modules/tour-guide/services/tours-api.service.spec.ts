import { TestBed } from '@angular/core/testing';

import { ToursApiService } from './tours-api.service';

describe('ToursApiService', () => {
  let service: ToursApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToursApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
