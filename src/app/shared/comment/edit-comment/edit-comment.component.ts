import { Component, OnInit, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Output, EventEmitter } from '@angular/core';

import { EditComment } from '@app/core/interfaces/index'

@Component({
  selector: 'asm-edit-comment',
  templateUrl: './edit-comment.component.html'
})
export class EditCommentComponent implements OnInit {

  @Input() comment$: EditComment = null

  @Output() 
  public editCommentEventOutPut$ = new EventEmitter<EditComment>();

  public form: FormGroup

  public get comment(){ 
    return this.form.get('comment') 
  }

  public get id(){ 
    return this.form.get('id') 
  }

  public get user_id(){ 
    return this.form.get('user_id') 
  }

  constructor() {}

  ngOnInit() {}

  ngOnChanges(){
    if(this.comment$.comment){
      this.createForm(this.comment$)
    }
  }

  private createForm(form: EditComment) {
    this.form = new FormGroup({
      comment: new FormControl({ value: form.comment, disabled: false}, Validators.compose([Validators.required, Validators.maxLength(100)])),
      id: new FormControl(form.id),
      user_id: new FormControl(form.user_id),
    })
  }

  public updateButton(){
    this.editCommentEventOutPut$.emit(<EditComment>{
      comment: this.comment.value,
      id:this.id.value,
      user_id:this.user_id.value
    })
    this.cleanButton()
  }

  public cleanButton(){
    //this.createForm(new Forms())
    this.comment.reset()
  }

  public reset(){
    this.comment.reset()
  }

}

export  class  Forms implements EditComment {
  comment: string = ''
  id: number = 0
  user_id: number = 0
}