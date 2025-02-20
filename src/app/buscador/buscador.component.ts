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
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { JsonHtmlPipe } from '../json-html.pipe';

export interface Continent {
  value: string;
  viewValue: string;
}

export interface Country {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [
    JsonHtmlPipe,
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
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  textInput: string = '';
  jsonData = (data as any).default;
  paisesFiltrados: any[] = []; // Cambiado a any[]
  countCtrl = new FormControl('');
  filteredCountries: Observable<Country[]>;
  countries = countries;
  isActive: boolean = false;
  selectedValue: string = '';

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

  buscaPais() {
    const paisBuscado = this.countCtrl.value ?? '';
    console.log("Buscando: ", paisBuscado);
    const resultado = this.filtraPais(paisBuscado);

    if (!resultado || resultado.length === 0) {
      this.paisesFiltrados = []; // Limpiar resultados
      return;
    }

    this.paisesPorContinente = []; // Limpiar resultados de continente
    this.paisesFiltrados = resultado; // Almacenar el objeto JSON
  }

  filtraPais(paisBuscado: string) {
    if (!this.jsonData || !Array.isArray(this.jsonData.paises)) {
      console.error("El JSON no tiene la estructura esperada");
      return [];
    }

    return this.jsonData.paises.filter((item: any) =>
      item && item.nombre && typeof item.nombre === 'string' &&
      item.nombre.toLowerCase() === paisBuscado.toLowerCase()
    );
  }

  continents: Continent[] = [
    { value: 'Europe', viewValue: 'Europa' },
    { value: 'Asia', viewValue: 'Asia' },
    { value: 'North America', viewValue: 'Norteamérica' },
    { value: 'South America', viewValue: 'Sudamérica' },
    { value: 'Africa', viewValue: 'África' }
  ];
  paisesPorContinente: any[] = []; // Cambiado a any[]

  buscaContinente() {
    console.log("Valor seleccionado:", this.selectedValue);

    if (!this.selectedValue) {
      console.warn("No se ha seleccionado ningún continente.");
      return;
    }

    this.paisesFiltrados = []; // Limpiar resultados de país
    const resultado = this.filtraContinente(this.selectedValue);

    if (!resultado || resultado.length === 0) {
      this.paisesPorContinente = []; // Limpiar resultados
      return;
    }

    this.paisesPorContinente = resultado; // Almacenar el objeto JSON
  }

  filtraContinente(continenteSeleccionado: string) {
    return this.jsonData.paises.filter((item: { continente?: string }) =>
      typeof item === 'object' &&
      item.continente?.toLowerCase() === continenteSeleccionado.toLowerCase()
    );
  }

  limpieza() {
    this.countCtrl.setValue('');
    this.selectedValue = '';
    this.paisesFiltrados = [];
    this.paisesPorContinente = [];
  }
}