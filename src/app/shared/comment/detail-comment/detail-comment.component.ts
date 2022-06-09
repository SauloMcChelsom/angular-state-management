import { Component, OnInit, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { DetailComment  } from '@app/core/interfaces/index'

@Component({
  selector: 'asm-detail-comment',
  templateUrl: './detail-comment.component.html'
})
export class DetailCommentComponent implements OnInit {

  @Input() comment$: DetailComment = null

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

  private createForm(form: DetailComment) {
    this.form = new FormGroup({
      comment: new FormControl({ value: form.comment, disabled: false}, Validators.compose([Validators.required, Validators.maxLength(100)])),
      id: new FormControl(form.id),
      user_id: new FormControl(form.user_id),
    })
  }
}

export  class  Comment implements DetailComment{
  comment: string = ''
  id: number = 0
  user_id: number = 0
}