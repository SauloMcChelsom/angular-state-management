import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AngularMaterialModule } from '@theme/angular-material.module'
import { DetailCommentModule } from '@app/shared/comment/detail-comment/detail-comment.module'
import { ZippyBasicModule } from '@app/shared/app-zippy-basic/zippy-basic.module'

import { BackGroundDirective } from '@app/core/directives/back-ground.directive'
import { NgIfDirective } from '@app/core/directives/ng-if.directive'
import { NgxtForDirective } from '@app/core/directives/ng-for.directive'

import { LearnAngularComponent } from './learn-angular.component'
import { LearnAngularRoute } from './learn-angular.route'

const Components = [
  BackGroundDirective,
  NgIfDirective,
  NgxtForDirective,
  LearnAngularComponent
]

const Modules = [
  DetailCommentModule,
  ZippyBasicModule,
]

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    LearnAngularRoute,
    ...Modules
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ...Components
  ]
})
export class LearnAngularModule {}