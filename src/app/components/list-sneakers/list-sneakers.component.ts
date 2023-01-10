import { Component } from '@angular/core';

@Component({
  selector: 'app-list-sneakers',
  templateUrl: './list-sneakers.component.html',
  styleUrls: ['./list-sneakers.component.css'],
})
export class ListSneakersComponent {
  sneakers = [
    { snk: 'Nike Dunk', value: 900 },
    { snk: 'Nike Air Max 90', value: 760 },
    { snk: 'Nike Air Max 200', value: 580 },
    { snk: 'Nike Air Max 720', value: 650 },
    { snk: 'Adidas Yeezy 500', value: 1800 },
    { snk: 'Adidas Yeezy 700', value: 1300 },
  ];
}
