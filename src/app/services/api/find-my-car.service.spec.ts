import { TestBed } from '@angular/core/testing';

import { FindMyCarService } from './find-my-car.service';

describe('FindMyCarService', () => {
  let service: FindMyCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindMyCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
