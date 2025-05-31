import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product!: SingleProduct;
  currentProduct!: string | null;
  constructor(private routes: ActivatedRoute, private api:ApiService) {
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