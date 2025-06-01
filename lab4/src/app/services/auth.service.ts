import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged!: boolean;
  email!: string | null; 
  constructor() { }

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
  }
}
