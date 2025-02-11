import { Component, Input } from '@angular/core';
import { FoodBatch } from '../../../responses/FoodBatchInterface';

@Component({
  selector: 'app-food-carroussel',
  templateUrl: './food-carroussel.component.html',
  styleUrl: './food-carroussel.component.css'
})
export class FoodCarrousselComponent {
  @Input() listFoodbatches!: FoodBatch[];
  @Input() typeListFoodBatch!: string;

  constructor() {

  }
}
