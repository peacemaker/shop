import { Injectable } from '@angular/core';

import { Category } from '../enum/category.enum';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() : Array<ProductModel> {
    return [
      new ProductModel(
        1,
        'Notebook A',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        Category.Notebook,
        10,
        true,
        "assets/notebook.png"
      ),
      new ProductModel(
        2,
        'TV B',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        Category.TV,
        5,
        false,
        "assets/tv.png"
      ),
      new ProductModel(
        3,
        'Phone C',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        Category.Phone,
        1,
        true,
        "assets/phone.png"
      ),
    ];
  }
}
