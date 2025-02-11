import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCarrousselComponent } from './food-carroussel.component';

describe('FoodCarrousselComponent', () => {
  let component: FoodCarrousselComponent;
  let fixture: ComponentFixture<FoodCarrousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodCarrousselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
