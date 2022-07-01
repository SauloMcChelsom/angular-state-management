import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component'
import { LoadingRoute } from './loading.route'

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [
    LoadingComponent, 
    LoadingRoute
  ]
})
export class LoadingModule {}