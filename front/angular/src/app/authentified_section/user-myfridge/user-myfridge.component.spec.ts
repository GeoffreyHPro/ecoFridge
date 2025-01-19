import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMyfridgeComponent } from './user-myfridge.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { FoodService } from '../../services/food.service';
import { Data } from '../../responses/DataInterface';
import { Food } from '../../responses/FoodInterface';

describe('UserMyfridgeComponent', () => {
  let component: UserMyfridgeComponent;
  let fixture: ComponentFixture<UserMyfridgeComponent>;
  let foodService: FoodService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserMyfridgeComponent, NavbarComponent],
      providers: [FoodService],
      imports: [HttpClientTestingModule]
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

  it('should fetch data using FoodService', () => {
    const food: Food = { 'idFood': 0, 'image': 'default.png', 'bareCode': "001", 'safeImageURL': '', description: "", name: "" }
    let FoodArray = [
      food
    ]
    const dataResponse: Data = { data: FoodArray };

    spyOn(foodService, "getFood").and.returnValue(of(dataResponse));
    component.ngOnInit();

    expect(component.food).toBe(FoodArray);
    expect(foodService.getFood).toHaveBeenCalled();
  });

  it('should have a div for fridge', () => {
    const element = fixture.nativeElement.querySelector('#fridge');
    expect(element).toBeTruthy();
  });

});
