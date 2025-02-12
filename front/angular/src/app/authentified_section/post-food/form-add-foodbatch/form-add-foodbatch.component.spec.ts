import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAddFoodbatchComponent } from './form-add-foodbatch.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodBatchesService } from '../../../services/food-batches.service';

describe('FormAddFoodbatchComponent', () => {
  let component: FormAddFoodbatchComponent;
  let fixture: ComponentFixture<FormAddFoodbatchComponent>;
  let foodBatchService: FoodBatchesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddFoodbatchComponent],
      providers: [FoodBatchesService],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormAddFoodbatchComponent);
    component = fixture.componentInstance;
    foodBatchService = TestBed.inject(FoodBatchesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
