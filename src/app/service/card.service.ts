import {Injectable} from '@angular/core';
import {ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  items: Map<ProductModel, number> = new Map<ProductModel, number>();
  count: number = 0;
  total: number = 0;

  constructor() {
  }

  /**
   *
   * @returns {Map<ProductModel, number>}
   */
  getProducts(): Map<ProductModel, number> {
    return this.items;
  }

  /**
   *
   * @param {ProductModel} product
   */
  addProduct(product: ProductModel): void {
    if (!this.items.has(product)) {
      this.items.set(product, 1);
    } else {
      let count = this.items.get(product);
      this.items.set(product, count + 1);
      //this.items.push(product);
    }
    this.total += product.getPrice();
    this.count++;
  }

  /**
   *
   * @returns {number}
   */
  getCount(): number {
    return this.count;
  }

  /**
   *
   * @returns {number}
   */
  getTotal(): number {
    return this.total;
  }

  /**
   *
   * @param {ProductModel} product
   */
  removeProduct(product: ProductModel): void {
    if (!this.items.has(product)) {
      return;
    }

    let count = this.items.get(product);
    if (count < 2) {
      this.items.delete(product);
    } else {
      this.items.set(product, count - 1);
    }

    this.count--;
    this.total -= product.getPrice();
  }

  /**
   *
   */
  removeAllProducts(): void {
    this.items = new Map<ProductModel, number>();
    this.count = 0;
    this.total = 0;
  }
}
