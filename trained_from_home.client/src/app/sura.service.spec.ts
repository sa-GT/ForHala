import { TestBed } from '@angular/core/testing';

import { SuraService } from './sura.service';

describe('SuraService', () => {
  let service: SuraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
