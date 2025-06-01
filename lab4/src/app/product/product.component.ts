import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product!: SingleProduct;
  currentProduct!: string | null;
  constructor(private routes: ActivatedRoute, private api:ApiService, private auth:AuthService) {
  }
  ngOnInit() {
    this.routes.paramMap.subscribe(param => {
      this.currentProduct = param.get("id");
      this.api.getProduct(this.currentProduct).subscribe({
        next: (value: SingleProduct) => this.product = value,
        error: (err) => console.error('Error:', err)
      });
    });
  }


  cartmessage: string = "";

  addToCart() {
    this.cartmessage = "";
    let current: number = Number(localStorage.getItem("products")) || 0;
    current++;
    localStorage.setItem("products", String(current));
    this.auth.products = current;
    setTimeout(() => {
      this.cartmessage = "1 Product has been added to your cart!";
    }, 50);
  }
}


interface SingleProduct {
  data: Product
}

interface Product {
  sold: number;
  images: string[];
  subCategory: object[];
  ratingsQuantity: number;
  _id: string,
  price: number,
  title: string,
  ratingsAverage: number,
}