import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cartList } from '../models/Cart';
import { counter, Product } from '../models/Product';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart = new EventEmitter<Product>();
  ProductAmount: number[] = counter;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      option: 0,
    };
  }

  ngOnInit(): void {}
  addProduct(product: Product, amount: string) {
    product.option = parseInt(amount);
    this.addToCart.emit(this.product);
    console.log(product);
  }
}
