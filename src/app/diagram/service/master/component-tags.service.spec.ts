import { TestBed } from '@angular/core/testing';

import { ComponentTagsService } from './component-tags.service';

describe('ComponentTagsService', () => {
  let service: ComponentTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
