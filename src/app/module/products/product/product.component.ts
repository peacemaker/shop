import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { ProductModel } from '../../../model/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

  onAddProduct(): void {
    this.addProduct.emit(this.product);
    console.log('ProductComponent.onAddProduct()', this.product);
  }
}