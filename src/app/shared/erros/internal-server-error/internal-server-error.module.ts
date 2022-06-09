import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InternalServerErrorComponent } from './internal-server-error.component'
import { InternalServerErrorRoute } from './internal-server-error.route'

@NgModule({
  imports: [CommonModule],
  declarations: [InternalServerErrorComponent],
  exports: [
    InternalServerErrorComponent, 
    InternalServerErrorRoute
  ]
})
export class InternalServerErrorModule {}