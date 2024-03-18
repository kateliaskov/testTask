import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { editCart } from '../../store/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartManipulationsService {

  constructor(private store: Store) {

  }

  groupProducts(products: Array<{}>) {
    if (products.length === 0) return products;
    let groupedProducts: any[] = [{ product: products[0], quantity: 1 }];
    products.forEach((product: any, index) => {
      if (index == 0) return;
      let haveSimular = false;
      groupedProducts.forEach((el) => {
        if (el.product.id == product.id) {
          el.quantity += 1;
          haveSimular = true;
        }
      })
      if (!haveSimular) groupedProducts.push({
        product: product,
        quantity: 1
      })
    })
    return groupedProducts;
  }

  changeNumberOfProducts(products: Array<{}>, product: any, increase: boolean) {
    let isDeleted: boolean = false
    let newCart: {}[] = [];
    if (increase) {
      newCart = [...products, product]
    } else {
      products.map((el: any) => {
        if (!isDeleted && el.id === product.id) {
          isDeleted = true;
        } else {
          newCart.push(el);
        }
      })
    }

    this.store.dispatch(editCart({ items: newCart }));
  }

  deleteAllProducts(){
    this.store.dispatch(editCart({ items: [] }));
  }

}
