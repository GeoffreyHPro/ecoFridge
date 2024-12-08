import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin!: FormGroup
  errorMessage = undefined;

  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService) {

  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  handleLogin() {
    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;
    if (this.authservice.login(username, password)) {
      this.router.navigateByUrl('admin')
    }else{
      alert("authentification refusée")
    }
  }
}
