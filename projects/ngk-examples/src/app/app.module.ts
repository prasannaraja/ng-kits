import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompositeBuilderExampleComponent } from './components/composite-builder-example/composite-builder-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompositeBuilderExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
