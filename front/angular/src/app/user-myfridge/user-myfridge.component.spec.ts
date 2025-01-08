import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyfridgeComponent } from './user-myfridge.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FoodService } from '../services/food.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserMyfridgeComponent', () => {
  let component: UserMyfridgeComponent;
  let fixture: ComponentFixture<UserMyfridgeComponent>;
  let foodService: FoodService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserMyfridgeComponent, NavbarComponent],
      providers: [FoodService],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMyfridgeComponent);
    component = fixture.componentInstance;
    foodService = TestBed.inject(FoodService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
