import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlazorRoutingModule } from './blazor-routing.module';
import { BlazorComponent } from './blazor.component';
import { OriginalComponent } from './original/original.component';
import { SidebarModule } from './sidenav/sidebar.module';

export const imports = [
  CommonModule,
  BlazorRoutingModule,
  SidebarModule
];

export const declarations = [
  BlazorComponent
];

@NgModule({
  declarations: [
    ...declarations,
    OriginalComponent
  ],
  imports: [
    ...imports,
  ]
})
export class BlazorModule { }
