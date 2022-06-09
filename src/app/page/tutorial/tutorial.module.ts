import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TutorialComponent } from './tutorial.component'
import { TutorialRoute } from './tutorial.route'

@NgModule({
  declarations: [
    TutorialComponent
  ],
  imports: [
    CommonModule,
    TutorialRoute
  ],
  providers: [],
  bootstrap: [],
  exports: [
    TutorialComponent
  ]
})
export class TutorialModule {}