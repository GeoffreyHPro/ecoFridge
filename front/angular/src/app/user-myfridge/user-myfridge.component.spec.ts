import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyfridgeComponent } from './user-myfridge.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('UserMyfridgeComponent', () => {
  let component: UserMyfridgeComponent;
  let fixture: ComponentFixture<UserMyfridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserMyfridgeComponent, NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMyfridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
