import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Service } from './index.service';
import * as bookActions from './index.actions';
 
@Injectable()
export class BookStoreEffects {
  constructor(
    private dataService: Service, 
    private actions$: Actions
  ) {}

  private parameters:any = null

  loadBookByUserIdRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.loadBookByUserIdRequestAction),
      switchMap(action => {
        return this.dataService.getBookByUserId(action.id).pipe(
          //tap(()=>console.log("loadBookByUserIdRequestEffect", action.id)),
          map((book: any) => {
              return bookActions.loadBookByUserIdSuccessAction({ book })
          }),
          catchError((error: any) => {
            return observableOf(bookActions.loadBookByUserIdFailureAction({ error }))
          })
        )
      })
  ))
 
  saveRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.saveRequestAction),
    switchMap(action => {
      this.parameters = action.item
      return this.dataService.saveBook(action.item).pipe(
        map((item: any) => {
            return bookActions.saveSuccessAction({ item })
        }),
        catchError(error => {
          return observableOf(bookActions.saveFailureAction({ error }))
        })
      )
    }),
    switchMap(action => {
      return this.dataService.getBookByUserId(this.parameters.user_id).pipe(
        map((book: any) => {
            this.parameters = 'NEW_INPUT'
            return bookActions.loadBookByUserIdSuccessAction({ book })
        }),
        catchError((error: any) => {
          return observableOf(bookActions.loadBookByUserIdFailureAction({ error }))
        })
      )
    })
  ))
 
  updateRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.updateRequestAction),
    switchMap(action => {
      this.parameters = action.item
      return this.dataService.updateBook(action.item).pipe(
        map((item: any) => {
            return bookActions.updateSuccessAction({ item })
        }),
        catchError(error => {
          return observableOf(bookActions.updateFailureAction({ error }))
        })
      )
    }),
    switchMap(action => {
      return this.dataService.getBookByUserId(this.parameters.user_id).pipe(
        map((book: any) => {
          console.log(book)
            return bookActions.loadBookByUserIdSuccessAction({ book })
        }),
        catchError((error: any) => {
          return observableOf(bookActions.loadBookByUserIdFailureAction({ error }))
        })
      )
    })
  ))
 
  deleteRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.deleteRequestAction),
    switchMap(action => {
      this.parameters = action.item
      return this.dataService.deleteBook(action.item).pipe(
        map((item: any) => {
           return bookActions.deleteSuccessAction({ item })
        }),
        catchError(error => {
          return observableOf(bookActions.deleteFailureAction({ error }))
        })
      )
    }),
    switchMap(action => {
      return this.dataService.getBookByUserId(this.parameters.user_id).pipe(
        map((book: any) => {
            return bookActions.loadBookByUserIdSuccessAction({ book })
        }),
        catchError((error: any) => {
          return observableOf(bookActions.loadBookByUserIdFailureAction({ error }))
        })
      )
    })
  ))
}