import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //defino nombre en el componente principal para tener una variable para pasarle al componente para no tener un nombre harcodeado
  public myName:string = 'Daniela';
}
