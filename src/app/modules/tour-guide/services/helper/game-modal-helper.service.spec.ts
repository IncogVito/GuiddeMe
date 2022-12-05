import { TestBed } from '@angular/core/testing';

import { GameModalHelperService } from './game-modal-helper.service';

describe('GameModalHelperService', () => {
  let service: GameModalHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameModalHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
