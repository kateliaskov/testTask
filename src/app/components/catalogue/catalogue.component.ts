import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss', './loadingAnimation.scss']
})
export class CatalogueComponent {
  response: any;
  categoryId: number = 1;
  maxLoadedProducts = 10;

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

    this.response = false;
    this.maxLoadedProducts = 10;
    this.categoryId = categoryId;
    this.getProducts();
  }

  showFilters(catalogueHeader: Element) {
    catalogueHeader.classList.toggle("catalogue__header_filtersOn")
  }

  loadMore() {
    this.maxLoadedProducts += 10;
    this.getProducts();
  }

  getProducts() {
    this.http.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${this.categoryId}&offset=0&limit=${this.maxLoadedProducts}`)
      .subscribe((response2) => {
        console.log(response2)
        this.response = response2
        this.response.map((el: any) => {
          if (!el.images[0].endsWith('jpeg')) {
            el.images = [`../../../assets/images/${el.category.name}-placeholder.webp`]
          }
        })
      });
  }
}
