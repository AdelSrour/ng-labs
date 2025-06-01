import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged!: boolean;
  email!: string | null; 
  products: number | any = localStorage.getItem("products");
  constructor(private route:Router) { 
    this.email = this.getEmail();
  }

  getEmail():string | null {
    const email = localStorage.getItem("user");
    if (email) {
      return email;
    } else {
      return null;
    }
  }

  login() {
    this.logged = true;
    this.email = this.getEmail();
  }

  logout() {
    this.logged = false;
    this.email = null;
    localStorage.removeItem("user");
    this.route.navigate(['/login']);
  }
}
