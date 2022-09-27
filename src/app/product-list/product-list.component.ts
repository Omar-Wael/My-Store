import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../models/Product';
import { cartList } from '../models/Cart';
import { ProductService } from '../Services/product.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: Subscription = new Subscription();
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subscription = this.productService.getProduct().subscribe((res) => {
      this.products = res;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  addToCart(product: Product) {
    const cartItems: cartList[] = this.cartService.getCart();
    const cartListIndex = cartItems.findIndex(
      (element) => element.id === product.id
    );
    if (cartListIndex === -1) {
      this.cartService.addToCart(product);
      // alert('Aded to Cart!');
      return cartList;
    } else {
      alert('Product is already in Cart!');
      return cartList;
    }
  }
}
