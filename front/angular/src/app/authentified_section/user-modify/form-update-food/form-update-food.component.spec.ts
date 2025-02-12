import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateFoodComponent } from './form-update-food.component';

describe('FormUpdateFoodComponent', () => {
  let component: FormUpdateFoodComponent;
  let fixture: ComponentFixture<FormUpdateFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormUpdateFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpdateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
