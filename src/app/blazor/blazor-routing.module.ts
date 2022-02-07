import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlazorComponent } from './blazor.component';
import { OriginalComponent } from './original/original.component';

const routes: Routes = [
  { path: '', component: BlazorComponent }, 
  { path: 'original', component: OriginalComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlazorRoutingModule { }
