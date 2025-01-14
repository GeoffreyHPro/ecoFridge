import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataFoodBatches } from '../responses/DataFoodBatchesInterface';

@Injectable({
  providedIn: 'root'
})
export class FoodBatchesService {

  constructor(private http: HttpClient) { }

  getFoodBatches(): Observable<DataFoodBatches> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` 
    });

    return this.http.get<DataFoodBatches>("http://localhost:8080/foodbatch", { headers });
  }
}
