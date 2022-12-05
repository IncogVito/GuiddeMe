import { TestBed } from '@angular/core/testing';

import { RequiredActionDispatcherResolver } from './required-action-dispatcher.resolver';

describe('RequiredActionDispatcherResolver', () => {
  let resolver: RequiredActionDispatcherResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RequiredActionDispatcherResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
