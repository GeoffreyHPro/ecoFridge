import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, LoginComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [AuthService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();

    const h1Element = fixture.debugElement.nativeElement.querySelector('h1');
  });

  it('login form is here', () => {
    const loginElement = fixture.debugElement.query(By.css('app-login'));
    expect(loginElement).toBeTruthy();

  });

  it('login form with mail section, password section and button to submit', () => {
    const loginForm = fixture.debugElement.query(By.css('app-login form'));
    const mailInput = loginForm.query(By.css('input[formControlName="mail"]'));
    const passwordInput = loginForm.query(By.css('input[formControlName="password"]'));
    const submitButton = loginForm.query(By.css('button'));

    expect(mailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  it('change inputs in form sections', () => {
    const loginForm = fixture.debugElement.query(By.css('app-login form')).nativeElement;
    const mailInput = loginForm.querySelector('input[formControlName="mail"]');
    const passwordInput = loginForm.querySelector('input[formControlName="password"]');
    const submitButton = loginForm.querySelector('button');

    expect(mailInput.value).toBe('');
    expect(passwordInput.value).toBe('');

    mailInput.value = 'testMail';
    passwordInput.value = 'testPassword';
    mailInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(mailInput.value).toBe('testMail');
    expect(passwordInput.value).toBe('testPassword');

    submitButton.click();

  });
});
