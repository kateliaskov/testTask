import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss', './loadingAnimation.scss']
})
export class CatalogueComponent {
  allProducts: any;
  activeProducts: any;
  category: String = '';
  maxLoadedProducts = 20;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  changeTab(categoryId: any, catalogueNav: Element, newTab: any) {
    Array.from(catalogueNav.children).map((el: Element) => {
      el != newTab.currentTarget ? el.classList.remove("catalogue__link_active") :
        newTab.currentTarget.classList.add("catalogue__link_active")
    })

    this.allProducts = false;
    this.maxLoadedProducts = 10;
    this.category = categoryId;
    this.getProducts();
  }

  showFilters(catalogueHeader: Element) {
    catalogueHeader.classList.toggle("catalogue__header_filtersOn")
  }

  filterProducts($event: any) {
    this.activeProducts = $event;
  }

  loadMore() {
    this.maxLoadedProducts += 10;
    this.getProducts();
  }

  getProducts() {
    this.http.get(`https://dummyjson.com/products/${this.category}?limit=${this.maxLoadedProducts}&skip=0`)
      .subscribe((response: any) => {
        this.allProducts = response.products
        this.activeProducts = response.products
      });
  }
}
