import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  exibir: boolean = true;
  exibirMensagem(): void {
    this.exibir = !this.exibir; // toggle
  }
  exibirAlerta(): void {
    window.alert('Esta funcionando');
  }
}
