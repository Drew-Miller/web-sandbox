import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { ButtonGalleryComponent } from './button-gallery/button-gallery.component';


export const imports = [
  CommonModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule
];

@NgModule({
  declarations: [
    MaterialComponent,
    ButtonGalleryComponent
  ],
  imports: [
    MaterialRoutingModule,
    ...imports
  ]
})
export class MaterialModule { }
