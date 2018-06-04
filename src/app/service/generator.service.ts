import {Injectable, InjectionToken} from '@angular/core';

export const BaseGeneratorService = new InjectionToken<string>('BaseGeneratorService');

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  static readonly MAX: number = 32;

  constructor() {
  }

  build(): string {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < GeneratorService.MAX; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}

export function GeneratorServiceFactory(take: number) {

  return function (data: GeneratorService): string {
    return data.build().slice(0, take);
  };

}