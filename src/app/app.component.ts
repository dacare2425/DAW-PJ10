import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
        </nav>
      </div>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #f5f7fa, #c3cfe2); 
    height: 200vw;
    color: #333;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #00796b; 
    padding: 15px 30px;
    color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
}

.header-left {
    display: flex;
    align-items: center;
}

.header-left img {
    width: 10rem;
    margin-right: 20px;
}

ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

li {
    margin-right: 20px;
}

a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

a:hover {
    background-color: white;
    color: #00796b;
}



main section {
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding: 20px;
    gap: 20px;
}

main section img {
    width: 200px;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
}

main section.left {
    flex-direction: row;
}

main section.right {
    flex-direction: row-reverse;
}

main h2 {
    color: #333;
    margin-bottom: 10px;
}

main p, main ul {
    color: #555;
}



.about-section {
    display: flex;
    justify-content: center;
    margin: 2vw 0;
}

.about-content {
    display: flex;
    align-items: center;
    gap: 3vw;
    max-width: 80%;
}

.about-content.reverse {
    flex-direction: row-reverse;
}

.about-content img {
    width: 100%;
    border-radius: 0.5vw;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    object-fit: cover;
}

.text {
    width: 90%;
}

.text h2 {
    font-size: 2.5vw;
    color: rgb(44, 62, 80);
    margin-bottom: 1vw;
}

.text p {
    font-size: 1.2vw;
    width: 100%;
    color: rgb(127, 140, 141);
    line-height: 1.5;
}

.light-background {
    background-color: rgb(235, 235, 235); 
}

.dark-background {
    background-color: rgb(154, 197, 189); 
}

.dark-background .text h2,
.dark-background .text p {
    color: rgb(255, 255, 255); 
}

.canvaImg {
    width: 50%;
    height: auto;
}`
]
})
export class AppComponent {}
