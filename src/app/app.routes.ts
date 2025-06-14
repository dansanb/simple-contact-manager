import { Routes } from '@angular/router';
import {Home} from './components/home/home';
import {ContactsIndex} from './components/contacts/contacts-index/contacts-index';
import {ContactsCreate} from './components/contacts/contacts-create/contacts-create';
import {ContactsUpdate} from './components/contacts/contacts-update/contacts-update';
import {About} from './components/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contacts-index', component: ContactsIndex },
  { path: 'contacts-create', component: ContactsCreate },
  { path: 'contacts-update', component: ContactsUpdate },
  { path: 'about', component: About },
];
