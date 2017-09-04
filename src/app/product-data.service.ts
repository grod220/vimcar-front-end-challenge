import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

const mockData = [
  {name: 'Cool blue', price: 249, imagePath: '../assets/h38ss-dtbl-sel-201603@2x.png'},
  {name: 'Earth Brown', price: 329, imagePath: '../assets/h38ss-dtgr-sel-201603@2x.png'},
  {name: 'Hot Red', price: 259, imagePath: '../assets/h38ss-dtrd-sel-201603@2x.png'},
  {name: 'Dark Black', price: 199, imagePath: '../assets/h42ss-stbk-sel-201603@2x.png'},
  {name: 'Beach Sand', price: 199, imagePath: '../assets/s42gd-nsgb-sel-201603@2x.png'},
  {name: 'Purple Shell', price: 299, imagePath: '../assets/s42rg-nsdb-sel-201603@2x.png'},
  {name: 'Pure Metal', price: 249, imagePath: '../assets/s42sg-nsbk-sel-201603@2x.png'},
  {name: 'Aqua Teal', price: 199, imagePath: '../assets/s42si-nssb-sel-201603@2x.png'},
];

const shoppingCartHolder = [];

@Injectable()
export class ProductDataService {

  shoppingCart = new Subject<Array<object>>();
  shoppingCart$ = this.shoppingCart.asObservable();

  getProducts() {
    return mockData;
  }

  addProduct(productObj) {
    shoppingCartHolder.push(productObj);
    this.shoppingCart.next(shoppingCartHolder);
  }
  getShoppingCount() {
    return shoppingCartHolder.length;
  }
  removeProduct(index) {
    shoppingCartHolder.splice(index,1);
    this.shoppingCart.next(shoppingCartHolder);
  }
}
