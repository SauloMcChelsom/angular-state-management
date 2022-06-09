import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'

import { EditComment } from '@app/core/interfaces/index'
import * as bookActions from '../store/index.actions'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public comment: EditComment

  constructor(private store$: Store<any>, private router: Router) {}

  ngOnInit() {
    this.getCommentSelectedOfList()
  }

  private getCommentSelectedOfList(){
    this.store$.select(bookActions.updateNotificationAction).subscribe((res:any)=>{
      let selected = res.bookStore.selected
      if(selected){
        this.setCommentForDetail(selected)
      }
    })
  }

  private setCommentForDetail(comment:EditComment){
    this.comment = comment
  }
}
