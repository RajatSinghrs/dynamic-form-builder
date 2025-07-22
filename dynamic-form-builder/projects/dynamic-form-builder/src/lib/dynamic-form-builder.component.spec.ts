import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';

describe('DynamicFormBuilderComponent', () => {
  let component: DynamicFormBuilderComponent;
  let fixture: ComponentFixture<DynamicFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
