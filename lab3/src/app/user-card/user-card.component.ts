import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() userData: user | null = null;
}

interface user{
  id: number,
  username: string,
  email: string,
  phoneNumber: string,
  isValid: boolean,
}