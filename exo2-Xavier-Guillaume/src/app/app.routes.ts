import { Routes } from '@angular/router';
import {Liste} from './liste/liste';
import {Gestion} from './gestion/gestion';
import {Accueil} from './accueil/accueil';
import {Contact} from './contact/contact';

export const routes: Routes = [
  { path: '', component: Accueil},
  { path: 'accueil', component: Accueil},
  { path: 'liste', component: Liste},
  { path: 'liste/:tab', component: Liste },
  { path: 'contact', component: Contact},
  { path: 'gestion', component: Gestion},
  { path: '**', redirectTo: 'accueil'},
];
