import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartManipulationsService } from '../cart-manipulations.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  delivery = 'delivery';
  payment = 'card';
  name: string;
  phone: string;
  totalNumber: number;
  cartLength: number;
  modifyedNumber: number;


  // initial state
  constructor(private svc: CartManipulationsService){}

  setTotalNumber($event: number) {
    this.totalNumber = $event;
    this.modifyedNumber = this.totalNumber - Math.round((this.totalNumber * 15) / 100);
  }

  isEmpty($event:any) {
    this.cartLength = $event
  }

  // Posts
  posts = [
    {
      name: 'Нова Пошта',
      adresses: ['Городоцька 45', 'Героїв УПА 111', 'Проспект Свободи 51А']
    },
    {
      name: 'Укр Пошта',
      adresses: ['Новознесінська 6', 'Івана Франка 77']
    },
    {
      name: 'Поштомат',
      adresses: ['Люблінська 78', 'Грюнвальська 5', 'Залізнична 44']
    }
  ];
  postAdresses = [];
  selectedPost: any;
  selectedPostAdress: string;
  changePost() {
    this.postAdresses = this.selectedPost.adresses;
  }

  // PickUp
  selectedPickup: any;
  pickUp = [
    {
      name: 'Маєра Балабана 15',
    },
    {
      name: 'Івана Франка 20',
    },
    {
      name: 'Городоцька 138',
    }
  ]

  // Validations

  validatePhone($event: any, fromValidator = false) {
    let res = this.phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    if (fromValidator) {
      return res;
    } else {
      if (!res) $event.currentTarget.classList.add('cartPage__input_wrong')
      else $event.currentTarget.classList.remove('cartPage__input_wrong')
      return res;
    }

  }

  validateData() {
    if (this.validatePhone(null, true) &&
      ((this.delivery == 'delivery' && (this.selectedPost && this.selectedPostAdress)) ||
        (this.delivery == 'pickup' && this.selectedPickup)) &&
      this.name) {
        return true;
    } else {
      return false
    }
  }

  sendOrder() {
    if(this.validateData()){
      alert("Ваше замовлення успішно надіслане")
      this.svc.deleteAllProducts()
    } else {
      alert("Будь ласка, заповніть усі поля")
    }
  }

}
