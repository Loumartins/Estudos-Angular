import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {
  numero: number = 0;
  onChangeNumber() {
    this.numero = Math.floor(Math.random() * 100);
  }
  numeroInicial: number = 0;
  onMudandoNumero() {
    this.numeroInicial = Math.floor(Math.random() * 100);
  }
}
