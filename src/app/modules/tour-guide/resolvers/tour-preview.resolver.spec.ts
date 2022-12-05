import { TestBed } from '@angular/core/testing';

import { TourPreviewResolver } from './tour-preview.resolver';

describe('TourPreviewResolver', () => {
  let resolver: TourPreviewResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TourPreviewResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
