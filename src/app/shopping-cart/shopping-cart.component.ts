import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service'
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  shoppingCart: Array<object> = [];
  shoppingCartSub: Subscription;
  shoppingCartCount: number;
  showCart: boolean = false;

  constructor(private productDataService: ProductDataService) {
    this.shoppingCartSub = productDataService.shoppingCart$.subscribe(arr=>{
      this.shoppingCart = arr;
      this.shoppingCartCount = this.productDataService.getShoppingCount();
    })
   }

   removeIt(index) {
     this.productDataService.removeProduct(index);
     if (this.productDataService.getShoppingCount() === 0) {
       this.showCart = false;
     }
   }
}
