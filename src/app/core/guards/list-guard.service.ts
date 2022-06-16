import { Injectable } from '@angular/core'
import { CanLoad } from '@angular/router'


@Injectable()
export class ListGuard implements CanLoad {

  constructor() {}

  canLoad() {
    return false
  }

}