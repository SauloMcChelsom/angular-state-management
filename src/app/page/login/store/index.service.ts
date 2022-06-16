import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Comment, ResponseSuccess  } from '@app/core/interfaces/index'
import { environment } from '@env/environment';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const API = environment.api_nestjs_setup

@Injectable()
export class IndexService {
	
	constructor(private http: HttpClient) {}

	public signInWithEmailAndPasswordJwtLocal(email:string, password:string){
		  const headers = new HttpHeaders({
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'user_agent': window.navigator.userAgent,
			'window_screen_width': screen.width.toString(),
			'window_screen_height': screen.height.toString(),
			'window_screen_color_depth': screen.colorDepth.toString(),
			'window_screen_pixel_depth': screen.pixelDepth.toString(),
		  });

		  const body = {
			email:email,
			password:password
		  }

        return this.http.post<ResponseSuccess[]>(API+`/v1/public/auth/sign-in`, body, {headers: headers}).pipe(map(result=>result))
    }
}