import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFoodBatches } from '../responses/DataFoodBatchesInterface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FoodBatchesService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getExpiredFoodBatches(): Observable<DataFoodBatches> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<DataFoodBatches>(`${this.baseUrl}/foodbatch/expired`, { headers });
  }

  getSoonExpiredFoodBatches(): Observable<DataFoodBatches> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<DataFoodBatches>(`${this.baseUrl}/foodbatch/soonExpired`, { headers });
  }

  addFoodBatch(bareCode: string, quantity: Number, expirationDate: string): Observable<any> {
    const token = localStorage.getItem("Token")!
    const bodyUser = { quantity: quantity, expirationDate: expirationDate }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(`${this.baseUrl}/foodbatch/${bareCode}`, bodyUser, { headers, observe: "response" });
  }
}
