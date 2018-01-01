import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns = ['quantity', 'name', 'price'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

export interface Element {
  name: string;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: Element[] = [
  {quantity: 2, name: 'Risotto', price: 10},
  {quantity: 2, name: 'Tikka Masala', price: 15},
  {quantity: 6, name: 'Sushi', price: 12},
  {quantity: 4, name: 'Drinks', price: 9}
];
