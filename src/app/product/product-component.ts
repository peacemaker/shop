import {Component, Input, OnInit} from '@angular/core';

import { IProduct, ProductModel } from '../model/product-model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  imageUrl: string = "assets/img_avatar.png";

  constructor() {
  }

  ngOnInit() {
    //console.log(this.product.toString());
  }

  onBuy() {
    console.info(this.product.toString());
  }

}
