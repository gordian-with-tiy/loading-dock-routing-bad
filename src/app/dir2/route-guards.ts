import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RouteGuards implements CanActivate {
  static haha: boolean;

  constructor() {
    RouteGuards.haha = false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return RouteGuards.haha = !RouteGuards.haha;
  }

}
