import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cartas',
  template: `
  <div class="container">
    <div class="column" #col1>Columna 1</div>
    <div class="column" #col2>Columna 2</div>
    <div class="column" #col3>Columna 3</div>
    <div class="column" #col4>Columna 4</div>
  </div>
  <button (click)="rotateColumns()">Rotar Columnas</button>
`,
styles: [
  `
    .container {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
    .column {
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      background-color: #f3f3f3;
    }
  `,
],
})
export class CartasComponent {
  @ViewChild('col1') col1!: ElementRef;
  @ViewChild('col2') col2!: ElementRef;
  @ViewChild('col3') col3!: ElementRef;
  @ViewChild('col4') col4!: ElementRef;

  rotateColumns(): void {
    this.col1.nativeElement.classList.toggle('rotated');
    this.col2.nativeElement.classList.toggle('rotated');
    this.col3.nativeElement.classList.toggle('rotated');
    this.col4.nativeElement.classList.toggle('rotated');
  }
}