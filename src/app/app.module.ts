import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import BrownFox from './shared/brown-fox.component';
import Button from './shared/button.component';
import Header from './shared/header.component';
import Page from './shared/page.component';
import Width from './shared/width.component';

@NgModule({
  declarations: [
    AppComponent,
    BrownFox,
    Button,
    Header,
    Page,
    Width
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
