import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }


  login(username: string, password: string): Observable<any> {
    const bodyUser = { email: username, password: password }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'  // Spécifie que le contenu est en JSON
    });

    return this.http.post("http://localhost:8080/auth/signIn", bodyUser, { headers, observe: "response" });


    /*if (username == resp.username) {
      this.appState.setAuthState({
        username: username,
        roles: "USER"
      });
      return true
    } else {
      return false
    }*/
  }
}
