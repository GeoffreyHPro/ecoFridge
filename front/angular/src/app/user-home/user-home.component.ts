import { Component } from '@angular/core';
import { FoodBatchesService } from '../services/food-batches.service';
import { FoodService } from '../services/food.service';
import { FoodBatch } from '../responses/FoodBatchInterface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  signInError: string | undefined;
  foodbatches: FoodBatch[] = [];

  constructor(
    private foodBatchesService: FoodBatchesService,
    private foodService: FoodService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.foodBatchesService.getFoodBatches().subscribe(
      response => {
        let resp = response;
        this.foodbatches = resp.data;
        console.log(resp.data)

        this.foodbatches.forEach((foodBatch) => {
          this.foodService.getImage(foodBatch.food.image).subscribe((blob) => {
            const objectUrl = URL.createObjectURL(blob);
            foodBatch.safeImageURL = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
          })
        })

      },
      error => {
        console.error('Erreur lors de la récupération des données :', error);
        this.signInError = "wrong authentication"
      }
    )
  }
}
