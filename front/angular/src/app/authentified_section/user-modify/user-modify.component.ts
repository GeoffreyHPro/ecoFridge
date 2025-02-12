import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../responses/FoodInterface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrl: './user-modify.component.css'
})
export class UserModifyComponent {
  imageUrl!: any;
  food: Food = { idFood: 0, bareCode: "####", description: "", image: "", name: "", safeImageURL: "" };
  barCode: string = "";
  errorMessage: string = "";

  constructor(
    private foodService: FoodService) {
  }

  searchFood() {
    this.foodService.getFoodWithBarCode(this.barCode).subscribe(
      response => {
        this.food = response;
        this.errorMessage = "";
      },
      error => {
        this.food.idFood = 0;
        this.errorMessage = "The food is not found";
      }
    );
  }
}