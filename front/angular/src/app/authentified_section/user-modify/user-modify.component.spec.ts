import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModifyComponent } from './user-modify.component';
import { FoodService } from '../../services/food.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

describe('UserModifyComponent', () => {
  let component: UserModifyComponent;
  let fixture: ComponentFixture<UserModifyComponent>;
  let foodService: FoodService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserModifyComponent, NavbarComponent],
      providers: [FoodService],
      imports: [HttpClientTestingModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserModifyComponent);
    component = fixture.componentInstance;
    foodService = TestBed.inject(FoodService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have searchbar', () => {
    const element = fixture.nativeElement.querySelector('.search');
    expect(element).toBeTruthy()
  });
});
