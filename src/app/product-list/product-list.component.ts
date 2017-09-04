import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  allProducts: object;
  shoppingCartCount: number;

  constructor(private productDataService: ProductDataService) {
    this.allProducts = productDataService.getProducts();
  }

  logIt(obj) {
    this.productDataService.addProduct(obj);
  }
}
