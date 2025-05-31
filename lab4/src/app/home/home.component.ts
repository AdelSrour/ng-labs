import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { authGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router, private auth:authGuard) {
    this.router.navigate(['/store']);
  }
  login() {
    this.auth.islogged = true;
  }

}
