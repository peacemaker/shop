import {Component, OnInit} from '@angular/core';

enum Category {
  Phone, TV, Notebook
}

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category = Category;
  isAvailable: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
