import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularMaterialModule } from '../../../theme/angular-material.module';

import { DetailCommentComponent } from './detail-comment.component';

@NgModule({
  declarations: [
    DetailCommentComponent
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
    DetailCommentComponent
  ]
})
export class DetailCommentModule {}