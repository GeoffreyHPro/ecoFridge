import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-post-food',
  templateUrl: './post-food.component.html',
  styleUrl: './post-food.component.css'
})
export class PostFoodComponent {
  formAddFood!: FormGroup;
  messageError: string = "";

  constructor(
    private fb: FormBuilder,
    private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.formAddFood = this.fb.group({
      foodBarcode: this.fb.control(""),
      foodName: this.fb.control(""),
      foodDescription: this.fb.control("")
    })
  }

  handleAddFood() {
    this.foodService.addFood(this.formAddFood.value.foodBarcode).subscribe(
      response => {
        console.log(response);
      }, error => {
        if (error.status == 409) {
          this.messageError = "The food with this bar code is already created";
        }
      }
    )
  }

}
