import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListMoviesComponent} from './components/list-movies/list-movies.component';
import {EditMovieComponent} from './components/edit-movie/edit-movie.component';
import {DeleteMovieComponent} from './components/delete-movie/delete-movie.component';
import {AddMovieComponent} from './components/add-movie/add-movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/viewMovies', pathMatch: 'full' },
  { path: 'viewMovies', component: ListMoviesComponent },
  { path: 'editMovie/:movieId', component: EditMovieComponent },
  { path: 'deleteMovie/:movieId', component: DeleteMovieComponent },
  { path: 'addMovie/:movieId', component: AddMovieComponent }
];

@NgModule({

  exports: [ RouterModule ],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
