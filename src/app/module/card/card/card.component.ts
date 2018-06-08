import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../../model/product.model";

@Component({
  selector: 'tr .test',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() removeProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Input() product: ProductModel;
  @Input() count: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onRemoveProduct(): void {
    this.removeProduct.emit(this.product);
    console.log('CardComponent.onRemoveProduct()', this.product);
  }
}
