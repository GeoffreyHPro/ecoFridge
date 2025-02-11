import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCarrousselComponent } from './food-carroussel.component';
import { By } from '@angular/platform-browser';

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
    component.listFoodbatches = [];
    component.typeListFoodBatch = "expired";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h1 with red color', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    const h1Element = h1.nativeElement;

    expect(h1).toBeTruthy();
    expect(h1Element.textContent).toContain('Food');
    expect(getComputedStyle(h1Element).color).toBe('rgb(165, 27, 27)');
  });

  it('should have p balise without element in list', () => {
    const p = fixture.debugElement.query(By.css('p'));
    const pElement = p.nativeElement;

    expect(p).toBeTruthy();
    expect(pElement.textContent).toContain('Congratulations ! None food is');
  });

  it('should have h1 with orange color', () => {
    component.typeListFoodBatch = "soon expired";
    fixture.detectChanges();
    const h1 = fixture.debugElement.query(By.css('h1'));
    const h1Element = h1.nativeElement;

    expect(h1).toBeTruthy();
    expect(h1Element.textContent).toContain('Food');
    expect(getComputedStyle(h1Element).color).toBe('rgb(255, 165, 0)');
  });
});