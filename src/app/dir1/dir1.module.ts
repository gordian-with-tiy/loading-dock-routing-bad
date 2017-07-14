import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Area1Component } from './area1/area1.component';
import { Area2Component } from './area2/area2.component';
import { Dir1RoutingModule } from './dir1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Dir1RoutingModule
  ],
  declarations: [
    Area1Component,
    Area2Component
  ]
})
export class Dir1Module { }
