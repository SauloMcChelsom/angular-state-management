import { createAction, props } from '@ngrx/store';
import { Comment, ResponseSuccess, ResponseErro } from '@app/core/interfaces/index'

export enum ActionTypes {
  LOAD_BOOK_REQUEST = '[Book] Load Book Request',
  LOAD_BOOK_FAILURE = '[Book] Load Book Failure',
  LOAD_BOOK_SUCCESS = '[Book] Load Book Success',
 
  SAVE_REQUEST = '[Book] Save',
  SAVE_FAILURE = '[Book] Save Failure',
  SAVE_SUCCESS = '[Book] Save Success',
 
  UPDATE_NOTIFICATION = '[Book] Notification',
  DETAIL_NOTIFICATION = '[Book] Detail Notification',
  CONTROL_NOTIFICATION = '[Book] Control Notification',
  UPDATE_REQUEST = '[Book] Update',
  UPDATE_FAILURE = '[Book] Update Failure',
  UPDATE_SUCCESS = '[Book] Update Success',
 
  DELETE_REQUEST = '[Book] Delete',
  DELETE_FAILURE = '[Book] Delete Failure',
  DELETE_SUCCESS = '[Book] Delete Success'
}

export const loadBookByUserIdRequestAction = createAction(
  ActionTypes.LOAD_BOOK_REQUEST,
  props<{ id: number }>()
);

export const loadBookByUserIdSuccessAction = createAction(
  ActionTypes.LOAD_BOOK_SUCCESS,
  props<{ book: ResponseSuccess }>()
);

export const loadBookByUserIdFailureAction = createAction(
  ActionTypes.LOAD_BOOK_FAILURE,
  props<{ error: ResponseErro }>()
);

////////

export const loadBookRequestAction = createAction(
  ActionTypes.LOAD_BOOK_REQUEST,
  props<{ id: number }>()
);
  
export const loadBookSuccessAction = createAction(
  ActionTypes.LOAD_BOOK_SUCCESS,
  props<{ book: ResponseSuccess }>()
);
  
export const loadBookFailureAction = createAction(
  ActionTypes.LOAD_BOOK_FAILURE,
  props<{ error: ResponseErro }>()
);

////////
  
export const saveRequestAction = createAction(
  ActionTypes.SAVE_REQUEST,
  props<{ item: Comment }>()
);
  
export const saveFailureAction = createAction(
  ActionTypes.SAVE_FAILURE,
  props<{ error: ResponseErro }>()
);
  
export const saveSuccessAction = createAction(
  ActionTypes.SAVE_SUCCESS,
  props<{ item: ResponseSuccess }>()
);
  
/// detail

export const detailNotificationAction = createAction(
  ActionTypes.DETAIL_NOTIFICATION,
  props<{ item: Comment }>()
);

///

export const updateNotificationAction = createAction(
  ActionTypes.UPDATE_NOTIFICATION,
  props<{ item: Comment }>()
);
  
export const updateRequestAction = createAction(
  ActionTypes.UPDATE_REQUEST,
  props<{ item: Comment }>()
);
  
export const updateFailureAction = createAction(
  ActionTypes.UPDATE_FAILURE,
  props<{ error: ResponseErro }>()
);
  
export const updateSuccessAction = createAction(
  ActionTypes.UPDATE_SUCCESS,
  props<{ item: ResponseSuccess }>()
);
    
////
  
export const deleteRequestAction = createAction(
  ActionTypes.DELETE_REQUEST,
  props<{ item: Comment }>()
);
  
export const deleteFailureAction = createAction(
  ActionTypes.DELETE_FAILURE,
  props<{ error: ResponseErro }>()
);
    
export const deleteSuccessAction = createAction(
  ActionTypes.DELETE_SUCCESS,
  props<{ item: ResponseSuccess }>()
);