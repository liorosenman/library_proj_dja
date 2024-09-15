import { TestBed } from '@angular/core/testing';

import { LoginsrvService } from '../loginsrv.service';

describe('LoginsrvService', () => {
  let service: LoginsrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginsrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
