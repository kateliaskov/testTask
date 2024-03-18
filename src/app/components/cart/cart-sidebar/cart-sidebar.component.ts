import { Component, ElementRef, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartManipulationsService } from '../cart-manipulations.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.scss',
  providers: [ConfirmationService, MessageService]
})

export class CartSidebarComponent {
  cart: any[] = [];
  pureResult: any[] = [];
  totalNumber: number;
  constructor(private store: Store<any>,
    private svc: CartManipulationsService,
    private confirmationService: ConfirmationService,
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    this.store.select('cart').subscribe(res => {
      this.cart = this.svc.groupProducts(res.cart)
      this.pureResult = res.cart;
      this.totalNumber = this.pureResult.reduce((total: any, item: any) => total + item.price, 0);
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

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    let natElement = this.el.nativeElement
    let isCartIcon = target.classList.contains("header__link") || 
                    target.classList.contains("header__count")
    const clickedInside = natElement.contains(target)
    if (!clickedInside && !isCartIcon) 
      natElement.firstChild.classList.remove("sideCart_active")
  }
}
