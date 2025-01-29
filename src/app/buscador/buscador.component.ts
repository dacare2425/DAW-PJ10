import { Component } from '@angular/core';
import data from '../../../public/data/pj10.json';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  paises: any[] = data.paises;
  filtrarPorPais(){
    return this.paises;
  }
}
