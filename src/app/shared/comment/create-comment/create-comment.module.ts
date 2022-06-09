import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularMaterialModule } from '../../../theme/angular-material.module';

import { CreateCommentComponent } from './create-comment.component';

@NgModule({
  declarations: [
    CreateCommentComponent
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
    CreateCommentComponent
  ]
})
export class CreateCommentModule {}