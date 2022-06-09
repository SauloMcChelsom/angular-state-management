import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'

import { EditComment } from '@app/core/interfaces/index'
import * as bookActions from '../store/index.actions'

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public comment: EditComment

  constructor(private store$: Store<any>, private router: Router) {}

  ngOnInit() {
    this.getCommentSelectedOfList()
  }

  private getCommentSelectedOfList(){
    this.store$.select(bookActions.updateNotificationAction).subscribe((res:any)=>{
      let selected = res.bookStore.selected
      if(selected){
        this.setCommentForEdit(selected)
      }
    })
  }

  private editComment(edit:EditComment){
    this.store$.dispatch(bookActions.updateRequestAction({
      item:{ 
        comment: edit.comment,
        id: edit.id,
        user_id: edit.user_id
      }
    }))
    this.router.navigate(['/feed']);
  }

  private setCommentForEdit(comment:EditComment){
    this.comment = comment
  }

  public editCommentEventOutPut($event){
    this.editComment($event)
  }
}