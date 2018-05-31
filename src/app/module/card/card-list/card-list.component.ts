import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../model/product.model";
import {CardService} from "../../../service/card.service";

@Component({
  selector: 'app-card-list-component',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() products: Array<ProductModel>;

  constructor(
    public cardService : CardService
  ) { }

  ngOnInit() {
    this.products = this.cardService.getProducts();
  }

  getCount() : number {
    return this.products.length;
  }

  getTotal() : number {
    return this.cardService.getTotal();
  }

  onRemoveFromCard(product: ProductModel): void {
    this.cardService.removeProduct(product);
    console.log('CardListComponent.onRemoveFromCard()', product);
  }

}
