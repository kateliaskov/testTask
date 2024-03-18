import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrl: './similar.component.scss'
})
export class SimilarComponent {
  @Input() productCategory: any;
  @Output() nweProductRoute = new EventEmitter<number>();
  similarProducts: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.http.get(`https://dummyjson.com/products/category/${this.productCategory.category}?limit=5&skip=0`)
      .subscribe((response: any) => {
        this.similarProducts = response.products.filter((product: any) => product.id !== this.productCategory.productId);
    });
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.nweProductRoute.emit(productId)
    });
  }

}
