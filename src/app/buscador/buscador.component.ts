import { Component } from '@angular/core';
import * as data from '../../../public/pj10.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  standalone:true,
  imports: [FormsModule,CommonModule] ,
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  textInput: string = '';
  jsonData = (data as any).default;
  paisesFiltrados: string = '';

  constructor() {
    console.log(this.jsonData);
  }

  buscar() {
    console.log("Buscando: ", this.textInput);
    const resultado = this.filtraPais(this.textInput);
    this.paisesFiltrados = JSON.stringify(resultado, null, 2);
    console.log(resultado);
  }

  filtraPais(paisBuscado: string) {
    return this.jsonData.paises.filter((item: { nombre: string }) =>
      typeof item === 'object' &&
      item.nombre.toLowerCase() === paisBuscado.toLowerCase()
    );
  }
}    
