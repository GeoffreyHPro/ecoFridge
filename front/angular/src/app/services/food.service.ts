import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../responses/DataInterface';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood(): Observable<Data> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Data>("http://localhost:8080/food", { headers });
  }

  getImage(filename: String): Observable<Blob> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(`http://localhost:8080/image/${filename}`, { headers, responseType: 'blob' });
  }
}
