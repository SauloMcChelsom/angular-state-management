import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from '@env/environment';

import { map } from 'rxjs/operators';
import { LocalStorageTokenUtils } from '@app/core/utils/local-storege-token.utils'
import { LocalStorageUserUtils } from '@app/core/utils/local-storege-user.utils'

const API = environment.api_nestjs_setup

@Injectable()
export class AuthService {

	private localStorageToken = new LocalStorageTokenUtils()

	private localStorageUser = new LocalStorageUserUtils()

	private redirectUrl: string | undefined = '/';

	private loginUrl: string = '/login';

	private isloggedIn: boolean = false;

	constructor(private http: HttpClient) {}

	public isValidToken(refresh_token:string){
		const body = {
			refresh_token:refresh_token,
		}
	    return this.http.post(API+`/v1/private/auth/valid-token`, body).pipe(map(result=>result))
    }

	public getUser(){
	    return this.http.get(API+`/v1/private/user/find-by-acess-token`).pipe(map(result=>result))
    }

	/**
	 * sair do usuário
	 */
	public logoutUser(): void {
		this.isloggedIn = false;
	}

	
	/**
	 * obter usuário logado
	 */
	public getUserLoggedIn() {
		return this.isloggedIn
	}

	/**
	 * definir usuário logado
	 */
	public setUserLoggedIn() {
		this.isloggedIn = true
	}

	/**
	 * obter URL de redirecionamento
	 */
	public getRedirectUrl(): string | undefined {
		return this.redirectUrl;
	}

	/** 
	 * definir URL de redirecionamento
	 */
	public setRedirectUrl(url: string | undefined): void {
		this.redirectUrl = url;
	}

	/**
	 *  obter URL de login
	 */
	public getLoginUrl(): string {
		return this.loginUrl;
	}

	/**
	 * obter usuário logado
	 */
	public getLoggedInUser(){
		this.localStorageUser.getItem()
	}

	/**
	 * o usuário está logado
	 */
	public async isUserLoggedIn():Promise<boolean>{
		if(!this.localStorageToken.isItem()){
		  return false
		}
		const item = this.localStorageToken.getItem()
		let valid = await this.isValidToken(item.refresh_token.token).toPromise().then((res:any) => {
			this.setUserLoggedIn()
			if(res.code){
				return true
			}
			return false
		})

		return valid
	}
}