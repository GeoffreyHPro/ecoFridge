import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { formatEmail } from '../../utils/form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  formSignup!: FormGroup
  signUpError = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthService,) {
  }

  ngOnInit(): void {

    this.formSignup = this.fb.group({
      mail: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  handleSignup() {
    Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    let mail = this.formSignup.value.mail;
    let password = this.formSignup.value.password;

    if (formatEmail(mail)) {
      this.signUpError = "";
      this.authservice.signUp(mail, password).subscribe(
        response => {
          let resp = response;
          console.log(resp)
          if (response.status == 200) {
            this.router.navigateByUrl("home")
          }
        },
        error => {
          console.log("error")
        }
      )

    } else {
      this.signUpError = "email is not in right format"
    }
  }
}
