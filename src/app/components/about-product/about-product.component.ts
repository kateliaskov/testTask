import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrl: './about-product.component.scss'
})
export class AboutProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productId = 0;
  product: any;

  constructor(private http: HttpClient) {
    this.productId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit() {
    this.http.get(`https://api.escuelajs.co/api/v1/products/${this.productId}`)
    .subscribe((response)=>{
      this.product = response;
      if (!this.product.images[0].endsWith('jpeg')) {
        this.product.images = [`../../../assets/images/${this.product.category.name}-placeholder.webp`]
      }
    })
  }
}
