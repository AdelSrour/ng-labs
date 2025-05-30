import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  imports: [],
  templateUrl: './user-cart.component.html',
  styleUrl: './user-cart.component.scss'
})
export class UserCartComponent {
  @Input() userData: user | null = null;
}

interface user{
  id: number,
  username: string,
  email: string,
  phoneNumber: string,
  isValid: boolean,
}