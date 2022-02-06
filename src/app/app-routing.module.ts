import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'material', pathMatch: 'full'},
  { path: 'material', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule) },
  { path: 'blazor', loadChildren: () => import('./blazor/blazor.module').then(m => m.BlazorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
