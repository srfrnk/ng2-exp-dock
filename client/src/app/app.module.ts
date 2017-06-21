import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';
import { MdToolbarModule, MdDialogModule, MdButtonModule, MdIconModule,MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdToolbarModule, MdDialogModule, MdButtonModule, MdIconModule,MdInputModule,
    ExpansionPanelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }