import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  islogged = false;
  constructor(private auth: AuthService) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.islogged);
    if (this.islogged == true) {
      return true;
    } else {
      return false;
    }
  }
};
