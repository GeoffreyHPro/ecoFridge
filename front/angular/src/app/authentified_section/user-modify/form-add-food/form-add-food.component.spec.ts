import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddFoodComponent } from './form-add-food.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from '../../../services/food.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormAddFoodComponent', () => {
  let component: FormAddFoodComponent;
  let fixture: ComponentFixture<FormAddFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddFoodComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [FoodService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormAddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
