import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {
  response: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getProducts(1);
  }

  changeTab(categoryId: number, catalogueNav: Element, newTab: any) {
    Array.from(catalogueNav.children).map((el: Element)=>{
      el != newTab.currentTarget ? el.classList.remove("catalogue__link_active") :
      newTab.currentTarget.classList.add("catalogue__link_active")
    })
    this.getProducts(categoryId);
  }

  getProducts(categoryId: number) {
    this.http.get('https://api.escuelajs.co/api/v1/products/?categoryId=' + categoryId)
      .subscribe((response) => {
        this.response = response;
        console.log(response);
      });
  }
}
