import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './app/home/home.component';
import { BiomassaComponent } from './app/biomassa/biomassa.component';
import { HidraulicaComponent } from './app/hidraulica/hidraulica.component';
import { SolarComponent } from './app/solar/solar.component';
import { EolicaComponent } from './app/eolica/eolica.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biomassa', component: BiomassaComponent },
  { path: 'hidraulica', component: HidraulicaComponent },
  { path: 'solar', component: SolarComponent },
  { path: 'eolica', component: EolicaComponent },
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
