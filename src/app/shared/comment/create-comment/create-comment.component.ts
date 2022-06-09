import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Output, EventEmitter } from '@angular/core';

import { CreateComment  } from '@app/core/interfaces/index'

@Component({
  selector: 'asm-create-comment',
  templateUrl: './create-comment.component.html'
})
export class CreateCommentComponent implements OnInit {

  @Output() 
  public cretaeNewCommentEventOutPut$ = new EventEmitter<CreateComment>();

  public form: FormGroup

  public get comment(){ 
    return this.form.get('comment') 
  }

  constructor() {}

  ngOnInit() {
    this.createForm(new Forms())
  }

  private createForm(form: Forms) {
    this.form = new FormGroup({
      comment: new FormControl({ value: form.comment, disabled: false}, Validators.compose([Validators.required, Validators.maxLength(100)])),
    })
  }

  public createNewComment(){
    this.cretaeNewCommentEventOutPut$.emit(<CreateComment>{
      comment: this.comment.value
    })
    this.clean()
  }

  public clean(){
    this.createForm(new Forms())
  }

  public reset(){
    this.comment.reset()
  }

}

export  class  Forms implements CreateComment {
  comment: string = ''
}