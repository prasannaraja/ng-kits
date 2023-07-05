import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompositeBuilderExampleComponent } from './components/composite-builder-example/composite-builder-example.component';
import { CommonModule } from '@angular/common';
import { NgkTailwindcssModule } from '@ngkits/tailwindcss';

@NgModule({
  declarations: [AppComponent, HomeComponent, CompositeBuilderExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgkTailwindcssModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
