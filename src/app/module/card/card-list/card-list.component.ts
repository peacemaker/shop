import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../model/product.model";
import {CardService} from "../../../service/card.service";

@Component({
  selector: 'app-card-list-component',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  //@Input() products: Array<ProductModel>;

  constructor(
    public cardService: CardService
  ) {
  }

  ngOnInit() {
  }

  /**
   *
   * @returns {IterableIterator<[ProductModel , number]>}
   */
  getProducts() {
    return this.cardService.getProducts().entries();
  }

  /**
   *
   * @returns {number}
   */
  getCount(): number {
    return this.cardService.getCount();
  }

  /**
   *
   * @returns {number}
   */
  getTotal(): number {
    return this.cardService.getTotal();
  }

  /**
   *
   * @param {ProductModel} product
   */
  onRemoveFromCard(product: ProductModel): void {
    this.cardService.removeProduct(product);
    console.log('CardListComponent.onRemoveFromCard()', product);
  }

  onRemoveAllProducts(): void {
    this.cardService.removeAllProducts();
    console.log('CardListComponent.onRemoveAllProducts()');
  }
}
