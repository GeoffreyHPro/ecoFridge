import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodService } from '../../services/food.service';
import { FoodBatchesService } from '../../services/food-batches.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupMessageComponent } from '../../utils/popup-message/popup-message.component';

@Component({
  selector: 'app-post-food',
  templateUrl: './post-food.component.html',
  styleUrl: './post-food.component.css'
})
export class PostFoodComponent {
  formAddFood!: FormGroup;
  formAddFoodBatch!: FormGroup;
  messageError: string = "";

  constructor(
    private fb: FormBuilder,
    private foodService: FoodService,
    private foodBatchService: FoodBatchesService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.formAddFood = this.fb.group({
      foodBarcode: this.fb.control(""),
      foodName: this.fb.control(""),
      foodDescription: this.fb.control("")
    })

    this.formAddFoodBatch = this.fb.group({
      foodBarcode: this.fb.control(""),
      expirationDate: this.fb.control(""),
      foodQuantity: this.fb.control(0)
    })
  }

  handleAddFood() {
    this.foodService.addFood(this.formAddFood.value.foodBarcode).subscribe(
      response => {
        //this.showMessage("Add food", "The food given is correctly added");
      }, error => {
        if (error.status == 409) {
          this.messageError = "The food with this bar code is already created";
        }
      }
    )
  }

  handleAddFoodBatch() {
    this.foodBatchService.addFoodBatch(this.formAddFoodBatch.value.foodBarcode,
      this.formAddFoodBatch.value.foodQuantity, this.formAddFoodBatch.value.expirationDate + "T00:00:00").subscribe(
        response => {
          console.log(response)
        }, error => {
          console.log(error)
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

    /*setTimeout(() => {
      dialogRef.close();
    }, 3000);*/
  }

}
