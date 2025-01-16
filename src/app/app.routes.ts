import { Routes } from '@angular/router';
import { ESolarComponent } from './solar.component';
import { EBiomasaComponent } from './biomasa.component';
import { EEolicaComponent } from './eolica.component';
import { EHidraulicaComponent } from './hidraulica.component';
import { HomeComponent } from './home.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'solar', component: ESolarComponent},
    {path: 'biomasa', component: EBiomasaComponent},
    {path: 'eolica', component: EEolicaComponent},
    {path: 'hidraulica', component: EHidraulicaComponent},
    {path: '', redirectTo: '/index', pathMatch: 'full'}
];
