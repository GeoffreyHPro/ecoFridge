import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-user-myfridge',
  templateUrl: './user-myfridge.component.html',
  styleUrl: './user-myfridge.component.css'
})
export class UserMyfridgeComponent {
  signInError: string | undefined;
  constructor(
    private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foodService.getFood().subscribe(
      response => {
        let resp = response;
        console.log(resp[0].bareCode)
      },
      error => {
        console.error('error in food request :', error);
        this.signInError = "wrong authentication"
      }
    )
  }
}
