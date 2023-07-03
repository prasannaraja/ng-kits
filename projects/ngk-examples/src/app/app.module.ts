import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompositeBuilderExampleComponent } from './components/composite-builder-example/composite-builder-example.component';
import { NgkCompositeBuilderModule } from 'ngk-composite-builder';

@NgModule({
  declarations: [AppComponent, HomeComponent, CompositeBuilderExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgkCompositeBuilderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
