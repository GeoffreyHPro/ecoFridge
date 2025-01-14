import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FoodService } from '../../services/food.service';
import { Food } from '../../responses/FoodInterface';

@Component({
  selector: 'app-user-myfridge',
  templateUrl: './user-myfridge.component.html',
  styleUrl: './user-myfridge.component.css'
})
export class UserMyfridgeComponent {
  food: Food[] = [];
  imageUrl: string = '../../assets/pomme.jpg';

  constructor(
    private foodService: FoodService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.foodService.getFood().subscribe(
      response => {
        this.food = response.data;
        console.log(response)

        this.food.forEach((element) => {
          this.foodService.getImage(element.image).subscribe((blob) => {
            const objectUrl = URL.createObjectURL(blob);
            element.safeImageURL = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
          })
        });
      },
      error => {
        console.error('error in food request :', error);
      }
    )
  }

  onFridgeItemClick() {
    alert("feature arrive")
  }
}
