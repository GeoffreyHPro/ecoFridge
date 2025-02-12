import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostFoodComponent } from './post-food.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FoodService } from '../../services/food.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAddFoodbatchComponent } from './form-add-foodbatch/form-add-foodbatch.component';

describe('PostFoodComponent', () => {
  let component: PostFoodComponent;
  let fixture: ComponentFixture<PostFoodComponent>;
  let foodService: FoodService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFoodComponent, NavbarComponent, FormAddFoodbatchComponent],
      providers: [FoodService],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostFoodComponent);
    component = fixture.componentInstance;
    foodService = TestBed.inject(FoodService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
