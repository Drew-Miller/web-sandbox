import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlazorRoutingModule } from './blazor-routing.module';
import { BlazorComponent } from './blazor.component';

export const imports = [
  CommonModule,
  BlazorRoutingModule
];

export const declarations = [
  BlazorComponent
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...imports
  ]
})
export class BlazorModule { }
