import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartManipulationsService } from '../cart-manipulations.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  providers: [ConfirmationService]
})
export class CartListComponent {
  cart: any[] = [];
  pureResult: any[] = [];
  totalNumber: number;
  constructor(private store: Store<any>,
    private svc: CartManipulationsService,
    private confirmationService: ConfirmationService) {

  }

  @Output() totalPrice = new EventEmitter<number>();
  @Output() totalLength = new EventEmitter<number>();

  ngOnInit() {
    this.store.select('cart').subscribe(res => {
      this.cart = this.svc.groupProducts(res.cart)
      this.pureResult = res.cart;
      this.totalNumber = this.pureResult.reduce((total: any, item: any) => total + item.price, 0);
      this.totalPrice.emit(this.totalNumber)
      this.totalLength.emit(this.cart.length)
    })
  }


  changeNumberOfProducts(product: any, increase: boolean) {
    this.svc.changeNumberOfProducts(this.pureResult, product, increase);
  }

  confirmDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Ви впевненні що хочете очистити весь кошик?',
      header: 'Підтвердження',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.svc.deleteAllProducts();
      }
    });
  }
}
