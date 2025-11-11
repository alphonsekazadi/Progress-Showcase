import { Routes } from '@angular/router';
import { Pricing } from './pricing/pricing';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'pricing', component: Pricing },
  { path: 'contact', component: Contact }
];
