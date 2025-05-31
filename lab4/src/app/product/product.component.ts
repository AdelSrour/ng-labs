import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  currentProduct: string | null = null;
  constructor(private routes: ActivatedRoute) {
  }
  ngOnInit() {
    this.routes.paramMap.subscribe(param => {
      this.currentProduct =  param.get("id");
    });
  }
}
