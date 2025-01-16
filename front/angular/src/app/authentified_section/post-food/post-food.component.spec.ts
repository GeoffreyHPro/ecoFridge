import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFoodComponent } from './post-food.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FoodService } from '../../services/food.service';
import { FoodBatchesService } from '../../services/food-batches.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('PostFoodComponent', () => {
  let component: PostFoodComponent;
  let fixture: ComponentFixture<PostFoodComponent>;
  let foodService: FoodService;
  let foodBatchService: FoodBatchesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFoodComponent, NavbarComponent],
      providers: [FoodBatchesService, FoodService],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostFoodComponent);
    component = fixture.componentInstance;
    foodService = TestBed.inject(FoodService);
    foodBatchService = TestBed.inject(FoodBatchesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
