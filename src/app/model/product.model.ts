import { Category } from '../enum/category.enum';
import { Product } from "./product";

export class ProductModel implements Product {

  constructor(
    private id: number,
    private name: string,
    private description : string,
    private category: Category,
    private price: number,
    private available: boolean,
    private image:string = "assets/unknown.png"
  ) { }

  getId(): number {
    return this.id;
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

  getImage(): string {
    return this.image;
  }

  toString() {
    return 'name = ' + this.name + ' '
      + 'price = ' + this.price + ' '
      + 'available = ' + ((this.available === true) ? ' true' : 'false');
  }
}