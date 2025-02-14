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
  paisesFiltrados: string = '';
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
    const resultado: { nombre?: string, imagen?: { src?: string }, poblacion?: string, continente?: string, energia?: any, impacto?: any }[] = this.filtraPais(paisBuscado);
  
    if (!resultado || resultado.length === 0) {
      this.paisesFiltrados = `<p>No se encontraron resultados</p>`;
      return;
    }
  
    this.paisesFiltrados = resultado.map((pais) => `
      <div>
        <img src="${pais.imagen?.src || ''}" height="50">
        <h3>${pais.nombre || 'Desconocido'}</h3>
        <p><strong>Población:</strong> ${pais.poblacion || 'N/A'}</p>
        <p><strong>Continente:</strong> ${pais.continente || 'No especificado'}</p>
        
        <h4>Energía</h4>
        <ul>
          <li><strong>Solar:</strong> ${pais.energia?.solar?.produccion_total_MWh || 0} MWh</li>
          <li>Plantas: ${(pais.energia?.solar?.plantas_principales || []).join(', ') || 'Ninguna'}</li>
          
          <li><strong>Eólica:</strong> ${pais.energia?.eolica?.produccion_total_MWh || 0} MWh</li>
          <li>Plantas: ${(pais.energia?.eolica?.plantas_principales || []).join(', ') || 'Ninguna'}</li>
          
          <li><strong>Hidráulica:</strong> ${pais.energia?.hidraulica?.produccion_total_MWh || 0} MWh</li>
          <li>Plantas: ${(pais.energia?.hidraulica?.plantas_principales || []).join(', ') || 'Ninguna'}</li>
          
          <li><strong>Biomasa:</strong> ${pais.energia?.biomasa?.produccion_total_MWh || 0} MWh</li>
          <li>Plantas: ${(pais.energia?.biomasa?.plantas_principales || []).join(', ') || 'Ninguna'}</li>
        </ul>
  
        <h4>Impacto</h4>
        <p><strong>Reducción de CO2:</strong> ${pais.impacto?.reduccion_gases_invernadero_tonCO2 || 0} toneladas</p>
        <p><strong>Dependencia fósil:</strong> ${pais.impacto?.dependencia_combustibles_fosiles || 'Desconocida'}</p>
        <p><strong>Políticas necesarias:</strong> ${(pais.impacto?.politicas_necesarias || []).join(', ') || 'Ninguna'}</p>
  
        <h4>Beneficios</h4>
        <p><strong>Económicos:</strong> ${pais.impacto?.beneficios?.economicos || 'No especificado'}</p>
        <p><strong>Medioambientales:</strong> ${pais.impacto?.beneficios?.medioambientales || 'No especificado'}</p>
        <p><strong>Sociales:</strong> ${pais.impacto?.beneficios?.sociales || 'No especificado'}</p>
      </div>
    `).join('');
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
  paisesPorContinente: string = '';

  buscaContinente() {
    console.log("Valor seleccionado:", this.selectedValue);
  
    if (!this.selectedValue) {
      console.warn("No se ha seleccionado ningún continente.");
      return;
    }
  
    const resultado = this.filtraContinente(this.selectedValue);  
    this.paisesPorContinente = resultado.map((pais: { nombre?: string, imagen?: { src?: string }, poblacion?: string }) =>
      `<div>
        <img src="${pais.imagen?.src || ''}" height="25">
        <span>${pais.nombre || 'Desconocido'}</span>
      </div>`
    ).join('');
  }
  
  
  
  
  filtraContinente(continenteSeleccionado: string) {
    return this.jsonData.paises.filter((item: { continente?: string }) =>
      typeof item === 'object' &&
      item.continente?.toLowerCase() === continenteSeleccionado.toLowerCase()
    );
  }
  


}    
