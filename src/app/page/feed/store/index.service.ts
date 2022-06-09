import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { Comment, ResponseSuccess  } from '@app/core/interfaces/index'
import { environment } from '@env/environment';

const API = environment.api_nestjs_setup

@Injectable()
export class Service {
 
    constructor(private http: HttpClient) {}

    getBookByUserId(id:number){
        return this.http.get<ResponseSuccess[]>(API+`/v1/public/comment/list-by-user-id/${id}?limit=100&order=desc`).pipe(map(result=>result))
    }
 
    saveBook(book:Comment) {
        const {user_id, ...result} = book
        return this.http.post<ResponseSuccess>(API+`/v1/public/comment/create-new-comment-by-user-id/${book.user_id}`, result).pipe(map(result=>result))
    }
 
    updateBook(book:Comment) {
        const {user_id, id, ...result} = book
        return this.http.put<ResponseSuccess>(API+`/v1/public/comment/${book.id}/user/${book.user_id}`, result).pipe(map(result=>result))
    }
 
    deleteBook(comment:Comment) {
        return this.http.delete<ResponseSuccess>(API+`/v1/public/comment/${comment.id}/user/${comment.user_id}`).pipe(map(result=>result))
    } 
}