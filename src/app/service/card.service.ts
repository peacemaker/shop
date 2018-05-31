import { Injectable } from '@angular/core';
import {ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  items : Array<ProductModel> = [];
  total : number = 0;

  constructor() { }

  getProducts() : Array<ProductModel> {
    return this.items;
  }

  addProduct(product: ProductModel) {
    this.items.push(product);
    this.total += product.getPrice();
  }

  getTotal() : number {
    return this.total;
  }

  removeProduct(product: ProductModel) : void {
    var index = this.items.indexOf(product, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.total -= product.getPrice();
  }
}
