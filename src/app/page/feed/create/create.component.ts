import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

import { CreateComment } from '@app/core/interfaces/index'
import * as bookActions from '../store/index.actions'

@Component({
  selector: 'create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  constructor(private store$: Store<any>) {}

  ngOnInit() {}

  private cretaeNewComment(post: CreateComment){
    this.store$.dispatch(
      bookActions.saveRequestAction({
        item:{ 
          comment:post.comment,
          user_id:3,
          publication_id:3
        }
      }),
    )
  }

  public cretaeNewCommentEventOutPut($event: CreateComment){
    this.cretaeNewComment($event)
  }
}
