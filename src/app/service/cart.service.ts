import { Injectable } from '@angular/core';
import {Category} from "../enum/category.enum";
import {ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts() {
    return [
      new ProductModel(
        'Product 1',
        'test',
        Category.Notebook,
        255,
        true
      ),
    ];
  }
}
