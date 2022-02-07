import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar.component';
import { NavLinkComponent } from './nav-link/nav-link.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavLinkComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SidebarComponent,
    NavLinkComponent
  ]
})
export class SidebarModule { }
