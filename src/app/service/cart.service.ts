import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {Category} from "../enum/category.enum";
import {ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products : Observable<ProductModel[]>;

  constructor() {
  }

  getProducts(): Observable<ProductModel[]>  {
    return this.products;
  }

  // addProduct(product: ProductModel) {
  //   this.products.push(product);
  // }
}
