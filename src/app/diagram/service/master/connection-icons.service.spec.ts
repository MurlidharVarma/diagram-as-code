import { TestBed } from '@angular/core/testing';

import { ConnectionIconsService } from './connection-icons.service';

describe('ConnectionIconsService', () => {
  let service: ConnectionIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
