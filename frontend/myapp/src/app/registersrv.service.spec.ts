import { TestBed } from '@angular/core/testing';

import { RegistersrvService } from './services/registersrv.service';

describe('RegistersrvService', () => {
  let service: RegistersrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistersrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
