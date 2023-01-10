import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Compartilhamento de dados do component pai para o componente filho
  userName = 'Gabriela';
  userData = {
    email: 'gabriela123@gmail.com',
    role: 'Admin',
  };
  title = 'curso-angular';
}
