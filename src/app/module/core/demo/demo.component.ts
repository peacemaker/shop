import {Component, Inject, OnInit} from '@angular/core';
import {BaseGeneratorService} from "../../../service/generator.service";
import {ConstantsService} from "../../../service/constants.service";

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  content: string;

  constructor(
    @Inject(BaseGeneratorService) private baseGeneratorService: string,
    public constantsService: ConstantsService
  ) { }

  ngOnInit() {
    this.content = this.baseGeneratorService;
  }

}
