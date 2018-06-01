import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CardListComponent} from "./card-list/card-list.component";
import {CardComponent} from "./card/card.component";
import {KeysPipe} from "../../keys.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardListComponent,
    CardComponent,
    KeysPipe
  ],
  exports: [
    CardListComponent,
    CardComponent,
    KeysPipe
  ],
  bootstrap: [CardListComponent] // @todo Do we need it?
})
export class CartModule {
}
