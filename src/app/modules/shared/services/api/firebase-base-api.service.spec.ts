import { TestBed } from '@angular/core/testing';

import { FirebaseAbstractApiService } from './firebase-abstract-api.service';

describe('FirebaseBaseApiService', () => {
  let service: FirebaseAbstractApiService<any, any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseAbstractApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
