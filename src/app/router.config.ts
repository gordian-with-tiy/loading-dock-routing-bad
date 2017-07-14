import { Routes } from '@angular/router';
import { Area5Component } from './area5/area5.component';
import { Area6Component } from './area6/area6.component';
import { ArghComponent } from './argh/argh.component';

export const routes: Routes = [
  { path: '', component: Area5Component },
  { path: 'tea', component: Area6Component },
  { path: 'water',
    loadChildren: './dir2/dir2.module#Dir2Module' },
  { path: '**', component: ArghComponent }
];

export default routes;
