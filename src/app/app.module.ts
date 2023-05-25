import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { demoComponent } from './demo.component';
import { FormComponent } from './form/form.component'
import { demoComponentForm } from './demo.form';
import { demoComponentFooter } from './demo.footer';

@NgModule({
  declarations: [
    AppComponent,
    demoComponent,
    FormComponent,
    demoComponentForm,
    demoComponentFooter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
