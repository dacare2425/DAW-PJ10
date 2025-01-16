import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ESolarComponent } from './app/solar.component';
import { EBiomasaComponent } from './app/biomasa.component';
import { EEolicaComponent } from './app/eolica.component';
import { EHidraulicaComponent } from './app/hidraulica.component';
import { HomeComponent } from './app/home.component';
import { IndexComponent } from './app/index.component';

bootstrapApplication(IndexComponent, appConfig)
  .catch((err) => console.error(err));
