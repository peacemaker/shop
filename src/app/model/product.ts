import {Category} from "../enum/category.enum";

export interface Product {
  /**
   * @returns {number}
   */
  getId() : number;

  /**
   *
   * @returns {string}
   */
  getName(): string;

  /**
   *
   * @returns {string}
   */
  getDescription(): string;

  /**
   *
   * @returns {Category}
   */
  getCategory(): Category;

  /**
   *
   * @returns {number}
   */
  getPrice(): number;

  /**
   *
   * @returns {boolean}
   */
  isAvailable(): boolean;

  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
   */
  toString(): string;
}