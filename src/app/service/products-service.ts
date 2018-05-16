import { Injectable } from '@angular/core';

import { IProduct, ProductModel } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProduct() {
    return [
      new ProductModel('Product A', 10, true),
      new ProductModel('Product B', 5, false),
      new ProductModel('Product C', 1, true),
    ];
  }
}
