import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularMaterialModule } from '../../../theme/angular-material.module';

import { ListCommentComponent } from './list-comment.component';

@NgModule({
  declarations: [
    ListCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ListCommentComponent
  ]
})
export class ListCommentModule {}