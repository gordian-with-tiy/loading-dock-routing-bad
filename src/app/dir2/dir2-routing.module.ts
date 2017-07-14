import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Area3Component } from './area3/area3.component';
import { Area4Component } from './area4/area4.component';

import { RouteGuards } from './route-guards';

const routes: Routes = [
  { path: '', component: Area4Component,
    canActivate: [RouteGuards],
    children: [
      { path: 'slice/:count', component: Area3Component }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RouteGuards]
})
export class Dir2RoutingModule { }
