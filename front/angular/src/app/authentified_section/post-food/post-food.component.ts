import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodService } from '../../services/food.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupMessageComponent } from '../../utils/popup-message/popup-message.component';

@Component({
  selector: 'app-post-food',
  templateUrl: './post-food.component.html',
  styleUrl: './post-food.component.css'
})
export class PostFoodComponent {
  formAddFood!: FormGroup;
  addFoodErrorMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private foodService: FoodService,
    private dialog: MatDialog) {
  }

  handleAddFood() {
    this.foodService.addFood(this.formAddFood.value.foodBarcode).subscribe(
      response => {
        this.showMessage("Add food", "The food given is correctly added");
        this.addFoodErrorMessage = "";
      }, error => {
        if (error.status == 409) {
          this.addFoodErrorMessage = "The food with this bar code is already created";
        }
      }
    )
  }

  showMessage(title: string, message: string) {
    const dialogRef = this.dialog.open(PopupMessageComponent, {
      data: {
        title: title,
        message: message
      }
    });

    setTimeout(() => {
      dialogRef.close();
    }, 3000);
  }
}
