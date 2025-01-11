import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { formatEmail, formatPassword } from '../../utils/form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  formSignup!: FormGroup
  signUpEmailError = "";
  signUpPasswordError = "";

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
    let mail = this.formSignup.value.mail;
    let password = this.formSignup.value.password;

    //forms validators
    let emailValidationResult = formatEmail(mail);
    let passwordValidationResult = formatPassword(password);

    if (emailValidationResult + passwordValidationResult == "") {
      this.signUpEmailError = "";
      this.signUpPasswordError = "";

      this.authservice.signUp(mail, password).subscribe(
        response => {
          let resp = response;
          console.log(resp);
          if (response.status == 200) {
            this.router.navigateByUrl("home");
          }
        },
        error => {
          console.log(error);
        }
      )

    } else {
      this.signUpEmailError = emailValidationResult;
      this.signUpPasswordError = passwordValidationResult;
    }
  }
}
