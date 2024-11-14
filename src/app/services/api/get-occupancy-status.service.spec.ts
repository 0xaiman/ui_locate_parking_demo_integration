import { TestBed } from '@angular/core/testing';

import { GetOccupancyStatusService } from './get-occupancy-status.service';

describe('GetOccupancyStatusService', () => {
  let service: GetOccupancyStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOccupancyStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
