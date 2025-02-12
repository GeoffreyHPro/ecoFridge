import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddFoodbatchComponent } from './form-add-foodbatch.component';

describe('FormAddFoodbatchComponent', () => {
  let component: FormAddFoodbatchComponent;
  let fixture: ComponentFixture<FormAddFoodbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddFoodbatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddFoodbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
