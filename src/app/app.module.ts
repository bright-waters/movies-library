import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    EditMovieComponent,
    AddMovieComponent,
    DeleteMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
