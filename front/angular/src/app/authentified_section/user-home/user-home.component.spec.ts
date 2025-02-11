import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserHomeComponent } from './user-home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FoodCarrousselComponent } from './food-carroussel/food-carroussel.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FoodService } from '../../services/food.service';
import { FoodBatchesService } from '../../services/food-batches.service';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserHomeComponent, NavbarComponent, FoodCarrousselComponent],
      imports: [HttpClientTestingModule],
      providers: [FoodService, FoodBatchesService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
