import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormUpdateFoodComponent } from './form-update-food.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FoodService } from '../../../services/food.service';
import { DomSanitizer } from '@angular/platform-browser';

describe('FormUpdateFoodComponent', () => {
  let component: FormUpdateFoodComponent;
  let fixture: ComponentFixture<FormUpdateFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormUpdateFoodComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [FoodService, DomSanitizer]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormUpdateFoodComponent);
    component = fixture.componentInstance;
    component.food = { idFood: 0, bareCode: "####", description: "", image: "", name: "", safeImageURL: "" };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
