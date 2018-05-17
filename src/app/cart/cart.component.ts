import { Component, OnInit } from '@angular/core';

import {ProductModel} from "../model/product.model";
import {CartService} from "../service/cart.service";

@Component({
  providers: [CartService],

  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private products: ProductModel[] = [];

  // inject service
  constructor(private cartService: CartService) {  }

  ngOnInit() {
    this.getProducts();
    // for (let i = 0; i < this.products.length; i++) {
    //   console.log('todos: ' + this.products[i].toString());
    // }
  }

  getProducts(): void {
    this.cartService.getProducts()
      .subscribe(products => this.products = products);
  }

  isEmpty() : boolean {
    return this.products.length > 0;
  }

  addProduct(product : ProductModel) {
      this.products.push(product);
  }

}
