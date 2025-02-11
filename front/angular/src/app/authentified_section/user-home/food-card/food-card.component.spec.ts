import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodCardComponent } from './food-card.component';
import { Food } from '../../../responses/FoodInterface';
import { FoodBatch } from '../../../responses/FoodBatchInterface';
import { By } from '@angular/platform-browser';

describe('FoodCardComponent', () => {
  let component: FoodCardComponent;
  let fixture: ComponentFixture<FoodCardComponent>;
  let food: Food;
  let foodBatch: FoodBatch;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodCardComponent],
    })
      .compileComponents();

    food = {
      bareCode: "0101",
      description: "example",
      idFood: 1,
      image: "http://example.com",
      name: "example",
      safeImageURL: "http://example.com"
    }

    foodBatch = {
      expirationDate: "fegfer",
      food: food,
      idFoodBatch: 1,
      quantity: 1,
      safeImageURL: "http://example.com"
    }

    fixture = TestBed.createComponent(FoodCardComponent);
    component = fixture.componentInstance;

    component.foodBatch = foodBatch;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const divCardBody = fixture.debugElement.query(By.css('.card-body'));
    const divCardText = fixture.debugElement.query(By.css('.card-text'));

    expect(divCardBody).toBeTruthy();
    expect(divCardText).toBeTruthy();
  });

});
