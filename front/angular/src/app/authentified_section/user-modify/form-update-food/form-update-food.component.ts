import { Component, Input } from '@angular/core';
import { Food } from '../../../responses/FoodInterface';
import { FoodService } from '../../../services/food.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-form-update-food',
  templateUrl: './form-update-food.component.html',
  styleUrl: './form-update-food.component.css'
})
export class FormUpdateFoodComponent {
  @Input() food: Food = { idFood: 0, bareCode: "####", description: "", image: "", name: "", safeImageURL: "" };
  imageUrl: any;
  fileName: string = "None file";
  errorMessage: string = "";

  constructor(
    private foodService: FoodService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void { }

  ngOnChanges() {
    this.searchFood();
  }

  changedImage(event: any): void {
    const file = event?.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.fileName = file.name;
        console.log(this.fileName);
      };
      reader.readAsDataURL(file);
    }
  }

  searchFood() {
    this.foodService.getImage(this.food.image).subscribe((blob) => {
      const objectUrl = URL.createObjectURL(blob);
      this.food.safeImageURL = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
      this.imageUrl = this.food.safeImageURL;
    })
  }

  updateFoodInformations() {
    this.updateImageFood();
    this.updateFood();
  }

  updateImageFood() {
    if (this.fileName !== "None file") {
      const file = this.base64ToFile(this.imageUrl, "image.png");
      this.foodService.updateImageFood(this.food.bareCode, file).subscribe(
        response => {
          console.log(response);
        }, error => {
          console.log(error);
        }
      )
    }
  }

  updateFood() {
    this.foodService.updateFood(this.food.bareCode, this.food.name, this.food.description).subscribe(
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
