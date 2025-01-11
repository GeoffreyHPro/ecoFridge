import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { StateService } from '../../services/state.service';
import { formatEmail, formatPassword } from '../../utils/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin!: FormGroup
  signInEmailError = "";
  signInPasswordError = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthService,
    private appState: StateService) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      mail: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  handleLogin() {
    let mail = this.formLogin.value.mail;
    let password = this.formLogin.value.password;

    //forms validators
    let emailValidationResult = formatEmail(mail);
    let passwordValidationResult = formatPassword(password);

    if (emailValidationResult + passwordValidationResult == "") {
      this.authservice.login(mail, password).subscribe(
        response => {
          let resp = response;

          if (response.status == 200) {
            this.appState.setAuthState({
              token: response.token,
              roles: "USER"
            });

            localStorage.setItem("Roles", "USER");
            localStorage.setItem("Token", response.body.token);
            this.router.navigateByUrl('user/user-home');

          } else {
            this.signInEmailError = "wrong authentication"
          }
        },
        error => {
          console.error('Erreur lors de la récupération des données :', error);
        }
      );
    } else {
      this.signInEmailError = emailValidationResult;
      this.signInPasswordError = passwordValidationResult;
    }

  }

  signUpRedirection(){
    this.router.navigateByUrl('signup');
  }
}
