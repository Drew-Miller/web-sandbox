import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import Simple from './simple.component';
import SizeSelector from './size-selector/size-selector.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [],
  declarations: [Simple, SizeSelector],
  providers: [],
})
export class SimpleModule { }
