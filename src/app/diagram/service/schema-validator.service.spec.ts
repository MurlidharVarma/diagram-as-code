import { TestBed } from '@angular/core/testing';

import { SchemaValidatorService } from './schema-validator.service';

describe('SchemaValidatorService', () => {
  let service: SchemaValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemaValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
