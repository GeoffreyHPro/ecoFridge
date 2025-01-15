import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  login(username: string, password: string): Observable<any> {
    const bodyUser = { email: username, password: password }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseUrl}/auth/signIn`, bodyUser, { headers, observe: "response" });
  }

  signUp(username: string, password: string): Observable<any> {
    const bodyUser = { email: username, password: password }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseUrl}/auth/signUp`, bodyUser, { headers, observe: "response" });
  }
}
