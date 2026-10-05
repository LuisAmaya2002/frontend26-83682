import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Clínica Veterinaria';

  menu = [
    { etiqueta: 'Citas', ruta: '/citas' },
    { etiqueta: 'Historias médicas', ruta: '/historias-medicas' },
    { etiqueta: 'Anotaciones', ruta: '/historias-medicas/1/anotaciones' },
    { etiqueta: 'Fórmulas médicas', ruta: '/formulas-medicas' }
  ];
}
