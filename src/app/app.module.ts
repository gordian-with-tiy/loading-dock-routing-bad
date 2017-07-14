import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Dir1Module } from './dir1/dir1.module';

import { routes } from './router.config';
import { AppComponent } from './app.component';
import { Area5Component } from './area5/area5.component';
import { Area6Component } from './area6/area6.component';
import { ArghComponent } from './argh/argh.component';

@NgModule({
  declarations: [
    AppComponent,
    Area5Component,
    Area6Component,
    ArghComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    Dir1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
