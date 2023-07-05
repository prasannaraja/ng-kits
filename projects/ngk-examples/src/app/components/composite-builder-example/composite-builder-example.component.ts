import { Component } from '@angular/core';
import { formUi } from '../../models';

@Component({
  selector: 'composite-builder-example',
  templateUrl: './composite-builder-example.component.html',
  styleUrls: ['./composite-builder-example.component.scss'],
})
export class CompositeBuilderExampleComponent {
  UIModel = formUi;
  constructor() {
    console.log(this.UIModel);
  }
}
