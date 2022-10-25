import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModuleModule } from './app-module.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
