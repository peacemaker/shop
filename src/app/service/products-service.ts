import { Injectable } from '@angular/core';

import { Category } from '../enum/category-enum';
import { IProduct, ProductModel } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProduct() {
    return [
      new ProductModel(
        'Product A',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        Category.Notebook,
        10,
        true
      ),
      new ProductModel(
        'Product B',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        Category.TV,
        5,
        false
      ),
      new ProductModel(
        'Product C',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        Category.Phone,
        1,
        true
      ),
    ];
  }
}
