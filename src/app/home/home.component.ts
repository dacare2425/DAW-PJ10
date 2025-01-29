import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cartas',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],  
})
export class HomeComponent {
  // Lista de componentes con sus nombres y enlaces correspondientes
  components = [
    { name: 'Biomassa', link: '/biomassa' },
    { name: 'Eólica', link: '/eolica' },
    { name: 'Hidráulica', link: '/hidraulica' },
    {name: 'Solar', link: "/solar"}
  ];

  constructor() {
    console.log(this.components);
  }

  // Función para rotar la carta correspondiente
  rotateColumn(index: number): void {
    const column = document.querySelector(`.column:nth-child(${index + 1})`);
    if (column) {
      column.classList.toggle('rotated');
    }
  }
}
