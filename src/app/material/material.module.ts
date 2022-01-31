import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { ButtonGalleryComponent } from './button-gallery/button-gallery.component';
import { PageHeaderComponent } from './page-header/page-header.component';


export const imports = [
  CommonModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
];

export const declarations = [
  MaterialComponent,
  ButtonGalleryComponent,
  PageHeaderComponent
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    MaterialRoutingModule,
    ...imports
  ]
})
export class MaterialModule { }
