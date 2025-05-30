import { Component } from '@angular/core';
import { UserCartComponent } from '../user-cart/user-cart.component';
import { EmailvalidatorDirective } from '../directives/emailvalidator.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import usersDataJson from './users.json';


@Component({
  selector: 'app-home',
  imports: [UserCartComponent,EmailvalidatorDirective,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  emailInput: string = "";
  invalidEmail: string = "";
  errorMessage: string = "";

  usersData: user[] = usersDataJson;
  orginalCopy: user[] = this.usersData;

  searchByEmail(searchInput: string): void{
    this.errorMessage = "";
    this.emailInput = searchInput;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(searchInput)) {
      this.usersData = this.orginalCopy;
      return;
    }
    let foundResults = this.orginalCopy.filter((userData) => {
      return userData.email.toLowerCase() === searchInput.toLowerCase();
    });
    if (foundResults.length > 0) {
      this.usersData = foundResults;
    } else {
      this.errorMessage = `No results for ${searchInput} Try again!`;
    }
  }

}

interface user{
  id: number,
  username: string,
  email: string,
  isValid: boolean,
}
