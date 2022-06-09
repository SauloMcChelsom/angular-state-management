import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AngularMaterialModule } from '@theme/angular-material.module'
import { CreateCommentModule } from '@app/shared/comment/create-comment/create-comment.module'
import { ListCommentModule } from '@app/shared/comment/list-comment/list-comment.module'
import { EditCommentModule } from '@app/shared/comment/edit-comment/edit-comment.module'
import { DetailCommentModule } from '@app/shared/comment/detail-comment/detail-comment.module'

import { BookStoreEffects } from './store/index.effects';
import { bookReducer } from './store/index.reducers'
import { Service } from './store/index.service'

import { ListComponent } from './list/list.component'
import { CreateComponent } from './create/create.component'
import { EditComponent } from './edit/edit.component'
import { DetailComponent } from './detail/detail.component'

import { FeedComponent } from './feed.component'
import { FeedRoute } from './feed.route'

const Components = [
  FeedComponent,
  ListComponent,
  CreateComponent,
  EditComponent,
  DetailComponent,
]
const Modules = [
  CreateCommentModule,
  ListCommentModule,
  EditCommentModule,
  DetailCommentModule,
]

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ...Modules,
    FeedRoute,
    StoreModule.forFeature('bookStore', bookReducer),
    EffectsModule.forFeature([BookStoreEffects])
  ],
  providers: [Service],
  bootstrap: [],
  exports: [
    ...Components
  ]
})
export class FeedModule {}