import { TestBed } from '@angular/core/testing';

import { AdminauthguardService } from './adminauthguard.service';

describe('AdminauthguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminauthguardService = TestBed.get(AdminauthguardService);
    expect(service).toBeTruthy();
  });
});
