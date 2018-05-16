import { Component, OnInit } from '@angular/core';

import { IProduct, ProductModel } from '../model/product-model';
import { ProductsService } from '../service/products-service';

@Component({
  providers: [ProductsService],

  selector: 'app-product-list-component',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

   // inject service
  constructor(private productsService: ProductsService) {  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    // for (let i = 0; i < this.products.length; i++) {
    //   console.log('todos: ' + this.products[i].toString());
    // }
  }

}
