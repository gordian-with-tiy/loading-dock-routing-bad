import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Area1Component } from './area1/area1.component';
import { Area2Component } from './area2/area2.component';

const routes: Routes = [
  { path: 'pizza',
    children: [
      { path: '',
        component: Area1Component,
        children: [
          { path: 'mug', component: Area2Component }
        ] },
      { path: 'cup', component: Area2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dir1RoutingModule { }
