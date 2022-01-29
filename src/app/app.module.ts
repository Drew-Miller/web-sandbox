import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import BrownFox from './shared/brown-fox.component';
import Button from './shared/button.component';
import Header from './shared/header.component';
import Page from './shared/page.component';
import Width from './shared/width.component';
import { GridModule } from './grid/grid.module';

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
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
