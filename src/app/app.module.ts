import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {ProductsModule} from "./module/products/products.module";

import {AppComponent} from './app.component';
import {CartModule} from "./module/card/cart.module";
import {Constants, ConstantsService} from "./service/constants.service";
import {BaseGeneratorService, GeneratorService, GeneratorServiceFactory} from "./service/generator.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    ProductsModule,
    CartModule
  ],
  providers: [
    GeneratorService,
    {provide: ConstantsService, useValue: Constants},
    {
      provide: BaseGeneratorService,
      useFactory: GeneratorServiceFactory(8),
      deps: [GeneratorService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
