import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiLink = "https://ecommerce.routemisr.com";
  constructor(private http: HttpClient) { }

  getAllProducts(page: number): Observable<ProductsResponse>{
    return this.http.get<ProductsResponse>(`${this.apiLink}/api/v1/products?page=${page}`);
  }

  getProduct(_id: string| null): Observable<SingleProduct> {
    return this.http.get<SingleProduct>(`${this.apiLink}/api/v1/products/${_id}`)
  }
}


interface SingleProduct {
  data: Product
}

interface ProductsResponse {
  results: number;
  metadata: object;
  data: Product[];
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