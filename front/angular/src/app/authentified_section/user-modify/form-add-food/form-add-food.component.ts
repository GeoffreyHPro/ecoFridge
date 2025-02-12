import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodService } from '../../../services/food.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupMessageComponent } from '../../../utils/popup-message/popup-message.component';

@Component({
  selector: 'app-form-add-food',
  templateUrl: './form-add-food.component.html',
  styleUrl: './form-add-food.component.css'
})
export class FormAddFoodComponent {
  formAddFood!: FormGroup;
  addFoodErrorMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private foodService: FoodService,
    private dialog: MatDialog) {
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
