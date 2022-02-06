import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlazorComponent } from './blazor.component';

const routes: Routes = [{ path: '', component: BlazorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlazorRoutingModule { }
