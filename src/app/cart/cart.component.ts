import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
