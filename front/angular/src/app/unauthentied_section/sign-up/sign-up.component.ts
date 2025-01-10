import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  formLogin!: FormGroup
  signInError = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthService,) {
  }

  ngOnInit(): void {

    this.formLogin = this.fb.group({
      mail: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  handleLogin() {}
}
