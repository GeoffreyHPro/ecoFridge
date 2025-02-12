import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodCarrousselComponent } from './food-carroussel.component';
import { By } from '@angular/platform-browser';
import { FoodCardComponent } from '../food-card/food-card.component';
import { Food } from '../../../responses/FoodInterface';
import { FoodBatch } from '../../../responses/FoodBatchInterface';

describe('FoodCarrousselComponent', () => {
  let component: FoodCarrousselComponent;
  let fixture: ComponentFixture<FoodCarrousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodCarrousselComponent, FoodCardComponent]
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
  });

  it('should have food card', () => {
    component.listFoodbatches = [
      {
        expirationDate: "fegfer",
        food: {
          bareCode: "0101",
          description: "example",
          idFood: 1,
          image: "http://example.com",
          name: "example",
          safeImageURL: "http://example.com"
        },
        idFoodBatch: 1,
        quantity: 1,
        safeImageURL: "http://example.com"
      }];
    fixture.detectChanges();

    const child = fixture.nativeElement;
    const childElement = child.querySelector('app-food-card');

    expect(childElement).toBeTruthy();
  });
});