import { Category } from '../enum/category.enum';

export interface IProduct {
  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
   */
  toString(): string;

  getName(): string;
  getDescription(): string;
  getCategory(): Category;
  getPrice(): number;
  isAvailable(): boolean;
}

export class ProductModel implements IProduct {

  private name: string;
  private description: string;
  private category: Category;
  private price: number;
  private available: boolean;

  constructor(
    name: string,
    description : string,
    category: Category,
    price: number,
    available: boolean
  ) {
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.available = (available === true);
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getCategory(): Category {
    return this.category;
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