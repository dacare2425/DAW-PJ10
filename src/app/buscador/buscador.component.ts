import { Component } from '@angular/core';
import * as data from '../../../public/pj10.json';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { countries } from '../../../public/countries-data';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';



export interface Country {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule
  ],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  textInput: string = '';
  jsonData = (data as any).default;
  paisesFiltrados: string = '';
  countCtrl = new FormControl('');
  filteredCountries: Observable<Country[]>;
  countries = countries;
  isActive: boolean = false;

  constructor() {
    console.log(this.jsonData);
    this.filteredCountries = this.countCtrl.valueChanges.pipe(
      startWith(''),
      map(country => (country ? this._filterCountries(country) : this.countries.slice())),
    );
  }
  private _filterCountries(value: string): Country[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  onKeydown(event: KeyboardEvent): void {
    this.isActive = true;
    if (event.key === 'Tab') {
      const filtered = this._filterCountries(this.countCtrl.value || '');
      if (filtered.length === 1) {
        this.countCtrl.setValue(filtered[0].name);
        event.preventDefault(); 
      }
    }
  } 


  buscar() {
    const paisBuscado = this.countCtrl.value ?? '';
    console.log("Buscando: ", paisBuscado);
    const resultado = this.filtraPais(paisBuscado);
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
