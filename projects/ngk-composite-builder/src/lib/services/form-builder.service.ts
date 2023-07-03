import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private formBuilder: FormBuilder) {}

  buildForm(formUi: any): FormGroup {
    const formGroup = this.formBuilder.group({});

    formUi.groups.forEach((group: any) => {
      group.fields.forEach((field: any) => {
        const formControl = this.createFormControl(field);
        if (field.hidden) {
          formControl.disable();
        }
        if (field.mandatory) {
          formControl.setValidators([Validators.required]);
        }
        formGroup.addControl(field.name, formControl);
      });
    });

    return formGroup;
  }

  private createFormControl(field: any) {
    let formControl = this.formBuilder.control('');

    switch (field.type) {
      case 'TextBox':
        formControl = this.formBuilder.control('');
        break;
      case 'RadioButton':
        formControl = this.formBuilder.control('');
        break;
      case 'RadioButtonGroup':
        formControl = this.formBuilder.control('');
        break;
      case 'CheckBox':
        formControl = this.formBuilder.control('');
        break;
      case 'CheckBoxGroup':
        formControl = this.formBuilder.control('');
        break;
      case 'DropDown':
        formControl = this.formBuilder.control('');
        break;
      case 'ComboBox':
        formControl = this.formBuilder.control('');
        break;
      case 'AutoComplete':
        formControl = this.formBuilder.control('');
        break;
      case 'Grid':
        // Handle grid field control creation as needed
        break;
      case 'LookUp':
        // Handle lookup field control creation as needed
        break;
      default:
        break;
    }

    return formControl;
  }
}
