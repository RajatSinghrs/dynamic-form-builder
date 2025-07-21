import { TestBed } from '@angular/core/testing';

import { DynamicFormSchemaService } from './dynamic-form-schema.service';

describe('DynamicFormSchemaService', () => {
  let service: DynamicFormSchemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormSchemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
