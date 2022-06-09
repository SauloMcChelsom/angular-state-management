import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadRequestComponent } from './bad-request.component'
import { BadRequestRoute } from './bad-request.route'

@NgModule({
  imports: [CommonModule],
  declarations: [BadRequestComponent],
  exports: [
    BadRequestComponent, 
    BadRequestRoute
  ]
})
export class BadRequestModule {}