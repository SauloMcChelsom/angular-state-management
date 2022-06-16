import { Injectable } from '@angular/core'
import { CanLoad, CanActivate } from '@angular/router'
import { Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { AuthService } from '@app/core/services/auth.service'

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route) {
    
    const url = `${window.location.pathname}/${route.path}`

    console.log('canLoad', url, this.authService.getUserLoggedIn())

    
    if (this.authService.getUserLoggedIn()) {
      return true
    }
    this.authService.setRedirectUrl(url)
    this.router.navigate([this.authService.getLoginUrl()])
    return false
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url
    if (this.authService.getUserLoggedIn()) {
      return true
    }
    this.authService.setRedirectUrl(url)
    this.router.navigate([this.authService.getLoginUrl()])
    return false
  }

  private async isUserLoggedIn(){
    return await this.authService.isUserLoggedIn()
  }

}