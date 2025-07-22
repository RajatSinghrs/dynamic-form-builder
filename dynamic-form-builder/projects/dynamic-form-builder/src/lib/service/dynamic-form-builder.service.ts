import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormBuilderService {
  //Reacticve form generator

  constructor(private fb: FormBuilder) { }
  buildForm(schema: any): FormGroup {
    const group: any = {};
    for (let field of schema.fields) {
      const validatorFns = this.mapValidators(field.validators);
      group[field.name] = [field.default || '', validatorFns];
    }
    return this.fb.group(group);
  }

  private mapValidators(validators: any[]): any[] {
    const fns = [];
    for (let v of validators) {
      if (v === 'required') fns.push(Validators.required);
      else if (v === 'email') fns.push(Validators.email);
      else if (typeof v === 'object' && v.minLength)
        fns.push(Validators.minLength(v.minLength));
      // Add more mappings here -later
    }
    return fns;
  }

}
