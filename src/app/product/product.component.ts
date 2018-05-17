import {Component, Input, OnInit} from '@angular/core';

import { IProduct, ProductModel } from '../model/product.model';
import {CartService} from "../service/cart.service";

@Component({
  providers: [CartService],

  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  imageUrl: string = "assets/img_avatar.png";

  // inject service
  constructor(private cartService: CartService) {  }

  ngOnInit() {
    //console.log(this.product.toString());
  }

  onBuy() {
    //this.cartService.addProduct(this.product);
    console.info(this.product.toString());
  }

}
