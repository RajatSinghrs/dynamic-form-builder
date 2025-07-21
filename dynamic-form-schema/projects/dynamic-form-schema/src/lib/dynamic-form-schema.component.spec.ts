import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormSchemaComponent } from './dynamic-form-schema.component';

describe('DynamicFormSchemaComponent', () => {
  let component: DynamicFormSchemaComponent;
  let fixture: ComponentFixture<DynamicFormSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormSchemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
