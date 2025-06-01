import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required])
  });

  signup() {
    console.log(this.signupForm);
    
  }
}
