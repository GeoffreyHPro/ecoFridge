import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFoodComponent } from './post-food.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('PostFoodComponent', () => {
  let component: PostFoodComponent;
  let fixture: ComponentFixture<PostFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFoodComponent, NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
