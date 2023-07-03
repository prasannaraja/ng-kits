import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgkCompositeBuilderComponent } from './components/ngk-composite-builder.component';

@NgModule({
  declarations: [NgkCompositeBuilderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule, NgkCompositeBuilderComponent],
})
export class NgkCompositeBuilderModule {}
