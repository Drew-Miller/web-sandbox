import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SidebarComponent,
    NavItemComponent
  ]
})
export class SidebarModule { }
