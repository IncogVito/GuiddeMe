import { TestBed } from '@angular/core/testing';

import { CategoryMapperService } from './category-mapper.service';

describe('CategoryMapperService', () => {
  let service: CategoryMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
