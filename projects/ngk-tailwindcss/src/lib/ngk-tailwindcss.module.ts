import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { ButtonComponent } from './components/button/button.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { ComboboxesComponent } from './components/comboboxes/comboboxes.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { TableComponent } from './components/table/table.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompositeBuilderComponent } from './components/composite-builder/composite-builder.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AutoCompleteComponent,
    ButtonComponent,
    CalendarComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    ComboboxesComponent,
    InputFieldComponent,
    TableComponent,
    TextFieldComponent,
    CompositeBuilderComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    AutoCompleteComponent,
    ButtonComponent,
    CalendarComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    ComboboxesComponent,
    InputFieldComponent,
    TableComponent,
    TextFieldComponent,
    CompositeBuilderComponent,
  ],
})
export class NgkTailwindcssModule {}
