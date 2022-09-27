import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { cartList } from '../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: cartList[] = [];
  constructor() {}
  getCart() {
    return this.cartList;
  }

  addToCart(product: Product) {
    this.cartList.push(product);
    alert('Added to Cart!');
    return this.cartList;
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }
}
