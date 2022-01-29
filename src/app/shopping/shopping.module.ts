import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleModule } from './simple/simple.module';
import { BrutalistModule } from './brutalist/brutalist.module';
import Shopping from './shopping.component';

@NgModule({
  imports: [
    CommonModule,
    SimpleModule,
    BrutalistModule
  ],
  exports: [],
  declarations: [Shopping],
  providers: [],
})
export class ShoppingModule { }
