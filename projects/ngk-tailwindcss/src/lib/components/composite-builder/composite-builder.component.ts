import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FIELD_TYPE, FormUI, Group } from '../../models';

@Component({
  selector: 'tailwind-composite-builder',
  templateUrl: './composite-builder.component.html',
  styleUrls: ['./composite-builder.component.scss'],
})
export class CompositeBuilderComponent implements OnInit {
  @Input()
  formUi!: FormUI;

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    console.log('tailwind-composite-builder:constructor');
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    console.log('tailwind-composite-builder:ngOnInit');
    this.generateForm();
  }

  addGroup(groupName: string): void {
    this.form.addControl(groupName, new FormGroup({}));
  }

  addField(groupName: string, fieldName: string, validators: []): void {
    const group = this.form.get(groupName) as FormGroup;
    const formControl = this.formBuilder.control(null, validators);
    group.addControl(fieldName, formControl);
  }

  generateForm(): void {
    this.formUi.groups.forEach((group) => {
      this.addGroup(group.name);
      group.fields.forEach((field) => {
        const validators = [];
        if (field.mandatory) {
          validators.push(Validators.required);
        }
        this.addField(group.name, field.name, []);
      });
    });
  }

  get groups(): Group[] {
    return this.formUi.groups;
  }

  get fieldType() {
    return FIELD_TYPE;
  }
}