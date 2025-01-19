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
        this.food.idFood = 0;
        this.errorMessage = "The food is not found";
      }
    );
  }

  updateFoodInformations() {
    this.updateImageFood();
    this.updateFood();
  }

  updateImageFood() {
    const file = this.base64ToFile(this.imageUrl, "image.png");  //Convert Base64 into File to upload image

    this.foodService.updateImageFood(this.barCode, file).subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

  updateFood() {
    this.foodService.updateFood(this.barCode, this.food.name, this.food.description).subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }

  base64ToFile(base64Image: any, fileName: any) {
    const base64Data = base64Image.split(",")[1];
    const binaryString = atob(base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: "image/png" });
    return new File([blob], fileName, { type: "image/png" });
  }
}