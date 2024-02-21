import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { cartList } from '../models/Cart';
import { ProductService } from '../Services/product.service';
import { CartService } from '../Services/cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from '../Services/confirmation.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: cartList[] = [];
  totalPrice: number = 0;
  Total: string = '';
  name!: string;

  myform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    card: new FormControl([
      Validators.required,
      Validators.min(0),
      Validators.max(9999999999999999),
    ]),
  });
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private confirmationService: ConfirmationService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.getTotal();
    console.log(cartList);
  }
  getAmountValue(id: number, event: any) {
    const amountValue = parseInt(event.target.value);
    const productIndex = this.cartList.findIndex(
      (product) => +product.id === id
    );
    if (this.cartList.length > 0) {
      this.cartList[productIndex].option = amountValue;
    }
    if (amountValue === 0) {
      this.deleteItem(+this.cartList[productIndex].id);
    }
    this.getTotal();
  }

  deleteItem(id: number) {
    const productIndex = this.cartList.findIndex(
      (product) => +product.id === id
    );
    this.cartList.splice(productIndex, 1);
    confirm('Do you want to delete this item?');
    return this.cartList;
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.cartList = [];
    alert('Cart Cleared!');
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      this.cartList[i].option = this.cartList[i].option;
      if (this.cartList[i].price) {
        total += this.cartList[i].price * this.cartList[i].option;
        this.totalPrice = total;
      }
    }
    return total;
  }
  onSubmit(customerName: string, totalPrice: number): void {
    if (this.myform.invalid) {
      return;
    } else {
      this.cartService.clearCart();
      const parameters = { name: customerName, price: totalPrice };
      this.confirmationService.addToConfirmation(parameters);
      console.log(parameters);
      this.route.navigate(['confirmation']);
    }
  }
  validateName(name: string) {
    console.log(name);
  }
}
