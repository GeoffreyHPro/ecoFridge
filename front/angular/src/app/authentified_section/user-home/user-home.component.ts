import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FoodBatch } from '../../responses/FoodBatchInterface';
import { FoodBatchesService } from '../../services/food-batches.service';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  signInError: string | undefined;
  listExpiredFoodbatches: FoodBatch[] = [];
  listSoonExpiredFoodbatches: FoodBatch[] = [];

  constructor(
    private foodBatchesService: FoodBatchesService,
    private foodService: FoodService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.foodBatchesService.getExpiredFoodBatches().subscribe(
      response => {
        let resp = response;
        this.listExpiredFoodbatches = resp.data;
        console.log(resp.data)

        this.listExpiredFoodbatches.forEach((foodBatch) => {
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

    this.foodBatchesService.getSoonExpiredFoodBatches().subscribe(
      response => {
        let resp = response;
        this.listSoonExpiredFoodbatches = resp.data;
        console.log(resp.data)

        this.listSoonExpiredFoodbatches.forEach((foodBatch) => {
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
