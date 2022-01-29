import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import SizeSelector from './size-selector/size-selector.component'
import Brutalist from './brutalist.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [Brutalist],
  declarations: [Brutalist, SizeSelector],
  providers: [],
})
export class BrutalistModule { }
