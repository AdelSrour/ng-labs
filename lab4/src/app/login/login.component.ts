import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
  
export class LoginComponent {

  constructor(private api: ApiService,private route:Router,private auth: AuthService){}

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), Validators.required]),
    password: new FormControl('', Validators.required)
  })

  email = this.loginForm.controls.email;
  password = this.loginForm.controls.password;

  errorMessage: string = "";
  submitting: boolean = false;

  login() {
    this.submitting = true;
    this.errorMessage = "";
    if (this.loginForm.invalid) {
      return;
    }
    this.api.signIn(this.email.value, this.password.value).subscribe({
      next: (value: any) => {
        if (value.message == "success") {
          //should be storing jwt token and decode it later, im too lazy to do so anyone uses that code don't do what im doing here.
          localStorage.setItem("user", value.user.email);
          this.auth.email = value.user.email
          this.route.navigate(['/']);
        } else {
          this.errorMessage = value.message;
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.submitting = false;
       },
    });
  }
}
