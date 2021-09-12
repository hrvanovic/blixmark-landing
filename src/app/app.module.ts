import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MainboxComponent} from "./mainbox/mainbox.component";
import {CopyrightComponent} from "./copyright/copyright.component";

@NgModule({
  declarations: [
    AppComponent,
    MainboxComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
