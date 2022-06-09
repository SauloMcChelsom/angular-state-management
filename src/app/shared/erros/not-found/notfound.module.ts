import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './notfound.component'
import { PageNotFoundRoute } from './notfound.route'

@NgModule({
  imports: [CommonModule],
  declarations: [PageNotFoundComponent],
  exports: [
    PageNotFoundComponent, 
    PageNotFoundRoute
  ]
})
export class PageNotFoundModule {}