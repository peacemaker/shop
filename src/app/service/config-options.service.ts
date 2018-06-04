import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  protected id: number;
  protected login: string;
  protected email: string;

  constructor() { }

  /**
   *
   * @param {number} id
   */
  setId(id: number): void {
    this.id = id;
  }

  /**
   *
   * @returns {number}
   */
  getId(): number {
    return this.id;
  }

  /**
   *
   * @param {string} login
   */
  setLogin(login: string): void {
    this.login = login;
  }

  /**
   *
   * @returns {string}
   */
  getLogin(): string {
    return this.login;
  }

  /**
   *
   * @param {string} email
   */
  setEmail(email: string): void {
    this.email = email;
  }

  /**
   *
   * @returns {string}
   */
  getEmail(): string {
    return this.email;
  }
}
