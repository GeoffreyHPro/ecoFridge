import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../responses/DataInterface';
import { environment } from '../../environments/environments';
import { Food } from '../responses/FoodInterface';

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

  getFoodWithBarCode(barCode: string): Observable<Food> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Food>(`${this.baseUrl}/food/${barCode}`, { headers });
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

  updateFood(bareCode: string, name: string, description: string): Observable<any> {
    const token = localStorage.getItem("Token")!
    const bodyJSON = { name: name, description: description }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.put(`${this.baseUrl}/food/${bareCode}`, bodyJSON, { headers });
  }

  updateImageFood(bareCode: string, file: File): Observable<any> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const formData = new FormData();
    formData.append('file', file);
    formData.append('bareCode', bareCode)

    return this.http.post(`${this.baseUrl}/image/upload/${bareCode}`, formData, { headers });
  }
}
