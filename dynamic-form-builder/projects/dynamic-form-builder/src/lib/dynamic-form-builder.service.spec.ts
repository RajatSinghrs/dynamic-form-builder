import { TestBed } from '@angular/core/testing';

import { DynamicFormBuilderService } from './service/dynamic-form-builder.service';

describe('DynamicFormBuilderService', () => {
  let service: DynamicFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
