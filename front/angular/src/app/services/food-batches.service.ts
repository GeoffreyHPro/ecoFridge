import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodBatchesService {

  constructor(private http: HttpClient) { }

  getFoodBatches(): Observable<any> {
    const token = localStorage.getItem("Token")!
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` 
    });

    return this.http.get("http://localhost:8080/foodbatch", { headers });
  }
}
