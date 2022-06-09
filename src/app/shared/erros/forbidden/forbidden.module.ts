import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForbiddenComponent } from './forbidden.component'
import { ForbiddenRoute } from './forbidden.route'

@NgModule({
  imports: [CommonModule],
  declarations: [ForbiddenComponent],
  exports: [
    ForbiddenComponent, 
    ForbiddenRoute
  ]
})
export class ForbiddenModule {}