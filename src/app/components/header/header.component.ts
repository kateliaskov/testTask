import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cart: any[] = [];
  cartNumber: number;
  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.store.select('cart').subscribe(res => {
      this.cart = res.cart
      this.cartNumber = this.cart.length
    })
  }

  openSideBar() {
    document.getElementById("sideCart")?.classList.toggle("sideCart_active");
  }
}
