import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { StateService } from '../services/state.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class authorizationGuard implements CanActivate {
  constructor(private appState: StateService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      
    localStorage.setItem("USER","USER")
    if (localStorage.getItem("USER") == "USER") {
      return true;
    }
    this.router.navigateByUrl('home');
    return false;
  }
};