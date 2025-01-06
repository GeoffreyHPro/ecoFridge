import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public authState : any = {
    roles: undefined,
    token : undefined
  }

  constructor() { }

  public setAuthState(state : any){
    this.authState = {...this.authState, ...state};
  }
}
