import { TestBed } from '@angular/core/testing';

import { ComponentIdsService } from './component-ids.service';

describe('ComponentIdsService', () => {
  let service: ComponentIdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentIdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
