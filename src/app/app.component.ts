import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import {routes} from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <div class="header-left">
        <img src="img/logo.jpg" alt="Logo">
        <nav>
          <a routerLink="/" routerLinkActive="active">Home</a>
          <a routerLink="/biomassa" routerLinkActive="active">Biomasa</a>
          <a routerLink="/hidraulica" routerLinkActive="active">Hidráulica</a>
          <a routerLink="/solar" routerLinkActive="active">Solar</a>
          <a routerLink="/eolica" routerLinkActive="active">Eólica</a>
          <a routerLink="/buscador" routerLinkActive="active">Buscador</a>
        </nav>
      </div>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PJ10';
}
