import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'

import { Comment, ListComment } from '@app/core/interfaces/index'

import * as bookSelectors from '../store/index.selectors'
import * as bookActions from '../store/index.actions'

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  public list_comments:ListComment[] = []

  constructor(private store$: Store<any>, private router: Router, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.initializeFirstFetchHttp(3)
    this.store()
  }

 /**
 * Quando o component for iniciado, faz uma requisição HTTP/GET para a API. 
 */
  private initializeFirstFetchHttp(user_id):void {
    this.store$.dispatch(bookActions.loadBookByUserIdRequestAction({
      id:user_id
    }))
  }

  private async store(){
    this.store$.select(bookSelectors.getBooks).subscribe((res)=>{
      if(res){
        this.list_comments = [ ...res ]
        this.ref.detectChanges();
      }
    })
  }

  public delete(comment:Comment){
    this.store$.dispatch(bookActions.deleteRequestAction({
      item:{
        id:comment.id,
        user_id:comment.user_id
      }
    }))
  }

  public deleteEventOutPut($event: ListComment){
    this.delete($event)
  }

  public detailEventOutPut($event: ListComment){
    this.store$.dispatch(bookActions.updateNotificationAction({
      item:{
        id:$event.id,
        user_id:$event.user_id,
        comment:$event.comment
      }
    }))
    this.router.navigate(['/feed/detail']);
  }

  public editEventOutPut($event: ListComment){
    this.store$.dispatch(bookActions.updateNotificationAction({
      item:{
        id:$event.id,
        user_id:$event.user_id,
        comment:$event.comment
      }
    }))
    this.router.navigate(['/feed/edit']);
  }
}
