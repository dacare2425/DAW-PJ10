import { Component } from '@angular/core';
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
  components = [
    { name: 'Biomassa', link: '/biomassa', isFlipped: false },
    { name: 'Eolica', link: '/eolica', isFlipped: false },
    { name: 'Hidraulica', link: '/hidraulica', isFlipped: false },
    { name: 'Solar', link: '/solar', isFlipped: false }
  ];

  rotateColumn(index: number): void {
    this.components[index].isFlipped = !this.components[index].isFlipped;
  }
}
