import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';

export const routes: Routes = [

      {
    path: '',
    component: Hero
  },

  {
    path: '**',
    redirectTo: ''
  }

];
