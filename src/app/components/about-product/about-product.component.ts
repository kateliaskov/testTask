import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart.actions';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrl: './about-product.component.scss'
})
export class AboutProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productId = 0;
  product: any;
  rating: number;
  currentImg: String;


  constructor(private http: HttpClient, private store: Store) {
    this.productId = Number(this.route.snapshot.params['id']);
  }

  viewPhoto($event: any) {
    this.currentImg = $event.currentTarget.src;
  }

  getProduct() {
    this.http.get(`https://dummyjson.com/products/${this.productId}`)
      .subscribe((response) => {
        this.product = response;
        this.rating = Math.round(this.product.rating)
        this.currentImg = this.product.images[0]
      })
  }

  ngOnInit() {
    this.getProduct();
  }

  nweProductRoute($event: any) {
    this.productId = $event;
    this.getProduct()
    window.scrollTo(0, 0);
  }

  addToCart() {
    this.store.dispatch(addToCart({ item: this.product }));
  }
}
