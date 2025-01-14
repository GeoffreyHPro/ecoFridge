import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class authorizationGuard implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    if (localStorage.getItem("Role") == "USER") {
      return true;
    }
    this.router.navigateByUrl('home');
    return false;
  }
};