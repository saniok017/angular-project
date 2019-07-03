import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }
  onSubmit() {
    // Process checkout data here
    console.warn('Your order has been submitted');

    this.items = this.cartService.clearCart();
  }

  ngOnInit() {}
}
