import { TestBed } from '@angular/core/testing';

import { GethttpService } from './gethttp.service';

describe('GethttpService', () => {
  let service: GethttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GethttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
