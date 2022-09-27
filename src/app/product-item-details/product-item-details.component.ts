import { Component, OnInit } from '@angular/core';
import { Product, counter } from '../models/Product';
import { Route, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { CartService } from '../Services/cart.service';
import { cartList } from '../models/Cart';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent implements OnInit {
  id!: number;
  products!: Product[];
  product!: Product;
  ProductAmount: number[] = counter;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.productService.getProduct().subscribe((res) => {
      this.products = res;
      this.product = this.getProductById(this.id);
      console.log(this.product);
    });
  }
  getProductById(id: number): Product {
    return this.products.filter((product) => +product.id === id)[0];
  }
  addToCart(product: Product, amount: string) {
    product.option = parseInt(amount);
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
