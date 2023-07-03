import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormUI, Group, FIELD_TYPE } from '../models';

@Component({
  selector: 'ngk-composite-builder',
  templateUrl: './ngk-composite-builder.component.html',
  styleUrls: ['./ngk-composite-builder.component.scss'],
})
export class NgkCompositeBuilderComponent implements OnInit, AfterViewInit {
  @Input()
  formUi!: FormUI;
  form!: FormGroup;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
  }

  ngAfterViewInit(): void {
    this.generateForm();
  }

  generateForm(): void {
    this.formUi.groups.forEach((group) => {
      group.fields.forEach((field) => {
        const validators = [];
        if (field.mandatory) {
          validators.push(Validators.required);
        }

        const formControl = this.formBuilder.control('', validators);
        this.form.addControl(field.name, formControl);
      });
    });
  }

  get groups(): Group[] {
    return this.formUi.groups;
  }

  get fieldType() {
    return FIELD_TYPE;
  }

  submitForm(): void {
    if (this.form.valid) {
      // Perform form submission logic here
      console.log(this.form.value);
    } else {
      // Display error messages or handle invalid form
    }
  }
}
