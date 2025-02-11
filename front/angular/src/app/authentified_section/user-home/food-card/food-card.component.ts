import { Component, Input } from '@angular/core';
import { FoodBatch } from '../../../responses/FoodBatchInterface';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent {
  @Input() foodBatch!: FoodBatch;

  constructor() {
  }
}
