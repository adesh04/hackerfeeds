import { Routes } from '@angular/router';
import { TopComponent } from './containers/top/top.component';

import { NotFoundComponent } from './containers/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },

  // List views
  { path: 'top', component: TopComponent },
  { path: 'top/:page', component: TopComponent },

  // Detail views

  // Not found
  { path: '**', component: NotFoundComponent },
];
