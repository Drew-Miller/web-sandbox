import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BlazorRoutingModule } from './blazor-routing.module';
import { BlazorComponent } from './blazor.component';
import { OriginalComponent } from './original/original.component';
import { SidebarModule } from './sidenav/sidebar.module';
import { WeatherModule } from './weather/weather.component.module';

export const imports = [
  CommonModule,
  MatIconModule,
  BlazorRoutingModule,
  SidebarModule,
  WeatherModule
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
