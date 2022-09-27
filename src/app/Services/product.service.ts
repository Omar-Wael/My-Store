import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { cartList } from '../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  cartList: cartList[] = [];
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }
}
