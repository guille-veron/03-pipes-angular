import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitán América';
  nombre2:string = 'GuiLLERmo vERoN';
  activar:boolean = true;
  arreglo = [1,2,3,4,5,6,7];
  PI: number = Math.PI;
  porcentaje: number = 0.876;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'es';
  videoUrl :string = 'https://www.youtube.com/embed/adMC9gFeITc';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llegó la data');
    }, 4500);

  });
  json = {
            "marcadores": [
              {
                "latitude": 40.416875,
                "longitude": -3.703308,
                "city": "Madrid",
                "description": "Puerta del Sol"
              },
              {
                "latitude": 40.417438,
                "longitude": -3.693363,
                "city": "Madrid",
                "description": "Paseo del Prado"
              },
              {
                "latitude": 40.407015,
                "longitude": -3.691163,
                "city": "Madrid",
                "description": "Estación de Atocha"
              }
            ]
        }
}
