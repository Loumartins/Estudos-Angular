import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css'],
})
export class IfRenderComponent {
  exibir: boolean = true;
  //Condicional
  //nome = 'Marcelo';
  nome = 'Luiz Henrique Martins';
  idade = 132;
}
