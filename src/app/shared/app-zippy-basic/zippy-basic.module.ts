import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ZippyBasicComponent } from './zippy-basic.component';

@NgModule({
  declarations: [
    ZippyBasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ZippyBasicComponent
  ]
})
export class ZippyBasicModule {}