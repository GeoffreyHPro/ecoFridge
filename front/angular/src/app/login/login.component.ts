import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin!: FormGroup
  signInError = "";

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
    this.authservice.login(mail, password).subscribe(
      response => {
        let resp = response;
        console.log('Réponse de l\'API:', resp);
        console.log(response.status)

        if (response.status == 200) {
          this.appState.setAuthState({
            token: response.token,
            roles: "USER"
          });

          localStorage.setItem("Roles", "USER");
          localStorage.setItem("token", response.token);
          this.router.navigateByUrl('user/user-home');

        } else {
          this.signInError = "wrong authentication"
        }
      },
      error => {
        console.error('Erreur lors de la récupération des données :', error);
        this.signInError = "wrong authentication"
      }
    );
  }
}
