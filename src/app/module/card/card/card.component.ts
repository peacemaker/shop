import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../../model/product.model";

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() removeProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

  onRemoveProduct() : void {
    this.removeProduct.emit(this.product);
    console.log('CardComponent.onRemoveProduct()', this.product);
  }
}
