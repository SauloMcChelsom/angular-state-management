import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UnauthorizedComponent } from './unauthorized.component'
import { UnauthorizedRoute } from './unauthorized.route'

@NgModule({
  imports: [CommonModule],
  declarations: [UnauthorizedComponent],
  exports: [
    UnauthorizedComponent, 
    UnauthorizedRoute
  ]
})
export class UnauthorizedModule {}