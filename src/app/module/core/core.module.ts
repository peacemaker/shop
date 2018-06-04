import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LocalStorageService} from "../../service/local-storage.service";
import {ConfigOptionsService} from "../../service/config-options.service";
import {Constants, ConstantsService} from "../../service/constants.service";
import {GeneratorService, BaseGeneratorService, GeneratorServiceFactory} from "../../service/generator.service";

import {DemoComponent} from "./demo/demo.component";

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    {provide: ConstantsService, useValue: Constants},
    GeneratorService,
    {
      provide: BaseGeneratorService,
      useFactory: GeneratorServiceFactory(8),
      deps: [GeneratorService]
    }
  ],
  exports: [
    DemoComponent
  ],
})
export class CoreModule { }
