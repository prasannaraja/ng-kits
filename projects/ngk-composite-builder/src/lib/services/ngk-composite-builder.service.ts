import { Injectable } from '@angular/core';
import { FormBuilderService } from './form-builder.service';

@Injectable({
  providedIn: 'root',
})
export class NgkCompositeBuilderService {
  constructor(private formBuilderService: FormBuilderService) {}

  buildForm(formUi: any) {
    return this.formBuilderService.buildForm(formUi);
  }
}
