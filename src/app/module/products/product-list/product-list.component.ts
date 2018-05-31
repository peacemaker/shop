import {Component, Input, OnInit} from '@angular/core';

import {ProductModel} from '../../../model/product.model';
import {ProductService} from "../../../service/product.service";
import {CardService} from "../../../service/card.service";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<ProductModel>;

  constructor(
    public productService :ProductService,
    public cardService : CardService
  ) {  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onAddToCard(product: ProductModel): void {
    this.cardService.addProduct(product);
    console.log('ProductListComponent.onAddToCard()', product);
  }

}
