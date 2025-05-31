import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-store',
  imports: [CommonModule,RouterModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  page: number = 1;
  products!: productsResponse;

  constructor(private api: ApiService) { }
  ngOnInit() {
    this.api.getAllProducts(this.page).subscribe({
      next: (value: productsResponse) => this.products = value,
      error: (err) => console.error('Error:', err)
    });
  }

  getStarRating(rating: number): string {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
  
    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="fas fa-star"></i>';
    }
  
    if (hasHalfStar) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    }
  
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="far fa-star"></i>';
    }
  
    return stars;
  }
}


interface productsResponse {
  results: number,
  metadata: object,
  data: Product[]
}

interface Product {
  sold: number,
  images: string[],
  subCategory: object[],
  ratingsQuantity: number,
  _id: string,
  price: number,
  title: string,
  ratingsAverage: number,
}