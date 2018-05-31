import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardListComponent} from "./card-list/card-list.component";
import {CardComponent} from "./card/card.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardListComponent,
    CardComponent
  ],
  exports: [
    CardListComponent,
    CardComponent
  ],
  bootstrap: [CardListComponent] // @todo Do we need it?
})
export class CartModule { }
