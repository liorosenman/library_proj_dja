import { TestBed } from '@angular/core/testing';

import { SrvAuthService } from './srv-auth.service';

describe('SrvAuthService', () => {
  let service: SrvAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
