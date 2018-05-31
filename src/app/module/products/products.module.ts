import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductListComponent} from "./product-list/product-list.component";
import {ProductComponent} from "./product/product.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  exports: [
    ProductListComponent,
    ProductComponent
  ],
  bootstrap: [ProductListComponent] // @todo Do we need it?
})
export class ProductsModule { }
