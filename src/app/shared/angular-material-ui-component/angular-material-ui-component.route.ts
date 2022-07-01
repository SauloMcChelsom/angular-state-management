import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialUIComponent } from './angular-material-ui.component';

const routes: Routes = [
  {path: '', component: AngularMaterialUIComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AngularMaterialUIRoute {}

