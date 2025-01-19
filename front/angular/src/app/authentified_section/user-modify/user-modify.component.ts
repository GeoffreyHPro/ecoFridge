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
    private foodService: FoodService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {

  }

  changedImage(event: any): void {
    const file = event?.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  searchFood() {
    this.foodService.getFoodWithBarCode(this.barCode).subscribe(
      response => {
        this.food = response;
        this.errorMessage = "";
        this.foodService.getImage(this.food.image).subscribe((blob) => {
          const objectUrl = URL.createObjectURL(blob);
          this.food.safeImageURL = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
          this.imageUrl = this.food.safeImageURL;
        })
      },
      error => {
        this.errorMessage = "The food is not found";
      }
    );
  }
}
