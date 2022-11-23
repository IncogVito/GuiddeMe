import { TestBed } from '@angular/core/testing';

import { CanDeactivateGame } from './can-deactivate-game.service';

describe('CanDeactivateGameService', () => {
  let service: CanDeactivateGame;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeactivateGame);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
