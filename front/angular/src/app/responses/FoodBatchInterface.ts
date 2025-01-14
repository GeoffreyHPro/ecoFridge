import { SafeUrl } from "@angular/platform-browser";
import { Food } from "./FoodInterface";

export interface FoodBatch {
    idFoodBatch: Number;
    quantity: Number;
    expirationDate: String;
    food: Food;
    safeImageURL: SafeUrl;
}