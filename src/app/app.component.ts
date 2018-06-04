import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shop';
}

// export class AppComponent implements OnInit {
//   title = 'Shop';
//   content: string;
//
//   constructor(
//     @Inject(BaseGeneratorService) private baseGeneratorService: string
//   ) { }
//
//   ngOnInit() {
//     this.content = this.baseGeneratorService;
//   }
//
// }