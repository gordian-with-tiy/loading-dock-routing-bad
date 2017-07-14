import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dir2RoutingModule } from './dir2-routing.module';

import { Area3Component } from './area3/area3.component';
import { Area4Component } from './area4/area4.component';

@NgModule({
  imports: [
    CommonModule,
    Dir2RoutingModule
  ],
  declarations: [
    Area3Component,
    Area4Component
  ]
})
export class Dir2Module { }
