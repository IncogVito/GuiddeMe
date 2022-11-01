import { TestBed } from '@angular/core/testing';

import { ToursPageResolver } from './tours-page.resolver';

describe('ToursPageResolver', () => {
  let resolver: ToursPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ToursPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
