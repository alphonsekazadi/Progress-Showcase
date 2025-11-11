import { Routes } from '@angular/router';
import { Pricing } from './pricing/pricing';

export const routes: Routes = [
  { path: 'pricing', component: Pricing },
  { path: '', pathMatch: 'full', redirectTo: '' }
];
