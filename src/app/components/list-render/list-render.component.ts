import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    { name: 'Orfeu', type: 'Dog' },
    { name: 'Amara', type: 'Cat' },
    { name: 'Teteu', type: 'Bird' },
    { name: 'Astolfo', type: 'Hamster' },
  ];
}
