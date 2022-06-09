import { Component, OnInit } from '@angular/core'
import { Input, Output, EventEmitter } from '@angular/core'

import { ListComment } from '@app/core/interfaces/index'

@Component({
  selector: 'asm-list-comment',
  templateUrl: './list-comment.component.html'
})
export class ListCommentComponent implements OnInit { 

  @Input() comments$: ListComment[] = []
  
  @Output() 
  public deleteEventOutPut$ = new EventEmitter<ListComment>();

  @Output() 
  public editEventOutPut$ = new EventEmitter<ListComment>();

  @Output() 
  public detailEventOutPut$ = new EventEmitter<ListComment>();


  constructor() {}

  ngOnInit() {}

  ngOnChanges(){}

  public deleteButton(comment:ListComment){
    this.deleteEventOutPut$.emit(comment)
  }

  public detailButton(comment:ListComment){
    this.detailEventOutPut$.emit(comment)
  }

  public editButton(comment:ListComment){
    this.editEventOutPut$.emit(comment)
  }

}