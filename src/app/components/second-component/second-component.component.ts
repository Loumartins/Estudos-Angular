import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent {
  nome: string = 'Luiz Henrique Martins';
  endereco = {
    rua: 'Avenida Tulio Teodoro de Campos',
    numero: 6,
    apartament: 121,
  };
  stack = ['Java', 'Spring', 'Angular'];
}
