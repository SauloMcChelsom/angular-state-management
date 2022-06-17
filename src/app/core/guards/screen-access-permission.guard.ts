import { Injectable } from '@angular/core'
import { CanLoad } from '@angular/router'


@Injectable()
export class ScreenAccessPermissionGuard implements CanLoad {

  constructor() {}

  canLoad() {
    return true
  }

}