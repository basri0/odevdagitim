import { TestBed } from '@angular/core/testing';

import { OdevService } from './odev.service';

describe('OdevService', () => {
  let service: OdevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
