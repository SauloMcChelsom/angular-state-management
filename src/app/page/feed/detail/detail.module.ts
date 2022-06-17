import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AngularMaterialModule } from '@theme/angular-material.module'
import { CreateCommentModule } from '@app/shared/comment/create-comment/create-comment.module'
import { ListCommentModule } from '@app/shared/comment/list-comment/list-comment.module'
import { EditCommentModule } from '@app/shared/comment/edit-comment/edit-comment.module'
import { DetailCommentModule } from '@app/shared/comment/detail-comment/detail-comment.module'
import { ZippyBasicModule } from '@app/shared/app-zippy-basic/zippy-basic.module'

import { BookStoreEffects } from '../store/index.effects';
import { bookReducer } from '../store/index.reducers'
import { Service } from '../store/index.service'

import { DetailComponent } from './detail.component'
import { DetailRoute } from './detail.route'

const Components = [
  DetailComponent,
]

const Modules = [
  CreateCommentModule,
  ListCommentModule,
  EditCommentModule,
  DetailCommentModule,
  ZippyBasicModule
]

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    DetailRoute,
    ...Modules,
    StoreModule.forFeature('bookStore', bookReducer),
    EffectsModule.forFeature([BookStoreEffects])
  ],
  providers: [Service],
  bootstrap: [],
  exports: [
    ...Components
  ]
})
export class DetailModule {}