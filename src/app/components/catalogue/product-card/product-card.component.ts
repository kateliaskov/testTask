import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from '../../../store/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any;
  rating: number;

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.rating = Math.round(this.product.rating)
  }

  addToCart() {
    this.store.dispatch(addToCart({item: this.product}));
  }
}
