import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Orfeu', type: 'Dog', age: 5 },
    { name: 'Amara', type: 'Cat', age: 10 },
    { name: 'Teteu', type: 'Bird', age: 2 },
    { name: 'Astolfo', type: 'Hamster', age: 1 },
  ];
  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)`;
  }
}
