import { TestBed } from '@angular/core/testing';

import { ForGlobalService } from './for-global.service';

describe('ForGlobalService', () => {
  let service: ForGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
