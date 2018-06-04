import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }
}

export const Constants = {
  App: "TaskManager",
  Ver: "1.0"
}