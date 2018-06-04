import {Component, Inject, OnInit} from '@angular/core';
import {BaseGeneratorService} from "./service/generator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shop';
  content: string;

  constructor(
    @Inject(BaseGeneratorService) private baseGeneratorService: string
  ) { }

  ngOnInit() {
    this.content = this.baseGeneratorService;
  }

}