import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {ProductsModule} from "./module/products/products.module";

import { AppComponent } from './app.component';
import {CartModule} from "./module/card/cart.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
