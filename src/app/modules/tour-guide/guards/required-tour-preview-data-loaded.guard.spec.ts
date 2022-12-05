import { TestBed } from '@angular/core/testing';

import { RequiredTourPreviewDataLoadedGuard } from './required-tour-preview-data-loaded-guard.service';

describe('RequiredDataLoadedGuard', () => {
  let guard: RequiredTourPreviewDataLoadedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RequiredTourPreviewDataLoadedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
