export interface IProduct {
  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
   */
  toString(): string;

  getName(): string;
  getPrice(): number;
  isAvailable(): boolean;
}

export class ProductModel implements IProduct {
  private name: string;
  private price: number;
  private available: boolean;

  constructor(name: string, price: number, available: boolean) {
    this.name = name;
    this.price = price;
    this.available = (available === true);
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  isAvailable(): boolean {
    return (this.available === true);
  }

  toString() {
    return 'name = ' + this.name + ' '
      + 'price = ' + this.price + ' '
      + 'available = ' + ((this.available === true) ? ' true' : 'false');
  }

}