import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  imports: [RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private api: ApiService, private route: Router) { }
  
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)]),
  });

  email = this.signupForm.controls.email;
  password = this.signupForm.controls.password;

  errorMessage: string = "";
  submitting: boolean = false;

  signup() {
    this.submitting = true;
    this.errorMessage = "";
    if (this.signupForm.invalid) {
      return;
    }
    this.api.signUp(this.email.value, this.password.value).subscribe({
      next: (value: any) => {
        if (value.message == "success") {
          this.route.navigate(['/login']);
        } else {
          this.errorMessage = value.message;
        }
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.submitting = false;
       },
    });
  }
}
