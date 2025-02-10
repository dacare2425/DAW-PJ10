import { Component, ViewChild, HostListener } from '@angular/core';
import { MatTabsModule, MatTabGroup } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biomassa',
  standalone: true,
  imports: [MatTabsModule,CommonModule],
  templateUrl: './biomassa.component.html',
  styleUrl: './biomassa.component.css'
})
export class BiomassaComponent {
  isActive: boolean = false;

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.tabGroup) return;

    const index = this.tabGroup.selectedIndex ?? 0;
    
    if (event.key === 'ArrowRight') {
      this.tabGroup.selectedIndex = Math.min(index + 1, this.tabGroup._tabs.length - 1);
    } else if (event.key === 'ArrowLeft') {
      this.tabGroup.selectedIndex = Math.max(index - 1, 0);
    }
  }
}
