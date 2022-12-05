import { TestBed } from '@angular/core/testing';

import { EntityMapperService } from './entity-mapper.service';

describe('EntityMapperService', () => {
  let service: EntityMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
