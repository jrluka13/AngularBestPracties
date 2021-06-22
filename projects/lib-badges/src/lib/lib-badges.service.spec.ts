import { TestBed } from '@angular/core/testing';

import { LibBadgesService } from './lib-badges.service';

describe('LibBadgesService', () => {
  let service: LibBadgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBadgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
