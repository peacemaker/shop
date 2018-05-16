import {Component, OnInit} from '@angular/core';


enum Category {
  NA = 'n/a',
  Phone = 'phone',
  TV = 'TV',
  Notebook = 'Notebook'
}

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  name: string = 'Default';
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  price: number;
  category: Category = Category.NA;
  isAvailable: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
