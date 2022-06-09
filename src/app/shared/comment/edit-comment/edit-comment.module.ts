import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularMaterialModule } from '../../../theme/angular-material.module';

import { EditCommentComponent } from './edit-comment.component';

@NgModule({
  declarations: [
    EditCommentComponent
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
    EditCommentComponent
  ]
})
export class EditCommentModule {}