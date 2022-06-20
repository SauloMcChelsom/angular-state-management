import { Injectable } from '@angular/core';
import {  HttpEvent,  HttpInterceptor,  HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LocalStorageTokenUtils } from '@app/core/utils/local-storege-token.utils';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private tokenService: LocalStorageTokenUtils) {} 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  

        const token = this.tokenService.getAuthToken()
    
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'user_agent': window.navigator.userAgent,
                    'window_screen_width': screen.width.toString(),
                    'window_screen_height': screen.height.toString(),
                    'window_screen_color_depth': screen.colorDepth.toString(),
                    'window_screen_pixel_depth': screen.pixelDepth.toString(),
                }
            });
        }
    
        return next.handle(request)
    }
}