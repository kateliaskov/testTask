import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Input() products: any;
  @Output() filterEvent = new EventEmitter<object>();
  nameValue: String = "";
  maxPrice: number;
  rangePrice: number[] = [0, 20];
  rating!: number;

  ngOnInit() {
    let maxPrice = 0;
    for (let pr of this.products) {
      maxPrice < pr.price ? maxPrice = pr.price : null;
    }
    this.rangePrice[1] = maxPrice
    this.maxPrice = maxPrice;
  }

  newFilters() {
    this.filterName()
  }

  filterName() {
    let newProducts = this.products.filter((el: any) => el.title.toLowerCase().startsWith(this.nameValue.toLowerCase()))
    this.filterPrice(newProducts);
  }

  filterPrice(filtered: any) {
    let newProducts = filtered.filter((el: any) => el.price >= this.rangePrice[0] && el.price <= this.rangePrice[1])
    this.filterRating(newProducts)
  }

  filterRating(filtered: any) {

    let newProducts = filtered;
    if (this.rating) {

      newProducts = filtered.filter((el: any) => Math.round(el.rating) == this.rating)
    }
    this.sendFilters(newProducts);
  }

  sendFilters(newProducts: any) {
    this.filterEvent.emit(newProducts)
  }
}
