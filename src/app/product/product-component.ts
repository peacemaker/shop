import {Component, Input, OnInit} from '@angular/core';

import { IProduct, ProductModel } from '../model/product-model';

enum Category {
  NA = 'n/a',
  Phone = 'phone',
  TV = 'TV',
  Notebook = 'Notebook'
}

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  //name: string = 'Product';
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  //price: number = null;
  category: Category = Category.NA;
  //isAvailable: boolean;
  imageUrl: string = "assets/img_avatar.png";

  constructor() {
  }

  ngOnInit() {
    //console.log(this.product.toString());
  }

  onBuy() {
    console.info(
      'Name : ' + this.product.getName() + ';',
      'Category : ' + this.category.toString() + ';',
      'Price : '+ this.product.getPrice() + ';'
    );
  }

}
