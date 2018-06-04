import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  /**
   *
   * @param {string} key
   * @param value
   */
  setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  /**
   *
   * @param {string} key
   * @returns {any}
   */
  getItem(key: string): any {
    return localStorage.getItem(key);
  }

  /**
   *
   * @param {string} key
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
