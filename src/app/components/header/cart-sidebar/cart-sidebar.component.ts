import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.scss'
})
export class CartSidebarComponent {
  cart: any[] = [];
  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.store.select('cart').subscribe(res => {
      this.cart = res.cart
    })
  }

}
