import { TestBed } from '@angular/core/testing';

import { HeadershareService } from './headershare.service';

describe('HeadershareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeadershareService = TestBed.get(HeadershareService);
    expect(service).toBeTruthy();
  });
});
