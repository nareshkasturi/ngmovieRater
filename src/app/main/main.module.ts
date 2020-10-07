import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { ReactiveFormsModule } from '@angular/forms'
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

const routes : Routes = [
  {path: 'movies', component: MainComponent}
]

@NgModule({
  declarations: [
    MainComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieFormComponent,],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ApiService,
  ]
})
export class MainModule { }
