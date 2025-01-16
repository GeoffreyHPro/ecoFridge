import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../responses/DataInterface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getFood(): Observable<Data> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Data>(`${this.baseUrl}/food`, { headers });
  }

  getImage(filename: String): Observable<Blob> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.baseUrl}/image/${filename}`, { headers, responseType: 'blob' });
  }

  addFood(bareCode: string): Observable<any> {
    const token = localStorage.getItem("Token")!

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(`${this.baseUrl}/food/${bareCode}`, null, { headers });
  }
}
