import { Component } from '@angular/core';
import { FoodBatchesService } from '../services/food-batches.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  signInError: string | undefined;
  constructor(
    private foodBatchesService: FoodBatchesService){
  }

  ngOnInit(): void {
    this.foodBatchesService.getFoodBatches().subscribe(
      response => {
        let resp = response;
        console.log(resp)
      },
      error => {
        console.error('Erreur lors de la récupération des données :', error);
        this.signInError = "wrong authentication"
      }
    )
  }
}
